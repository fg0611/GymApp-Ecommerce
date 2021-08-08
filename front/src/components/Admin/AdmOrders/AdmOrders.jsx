import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { url } from '../../../App'
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { BsInfoCircleFill } from "react-icons/bs";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { getOrders } from "../../../redux/actions/adminActions";

import "./AdmOrders.css";

export default function AdmOrders() {
  const orders = useSelector((state) => state.adm.orders);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState("id");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null)
  const [accion, setAccion] = useState(null)


  console.log(orders)
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);


  const handlePopoverOpen = (event) => {
    setAnchorEl("openId");
  };

  const handlePopoverClose = () => {
    setAnchorEl("id");
  };

  const handleShipping = (e) => {
    console.log('hola')
    const dis = e.target.name
    const orderId = e.target.value
    console.log('e.target', e.target)
    const shipping = {
      shippingState: dis
    }
    try {
      const { data } = axios.put(`${url}/orders/update/${orderId}`, shipping);
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickOpen = (e) => {
    setId(e.target.value)
    if(e.target.label === "Cancelar") {
        setAccion({orderState:"CANCELED"})
    }
    if(e.target.label === "Eliminar") {
        setAccion("eliminar")
    }
    if(e.target.label === "Despachado") {
        setAccion({shippingState:"despachado"})
    }
    if(e.target.label === "Entregado") {
        setAccion({shippingState:"entregado"})
    }
    setOpen(true);
};

const handleAction = async () => {
    if (accion === "eliminar") {
        await axios.delete(url + "/orders/delete/" + id);
    }
    else {
        console.log(id)
        await axios.put(url + "/orders/update/" + id, accion);
    }
    handleClose();
  };
  
  const handleClose = () => {
    dispatch(getOrders());
    setOpen(false);
    setId(null)
    setAccion(null)
};


  return (
    <div className="orders">
      <div className="titulos cards">
        <h3 className="id">ID</h3>
        <h3 className="total">TOTAL</h3>
        <h3 className="orderState">PAGO</h3>
        <h3 className="createdAt">ULTIMA ACTUALIZACION</h3>
        <h3 className="info">Info</h3>
        <h3 className="select">Acciones</h3>
        {/* <h3 className="select">Entrega</h3> */}
        <h3 className="state">Estado de Envio</h3>

      </div>
      {orders?.map((order) => (
        <div className="cards">
          <h5 className={`${anchorEl}`}

            // style={{width:`${}`}}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >{order.id}</h5>
          <h3 className="total">{`$${order.products.reduce((s, i) =>
            s + (i.Order_Product.quantity * i.Order_Product.price), 0).toFixed(2)}`}</h3>
          <h5 className="orderState">{order.orderState.toUpperCase()}</h5>
          <h5 className="createdAt">{order.updatedAt}</h5>
          <div className="info">
            <Link to={`/admin/orden/${order.id}`} className="Link">
              <BsInfoCircleFill />
            </Link>
          </div>
          <div className="select">
            <FormControl variant="outlined" className="formControl">
              <InputLabel htmlFor="outlined-age-native-simple">
                Opciones
              </InputLabel>
              <Select
                native
                value=''
                // onChange={handleChange}
                inputProps={{
                  name: "Opciones",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={order.id} onClick={handleClickOpen}>Cancelar</option>
                <option value={order.id} onClick={handleClickOpen}>Eliminar</option>
                {
                  (order.shippingState !== "entregado" && order.shippingState !== "despachado")
                  && <option value={order.id} onClick={handleClickOpen}>Despachado</option>
                }
                {
                  (order.shippingState !== "entregado")
                  && <option value={order.id} onClick={handleClickOpen}>Entregado</option>
                }

              </Select>
            </FormControl>
          </div>

          {/* <button value={order.id} name='despachado' onClick={handleShipping}>Despachado</button>
          <button value={order.id} name='entregado' onClick={handleShipping}>Entregado</button> */}
          <h5 className="state">{order.shippingState.toUpperCase()}</h5>



        </div>
      ))}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Estas seguro/a?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Por favor, confirme su accion.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="buttons-c cancel-c">
            Cancelar
          </button>
          <button onClick={handleAction} className="buttons-c delete-c" autoFocus>
            Confirmar
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
