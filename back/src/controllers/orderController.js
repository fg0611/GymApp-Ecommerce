const { User, Product, Order } = require("../db");

async function getOrders(req, res, _next) {
  const orders = await Order.findAll({
    include: [
      {
        model: Product,
      },
      {
        model: User,
        attributes: ["uuid", "email", "userName"],
      },
    ],
  });
  res.json(orders);
}

module.exports = {
  getOrders,
  /*   createOrder,
  deleteOrder,
  updateOrder,
  deleteUserOrders
  */
};
