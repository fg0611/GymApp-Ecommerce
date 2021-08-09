const { Review, User, Product, Order, OrderLines } = require("../db");

async function createReview(req, res, next) {
  try {
    return;
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createReview,
  /*   getReviewsByProduct,
  updateReview,
  deleteReview, */
};

// {userName, text, rating}
