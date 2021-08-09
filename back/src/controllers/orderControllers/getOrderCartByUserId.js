const { User, Product, Order } = require("../../db");

//Ruta localhost:3001/orders/cart/:userId
//Recibe un id por params y devuelve una order CART actual.
async function getOrderCartByUserId(req, res, next) {
  try {
    const { userId } = req.params;
    console.log("getOrderCartByUserId", userId);
    const order = await Order.findOne({
      where: {
        userId,
        orderState: "CART"
      },
      include: [User, Product]
    });
    if (!order) return res.status(404).send({
      message: "No se encontró la orden"
    });
    return res.json(order);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrderCartByUserId,
  /*   createOrders,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};
