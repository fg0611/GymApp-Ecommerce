import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOrderDetail } from "../../../redux/actions/adminActions"

import './OrderDetail.css'

export default function OrderDetail() {
    console.log("entro al componenteeee")
    const { orderid } = useParams()
    const dispatch = useDispatch()
    const order = useSelector(store => store.adm.orderDetail)


    useEffect(() => {
        dispatch(getOrderDetail(orderid))
    }, [dispatch])


    return (
        <div className="OrderDetail">
            <div className="od-info">
                <div className="od-info-c">
                    <h4>Datos de orden</h4>
                    <p>{order?.id}</p>
                    <p>{`Estado de orden: ${order?.orderState}`}</p>
                    <p>{`Estado de pago: ${order?.paymentState}`}</p>
                </div>
                <div className="od-info-c">
                    <h4>Datos de envio</h4>
                    <p>{`Estado de envio: ${order?.shippingState}`}</p>
                    <p>{`Direccion de envio: ${order?.shippingAddres}`}</p>
                    <p>{`Codigo postal: ${order?.shippingZip}`}</p>
                    <p>{`Ciudad: ${order?.shippingCity}`}</p>
                </div>
                <div className="od-info-c">
                    <h4>Datos del comprador</h4>
                    <p>{`ID: ${order?.user.id}`}</p>
                    <p>{`Nombre: ${order?.user.firstName}`}</p>
                    <p>{`Apellido: ${order?.user.lastName}`}</p>
                    <p>{`Email: ${order?.user.email}`}</p>
                </div>
            </div>
            <div className="od-products">
                <div className="od-p-d od-titles">
                    <h3 className="id">ID</h3>
                    <h3 className="product-name">PRODUCTO</h3>
                    <h3 className="unit">UNIDADES</h3>
                    <h3 className="total-p">TOTAL P/PRODUCTO</h3>
                </div>
                {
                    order?.products.map(o =>
                        <div className="od-p-d products">
                            <p className="id">{o.id}</p>
                            <h3 className="product-name">{o.name}</h3>
                            <h3 className="unit">{`${o.Order_Product.quantity}`}</h3>
                            <h3 className="total-p">{`$${o.Order_Product.quantity * o.Order_Product.price}`}</h3>
                        </div>
                    )
                }
                <div className="od-p-d od-titles">
                    <h3 className="od-p-d-totales">TOTALES:</h3>
                    <h3 className="unit">{order?.products.reduce( (s,e) => 
                        s + e.Order_Product.quantity,0)}
                    </h3>
                    <h3 className="total-p">{`$${order?.products.reduce( (s,e) => 
                        s + (e.Order_Product.quantity * e.Order_Product.price),0).toFixed(2)}`}</h3>
                </div>
            </div>
        </div>
    )
}