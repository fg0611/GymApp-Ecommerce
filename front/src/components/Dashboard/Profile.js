import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { BsInfoCircleFill } from "react-icons/bs";
import { getOrdersByUserId } from "../../redux/actions/userActions";

//import { getUserOrders } from "../../redux/actions/adminActions";


const Profile=(props)=>{
    const orders = useSelector((state) => state.user.orders);
    const user = useSelector((store) => store.user.uid);

  const dispatch = useDispatch();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
      if(user !== undefined){
          console.log("USER EN USEEFFECT", user)
    dispatch(getOrdersByUserId(user));}
  }, [dispatch, user]);

  /*   const mock = [
    {
      id: 1,
      username: "Fran",
      userId: "x15xsxc-15615ssds",
      state: "CART",
    },
  ]; */
  // console.log("USER",user)
  // console.log("ORDERS",orders)
  return (
    <div className="orders">
      <div className="titulos cards">
        <h3 className="id">Codigo de pedido</h3>
        <h3 className="userId">Productos</h3>
        <h3 className="orderState">Estado de Compra</h3>
        <h3 className="createdAt">Estado de Envio</h3>
        
        
       
      </div>
      {orders?.map((order) => (
        <div className="cards">
          <h5 className="id">{order.id}</h5>
          <h3 className="userId">{order.products.map(e => <span>{e.name} </span>)}</h3>
          <h5 className="orderState">{order.orderState.toUpperCase()}</h5>
          <h5 className="createdAt">{order.shippingState}</h5>
          
          
        </div>
      ))}
    </div>
  );
}

export default Profile;