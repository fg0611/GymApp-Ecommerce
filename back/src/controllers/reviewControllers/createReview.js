const { Product, Review, Order } = require("../../db");

async function createReview(req, res, next) {
  //comment: string, rating: number
  const { userId, productId, comment, rating } = req.body;
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
        res.json("ya has comentado sobre este producto");
      }
      const review = await Review.create({
        userId,
        productId,
        comment,
        rating,
      });
      res.json(review);
    }
    res.json("No orders found with those Specs");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createReview,
};
