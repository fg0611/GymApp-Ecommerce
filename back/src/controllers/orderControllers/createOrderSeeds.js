const { Order, Product, User } = require("../../db");
const { orders } = require("../../../seeds");

// Solo crea users del seeds
async function createOrderSeeds() {
  /*  {
        orderState: "COMPLETED",
        userId: "49750430-28da-4202-bb69-30dd23d918c4",
        products: [
          { productId: 1, quantity: 1 },
          { productId: 2, quantity: 1 },
          { productId: 3, quantity: 1 },
        ],
      }, */
  try {
    orders.forEach(async ({ userId, orderState, products }) => {
      //Crea la orden
      const order = await Order.create({ orderState });
      //Busca el usuario por userId
      const user = await User.findByPk(userId);
      //Asocia user a la order
      user.addOrder(order);
      //Recorre los productos que vienen por body
      products?.forEach(async (product) => {
        //Busca el producto por productId
        const productData = await Product.findByPk(product.productId);
        //Asocia product a la order, con la cantidad y el precio (de la DB);
        order.addProduct(productData, {
          through: {
            quantity: product.quantity,
            price: productData.price,
          },
        });
      });
    });
    console.log("DB precargada con order seeds");
  } catch (err) {
    console.log(err);
    console.log("Error en create order seeds");
  }
}

module.exports = {
  createOrderSeeds,
};
