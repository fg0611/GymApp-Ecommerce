const { User, Product, Order } = require("../../db");

//Ruta localhost:3001/order/update/:id
//Recibe un id por params y devuelve una order, actualizada.
async function updateOrderById(req, res, next) {
  try {
    const { id } = req.params;
    const { userId, productId, quantity } = req.body;
    const order = await Order.findByPk(id);
    const product = await Product.findByPk(productId);
    const newQuantity = orderProduct.quantity + quantity;
    const newPrice = product.price * newQuantity;
    const newTotal = newPrice + order.total;
    const newOrder = await order.update({
      userId,
      productId,
      quantity,
      price: newPrice,
      total: newTotal,
    });
    return res.json(newOrder);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  updateOrderById,
  /*   createOrders,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};
