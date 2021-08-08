import { useEffect, useState } from 'react'
import Checkout from './Checkout'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {getOrderByUserId} from '../../redux/actions/userActions'
import { BsInfo } from 'react-icons/bs';
import { url } from '../../App';

function Application() {
  const [datos, setDatos] = useState("")
  // const [orderId, setOrderId] = useState("")
  const orderId = JSON.parse(window.localStorage.getItem("cartid"))
  const userId = useSelector(store => store.user.uid)
  const products = useSelector(store => store.cart.total)
  const productos = useSelector(store => store.cart.items)
  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      if (userId ) {
        const data = await axios.get(`${url}/mercadopago/${userId}`)
         setDatos(data.data)
        console.log("NUMERO DE ORDEN", data)
      }
    } catch (error) {
      console.log(error)
    }
  }, [userId]);
  console.log('datos ID', datos)
  console.log('ORDER ID', orderId)
  console.log('userID', userId)

  return (
    <div className="App">

      <Checkout pro={productos} product={products} data={datos}/>
    </div>
  );
}

export default Application;