const { Review } = require("../../db");

//actualiza y envia el review actulizado
async function updateReview(req, res, next) {
  const { comment, rating, userId, productId } = req.body;
  try {
    const review = await Review.update(
      { comment, rating },
      { returning: true, where: { userId, productId } }
    );
    res.json(review[1]);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  updateReview,
};
