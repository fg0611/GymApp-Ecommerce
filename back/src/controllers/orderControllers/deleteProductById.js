const { User, Product, Order, Order_Product } = require("../../db");


/*
Ruta localhost:3001/orders/delete/product
Elimina un producto de una orden

body = {
  userId,
  productId
}
*/
async function deleteProductById(req, res, next) {
  try {
    //Debe es cambiar el estado
    const { userId, productId } = req.body;
    // console.log("----------------------------")
    // console.log(userId)
    // console.log(productId)
    // console.log("----------------------------")
    const order = await Order.findOne({
      where: {
        userId, 
        orderState: "CART"
      }
    });
    console.log('order.id',order);
    const orderProduct = await Order_Product.findOne({
      where: {
        orderId: order.id,
        productId
      }
    });
    console.log('orderProduct', orderProduct);
    if (orderProduct) {
      await orderProduct.destroy();
      return res.json({
        message: `Producto eliminado ID: ${productId}`
      });
    } else { 
      return res.json({
        message: "No existe el producto"
      });
    }    
  } catch (error) {
    next(error);
  }
}

module.exports = {
  deleteProductById
};
