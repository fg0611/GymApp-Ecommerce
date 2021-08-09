const { User, Product, Order } = require("../../db");

//Ruta localhost:3001/order/:orderId
//Recibe orderId por params y devuelve detalle de una order
//Si no lo consigue devuelve: order id:  orderId not found;
async function getOrderById(req, res, _next) {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id,
      {
        include: [
          {
            model: User,
            attributes: ["id", "firstName", "lastName", "email"]
          },
          {
            model: Product,
            attributes: ["id", "name", "price"]
          }
        ]
      });
    if (!order) {
      return res.status(404).json({
        message: "order id: " + id + " not found"
      });
    } else {
      return res.json(order);;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrderById,
  /*   createOrders,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};
