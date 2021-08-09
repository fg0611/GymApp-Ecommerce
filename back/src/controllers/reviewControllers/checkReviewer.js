const { Product, Review, User, Order, Order_Product } = require("../../db");
const { Op } = require("sequelize");

async function checkReviewer(req, res, next) {
  //comment: string, rating: number
  console.log("Check Body: ", req.body);
  const { userId, productId } = req.body;
  try {
    const userOrders = await Order.findAll({
      where: {
        orderState: "COMPLETED",
        userId,
      },
      include: [
        {
          model: Product,
          where: { id: productId },
        },
      ],
    });
    if (userOrders?.length) {
      const findRev = await Review.findOne({ where: { userId, productId } });
      if (findRev) {
        //ya comento ... mando el review para poder mostrarlo al principio
        // y ademas para darle opcion al usuario a editarlo si asi lo desea
        res.json(findRev);
      }
      // no ha comentado
      res.send(true);
    }
    //no puede comentar
    res.send(false);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  checkReviewer,
};
