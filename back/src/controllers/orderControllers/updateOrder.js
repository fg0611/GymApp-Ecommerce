const { User, Product, Order, Order_Product } = require("../../db");
//RUta update

/*Ruta PUT localhost:3001/orders/update/:id
-Retorna un id order actualizada
-Si no la encuentra devuelve, 'Order is not found ERROR 404'
-Recibo un body y params:
Todos los datos del body son opcionales
body = {
      orderState,      // type: DataTypes.ENUM("CART", "PENDING", "PROCESSING", "CANCELED", "COMPLETED")
      shippingState,   // type: DataTypes.ENUM("not initialized","initial","created","processing","canceled","completed", paymentState: type: DataTypes.ENUM("not initialized", "initial", "processing", "cancelled", "completed",ppingAddress: type: DataTypes.STRING,
      paymentState,    // type: DataTypes.ENUM("not initialized","initial","processing","cancelled","completed
      shippingAddress, // type: DataTypes.STRING,
      shippingZip,     // type: DataTypes.INTEGER,
      shippingLocated, // type: DataTypes.STRING,
      shippingCity,    // type: DataTypes.STRING,
      products,
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

async function updateOrder(req, res, _next) {
  try {
    const { id } = req.params;
    const {
      orderState,
      shippingState,
      shippingLocation,
      paymentState,
      shippingAddress,
      shippingZip,
      shippingLocated,
      shippingCity,
      products,
    } = req.body;
    //Se busca la orden por primary key'
    const order = await Order.findByPk(id)
    // console.log('order',order)
    //Si la order no existe, se crea y se retorna el orderId
    if (!order) {
      return res.status(404).send({
        message: 'Order is not found ERROR 404'
      });
    }
    //Si existe y es de tipo CART y trae productos se fusionan
    if (order.orderState === "CART") {
      // if (products) {
      //Array de productos actuales de la orden
      const order_Products = await Order_Product.findAll({ where: { orderId: id } });
      //Por cada product que llega
      products?.forEach(async product => {
        //Buscamos el producto en la DB
        const productData = await Product.findByPk(product.productId);
        // console.log('productData', productData);
        const productExists = order_Products.find(op => op.productId === product.productId);
        //Si no lo encuentra lo agrega a la orden
        if (!productExists) {
          order.addProduct(productData, {
            through: {
              quantity: product.quantity,
              price: productData.price
            }
          });
          //Si lo encuentra lo actualiza 
        } else {
          // console.log('product.quantity',productData.price)
          await productExists.update({
            quantity: product.quantity,
            price: productData.price
          });
        }
      });
      // } else {
      //Si no es de tipo CART y trae prodcuctos, devuelve error
      // return res.status(400).send({
      // message: 'CART order can not have products'
      // });
      // }
    }
    order.update({
      orderState,
      shippingState,
      shippingLocation,
      paymentState,
      shippingAddress,
      shippingZip,
      shippingLocated,
      shippingCity
    });
    return res.json(`Orden actualizada ID:${order.id}`);
  } catch (err) {
    console.log(err);
    return res.send('Order is not created ERROR');
  }
}

module.exports = {
  updateOrder,
};