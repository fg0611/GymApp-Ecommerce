import React, { useState, useEffect } from "react";
import useStyles from "./addressFormStyles";
 import Checkout from './Checkout'
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { Redirect } from "react-router-dom";
import { url } from '../../App'
import { useHistory } from "react-router";


export default function Address() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [address, setAddress] = useState('')
  const [codePost, setCodePost] = useState(0)
  const [city, setCity] = useState('')
  const [located, setLocated] = useState('')
  const [datos, setDatos] = useState('')
  const history = useHistory()
const orderId = JSON.parse(localStorage.getItem('cartid'))
console.log('orderid',orderId)

  const info = { 
    shippingAddress: address,
    shippingZip: codePost,
    shippingLocated:  city,
    shippingCity: located
  }
   

const handleSubmit = async(e) => {
  e.preventDefault()
  try {
    const {data} = axios.put(`${url}/orders/update/${orderId}`, info) ;
    history.push('/direccionDeEnvio')
    
    
  }catch (error){
    console.log(error)
  }
}
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalShippingIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Direccion De Envio
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              onChange={(e) => {setAddress(e.target.value)}}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="shippingAddress"
              type="text"
              label="Direccion De Envio"
              name="shippingAddress"
              autoComplete="shippingAddress"
              autoFocus
            />
            <TextField
              onChange={(e) => {setCodePost(e.target.value)}}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="shippingZip"
              label="Codigo Postal"
              type="text"
              id="shippingZip"
              autoComplete="shippingZip"
            />
            <TextField
              onChange={(e) => {setCity(e.target.value)}}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="shippingCity"
              label="Cuidad"
              type="text"
              id="shippingCity"
              autoComplete="shippingCity"
            />
            <TextField
            onChange={(e) => {setLocated(e.target.value)}}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="shippingLocated"
              label="Localidad"
              type="text"
              id="shippingLocated"
              autoComplete="shippingLocated"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              CONFIRMAR DIRECCION DE ENVIO
            </Button>
          </form>
        </div>
      </Container>{" "}
      
      
    </div>
  );

}