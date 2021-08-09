const { Category, Product, Review, User } = require("../../db");
const { products: productsSeed } = require("../../../seeds");
//const { Op } = require("sequelize");

//endPoint localhost:3001/product/:id
async function getProductById(req, res, next) {
  const { id } = req.params;
  try {
    if (id) {
      const detail = await Product.findOne({
        where: { id },
        include: {
          model: Category,
        },
      });
      return res.json(detail);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  // createProducts,
  getProductById,
  /* getProduct,
  searchProducts,
  deleteProduct,
  updateProduct,
  productsByCategory,
  updateStock, */
};
