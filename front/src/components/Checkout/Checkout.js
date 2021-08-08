import { useEffect } from "react";
import AddressForm from "./AddressForm";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
//import axios from 'axios'
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({

div: {
  display: 'flex',
  width: '200px',
  marginLeft: '30%',
  marginTop: '10px',
  
},
form:{
  marginLeft: '100px'
},
name: {
  fontSize: '30px'
}
}))


export default function Checkout({ data, product , pro}) {
  const classes = useStyles()
  console.log('componente comprar', data)
  useEffect(() => {
    if(data){
      const script = document.createElement("script");
      const attr_data_preference = document.createAttribute("data-preference-id");
      //const attr_nonce = document.createAttribute('nonce')
  
      attr_data_preference.value = data.id;
      //attr_nonce.value = 'abcdefg'
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttributeNode(attr_data_preference);
      // script.setAttributeNode(attr_nonce)
      
      document.getElementById("form1").appendChild(script)
      
      return () => {
        //document.getElementById("form1")?.removeChild(script);
      };
    }
  }, [data]);

  return (
    <div className={classes.div}>
    <div className={classes.buy}>
      
      <img src='https://seogenial.com/wp-content/uploads/2020/08/mercado-pago-peru.jpg'></img>
     <div className={classes.form}>
     <h1>COMPRA</h1> 
    {pro.map(e => 
      <ul>
        <li className={classes.name}>{e.name} <br/> <div style={{color: 'blue'}}>${e.price}</div></li>
      </ul>
      )}
      <h1 style={{color: 'purple', boxShadow: '0 0 5px' , width: '200px'}}>TOTAL: ${product}</h1>
    <div style={{marginLeft: '15%'}}>
      <form id="form1"></form>
    </div> 
    </div> 
    </div>
    </div>
    // <div>
    //   <form id="form1"></form>
    // </div>
    
  );
}
