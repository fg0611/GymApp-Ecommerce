import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getUserDetail, getUserOrders } from "../../../redux/actions/adminActions"

import "./UserDetail.css"
import UserOrders from "./UserOrders"

let orders = [
  {
    "id": "9d6a7b31-5e2d-4164-981c-fb75887c1d22",
    "orderState": "PENDING",
    "shippingState": "not initialized",
    "paymentState": "not initialized",
    "shippingAddress": null,
    "shippingZip": null,
    "shippingLocated": null,
    "shippingCity": null,
    "payment_id": 0,
    "payment_status": "",
    "merchant_order_id": "0",
    "createdAt": "2021-07-23T17:53:07.739Z",
    "updatedAt": "2021-07-23T17:53:07.748Z",
    "userId": "R0dPZi0IfccnLaspdoXwfmkh7PI2",
    "products": [
      {
        "id": 1,
        "name": "True Made Whey Protein",
        "description": "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
        "images": [
          [
            "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp"
          ]
        ],
        "price": 2250.21,
        "stock": 103,
        "Order_Product": {
          "price": 2250.21,
          "quantity": 3,
          "orderId": "9d6a7b31-5e2d-4164-981c-fb75887c1d22",
          "productId": 1
        }
      }
    ],
    "user": {
      "id": "R0dPZi0IfccnLaspdoXwfmkh7PI2",
      "email": "a@gmail.com",
      "password": null,
      "userType": "B",
      "firstName": "a",
      "lastName": "a"
    }
  },
  {
    "id": "5b370769-b775-4918-930e-da91810dfba2",
    "orderState": "COMPLETED",
    "shippingState": "completed",
    "paymentState": "completed",
    "shippingAddress": null,
    "shippingZip": null,
    "shippingLocated": null,
    "shippingCity": null,
    "payment_id": 0,
    "payment_status": "completed",
    "merchant_order_id": "0",
    "createdAt": "2021-07-24T21:42:47.834Z",
    "updatedAt": "2021-07-24T21:42:47.839Z",
    "userId": null,
    "products": [
      {
        "id": 1,
        "name": "True Made Whey Protein",
        "description": "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
        "images": [
          [
            "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp"
          ]
        ],
        "price": 2250.21,
        "stock": 103,
        "Order_Product": {
          "price": 2250.21,
          "quantity": 3,
          "orderId": "9d6a7b31-5e2d-4164-981c-fb75887c1d22",
          "productId": 1
        }
      }],
    "user": null
  }
]
export default function UserDetail() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const userDetail = useSelector(store => store.adm.userDetail)

  useEffect( () => {
    dispatch(getUserDetail(id))
    dispatch(getUserOrders(id))

    // return () => {}
  }, [dispatch, id])

  return (
    <div className="admUserDetail">
        {
          userDetail === null
            ? <h1> Cargando </h1>
            : <div className="aud-info">
              <h3>{userDetail.email?.toUpperCase()}</h3>
              <h1 >{userDetail.userType}</h1>
              <p>{`NOMBRE: ${userDetail.firstName || "-"}`}</p>
              <p>{`ID: ${userDetail.id || "-"}`}</p>
              <p>{`APELLIDO: ${userDetail.lastName || "-"}`}</p>
              <p>{`NUMERO DE ORDENES: ${userDetail.userOrders?.length}`}</p>
            </div>
        }
        <div className="aud-orders">
        {
          userDetail?.userOrders === null
          ? <h1> Cargando </h1>
          : userDetail?.userOrders?.map( order => 
              <UserOrders order={order}/>
          )
        }
        </div>
    </div>
  )
}