const { Review, User, Order, Product } = require("../db");

async function getUsers(req, res, next) {
  try {
    return;
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers,
  /* 
  createUser,
  updateUser,
  deleteUser,
  profileUser,
  loginUser,
  resetPassword,
  sendOrder, */
};
