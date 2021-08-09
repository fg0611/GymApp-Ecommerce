const { Category, Product, Review, User, product_category } = require("../../db");
const { products: productsSeed } = require('../../../seeds');
//const { Op } = require("sequelize");

//endPoint localhost:3001/product/update/:id
async function updateProductById(req, res, next) {
    try {
        let { id } = req.params;
        id = parseInt(id)
        const { name, description, images, price, stock, categories } = req.body;

        console.log(id)
        await product_category.destroy({
            where: {
                productId: id
            }
        });

        const product = await Product.findByPk(parseInt(id));

        await product.update({ name, description, images, price, stock });

        categories.forEach(async ({ name, image }) => {
            const [category] = await Category.findOrCreate({
                where: {
                    name,
                },
                defaults: { image },
            });
            await product.addCategory(category);
        });
        // console.log(`Producto ${name} actualizado ${id}`)
        return res.send(`Producto ${name} actualizado ${id}`);
    } catch (error) {
        return res.send(`Producto no actualizado`);
        next(error);
    }
}

module.exports = {
    updateProductById,
    // createProducts,
    //   getProductById,
    /* getProduct,
    searchProducts,
    deleteProduct,
    updateProduct,
    productsByCategory,
    updateStock, */
};
