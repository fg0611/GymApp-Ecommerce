const { Order, Order_Product, Product } = require("../../db");

const { TOKEN } = process.env;
const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: 'TEST-6526025757594263-072114-48b8fe283514f9ea144ed66ecc48f689-794718240'

});
//mercadopago/:orderId

async function mercadoPago(req, res, next) {
    console.log('FUNCTION DE MERCADO PAGOO!!!')
    const orderId = req.params.orderId
    const order = await Order.findOne({
        where: { id: orderId, orderState: 'CART' },
        include: [Product]
    })
    //Cambio estado de la orden
    order.orderState = "PROCESSING"
    order.save()
    //Todos los productos de la orden
    const items_ml = order.products.map(product => ({
        title: product.name,
        unit_price: product.price,
        quantity: product.Order_Product.quantity
    }))
    //creando un objeto de preferencia
    let preference = {
        items: items_ml,  //(todos los items)
        external_reference: `${orderId}`,// (nos identifica la orden)
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
    
    mercadopago.preferences.create(preference)
        .then(response => {
            // console.log('RESPUESTA RESPONSE', response)
            global.id = response.body.id
            console.log('GGG global.id', global.id)
            res.json({ id: global.id, init_point: response.body.init_point })
        })
        .catch(error => {
            console.log(error)
        })
}
//mercadopago/pagos
async function payment(req, res, next) {
    console.log('FUNCION PAYMEEEENT')
    console.log('req.params', req.params)
    const payment_id = req.params;
    const payment_status = req.query.status;
    const external_reference = req.query.external_reference
    const merchant_order_id = req.query.merchant_order_id


    //aca editamos el status de mi orden 
    Order.findByPk(external_reference)
        .then(order => {
            console.log(order)
            // order.payment_id = payment_id NO VA A FUNCIONAR
            // order.paymentState: = payment_status
            // order.merchant_order_id = merchant_order_id NO VA A FUNCIONAR
            order.orderState = 'COMPLETED'
            console.log('ORDEN COMPLETADA')
            console.info('ORDEN COMPLETADA')
            order.save()
                .then(() => {
                    console.info('redict sucess')
                    return res.redirect('http://localhost:3000')
                })
                .catch(erro => {
                    return res.redirect(`http://localhost:3000/?error=${error}&where=al+salvar`)
                })
        })
        .catch(error => {
            return res.redirect(`http://localhost:3000/error=${error}&where=al+buscar`)
        })

}
//mercadopago/pagos
async function pagosId(req, res) {
    console.log('pagosId access_token,', PROD_ACCESS_TOKEN)
    // const mp = new mercadopago(access_token)
    const mp = new mercadopago(PROD_ACCESS_TOKEN)
    const id = req.params.id
    console.info("Buscando el id", id)
    mp.get(`/v1/payments/search`, { 'status': 'pending' })//{"external_reference":id})
        .then(resultado => {
            console.info('resultado', resultado)
            res.json({ "resultado": resultado })
        })
        .catch(err => {
            console.error('No se consulto:', err)
            res.json({
                error: err
            })
        })

}
/*
4509 9535 6623 3704
11/25
123

American de prueba
371180303257522
11/25
1234

Secuencia despues ingresar direccion
PUT /orders/update/faac272e-a92d-4a15-a472-c9363559aa00 200 13.956 ms - 59
GET /orders/user/zn7dwHGLgSebMjYiHoBhndpvaHU2 200 17.058 ms - 756
GET /orders/user/zn7dwHGLgSebMjYiHoBhndpvaHU2 304 13.256 ms - -
FUNCTION DE MERCADO PAGOO!!!
GGG global.id 794718240-50994c28-15ac-4b34-aabc-20279f64fa78
GET /mercadopago/faac272e-a92d-4a15-a472-c9363559aa00 200 640.308 ms - 177

Ruta de pagado:
/mercadopago/pagos?collection_id=1239156144&collection_status=approved&payment_id=1239156144&status=approved&external_reference=0c1cc39e-34b7-4989-bcbe-bc8b55796bfb&payment_type=credit_card&merchant_order_id=3010520422&preference_id=794718240-f39710af-4b2d-40ff-818e-4e265edc0ffb&site_id=MLA&processing_mode=aggregator&merchant_account_id=null
*/


module.exports = {
    mercadoPago,
    payment,
    pagosId
}