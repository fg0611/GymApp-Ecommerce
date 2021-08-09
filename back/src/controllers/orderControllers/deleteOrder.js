const { User, Product, Order, Order_Product } = require("../../db");
//Vaciar carrito
//Ruta localhost:3001/orders/delete/:Id
//Recibe un id por params y devuelve mensaje del ID de la order eliminada.
//Si no la encuentra devuelve que no se encuentra la order con el ID.

async function deleteOrder(req, res, next) {
  try {
    //Debe es cambiar el estado
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (order) {
      await order.destroy();
    return res.send(`Deleted order ID: ${order.id}`)
    } else {
      return res.status(404).send(`No order found with id ${id}`);
    }
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  deleteOrder
};
