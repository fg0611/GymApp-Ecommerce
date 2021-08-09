const { Category } = require("../db");
const { Op } = require("sequelize");

async function getCategories(_req, res, next) {
  try {
    const categories = await Category.findAll();
    return await res.send(categories);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCategories,
  /*   createCategory,
  deleteCategory,
  updateCategory, */
};
