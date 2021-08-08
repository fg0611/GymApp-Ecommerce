import { Link, NavLink } from 'react-router-dom'
import './UserOrders.css'

export default function UserOrders({ order }) {

    return (
        <div className="UserOrders">
            <p className="orderID">{order?.id}</p>
            <h3>
                {`TOTAL: $${order?.products.reduce((a, s) =>
                    a + (s.Order_Product.quantity * s.Order_Product.price), 0)
                    }`}
            </h3>
            <p>{`Estado: ${order.orderState}`}</p>
            <p>{`Ultima actualizacion: ${order?.updatedAt}`}</p>
            <p>{`Cantidad de productos: ${order?.products.reduce((a, s) =>
                a + s.Order_Product.quantity, 0)}`}</p>
            <NavLink to={`/admin/orden/${order?.id}`}>
                <p className="navlink">
                    DETALLES
                </p>
            </NavLink>
        </div>
    )
}