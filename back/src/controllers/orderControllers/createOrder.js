const { User, Product, Order, Order_Product } = require("../../db");

/*Ruta POST localhost:3001/orders/create
-Retorna un orderId
-Si no la encuentra devuelve, 'Order is not create ERROR' 404
-Recibo un body:

body = {
  userId,
//array de uno o varios productos, con id y cantidad
  products:[
      {
          productId,
          quantity
      },
      {
          productId,
          quantity
      },
  ]
}
*/
async function createOrder(req, res, next) {
  try {
    const {
      products,
      userId
    } = req.body;
    //Si no hay productos cargados, devuelve error
    // if (products.length == 0) {
    //   return res.status(400).json({
    //     message: "ERROR debe cargar al menos un producto"
    //   });
    // }
    //Se busca la orden por userId y que sea orderState 'CART'
    const order = await Order.findOne({
      where: {
        userId,
        orderState: 'CART',
      }
    });
    //Si la order no existe, se crea y se retorna el orderId
    if (!order) {
      //Crea la orden
      const order = await Order.create({ userId });
      //Busca el usuario por userId
      const user = await User.findByPk(userId);
      //Asocia user a la order
      user.addOrder(order);
      //Recorre los productos que vienen por body

      products?.forEach(async product => {
        //Busca el producto por productId
        const productData = await Product.findByPk(product.productId);
        //Asocia product a la order, con la cantidad y el precio (de la DB);
        order.addProduct(productData, {
          through: {
            quantity: product.quantity,
            price: productData.price
          }
        });
      });
      return res.json({
        status: `${order.orderState}`,
        message: true,
        cartId: `${order.id}`
      });
      //Si la orden existe se fusiona
    } else res.json({
      status: `${order.orderState}`,
      message: false,
      cartId: `${order.id}`
    })
  } catch (err) {
    console.log(err);
    next(err);
  }
}


module.exports = {
  createOrder,
};
