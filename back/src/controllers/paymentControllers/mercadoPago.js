const { Order, Order_Product, Product } = require("../../db");
const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: 'TEST-6526025757594263-072114-48b8fe283514f9ea144ed66ecc48f689-794718240'

});
/*
RURTA CONSULTA
mercadoPago/:orderId
*/
async function mercadoPago(req, res, next) {
    // console.log('function mercadoPago')
    try {
        const { userId } = req.params;
        if (!userId) return res.status(400).json({
            success: false,
            message: "No se ha recibido el userId"
        });
        const order = await Order.findOne({
            where: {
                userId,
                orderState: 'CART'
            },
            include: [Product]
        });
        if (!order) res.sendStatus(404).json({ message: 'No existe orden en estado "CART"' })
        //Cambio estado de la orden
        // order.orderState = "PROCESSING"
        // order.save()
        //Todos los productos de la orden
        const items_ml = order.products.map(product => ({
            title: product.name,
            unit_price: product.price,
            quantity: product.Order_Product.quantity
        }))
        //creando un objeto de preferencia
        let preference = {
            items: items_ml,  //(todos los items)
            external_reference: `${order.id}`,// (nos identifica la orden)
            payment_methods: {
                excluded_payment_types: [
                    {
                        id: 'atm' //(excluye este metodo de pago),
                        //(excluye pagos en efectivo)
                    }
                ],
                installments: 3 //cantidad maxima de cuotas 
            },
            back_urls: {
                success: 'http://localhost:3001/mercadopago/pagos',
                failure: 'http://localhost:3000',
                pending: 'http://localhost:3001/mercadopago/pagos',
            },
        }
        // console.log('preference',preference) select id, "orderState", "paymentState", "payment_id", "userId" from orders;
        mercadopago.preferences.create(preference)
            .then(response => {
                // console.log('RESPUESTA RESPONSE', response)
                global.id = response.body.id
                console.log('response.body.init_point', response.body.init_point)
                console.log('globalid', global.id)
                res.json({
                    id: global.id,
                     //init_point: response.body.init_point
                 })
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    mercadoPago
}