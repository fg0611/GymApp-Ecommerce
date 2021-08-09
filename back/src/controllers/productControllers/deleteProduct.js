const { Product } = require("../../db");
async function deleteProduct(req, res, next) {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    await product.destroy();
    console.log(`Deleted ${product.name} ID:${id}`)
    return res.send(`Deleted ${product.name} ID:${id}`)
  } catch (error) {
    console.error(error)
    return res.send('No se enconctro el producto');
  }
}

module.exports = {
  deleteProduct,
};
