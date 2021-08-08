const { Review } = require("../../db");

async function deleteReview(req, res, next) {
  //comment: string, rating: number
  console.log("Delete: ", req.body);
  const { userId, productId } = req.body;
  try {
    const review = await Review.findOne({ where: { userId, productId } });
    if (review) {
      await review.destroy();
      res.json("comentario eliminado");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  deleteReview,
};
