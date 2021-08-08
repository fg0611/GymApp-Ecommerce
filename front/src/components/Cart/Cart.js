import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import {
  cartReset, loadCart,
} from "../../redux/actions/cartActions";
import { Button } from "@material-ui/core";
import { Link, NavLink } from 'react-router-dom';
import { AiFillShopping } from 'react-icons/ai';
import { FcShipped } from 'react-icons/fc';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Cart() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("storage"));
  const total = useSelector((state) => state.cart.total);
  const products = useSelector((store) => store.cart.items);


  useEffect(() => {
    if (!user) {
      dispatch(loadCart())
    }

  }, [dispatch, user]);

  const handleClickOpen = (e) => {
    if (products?.length) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    dispatch(cartReset())
    setOpen(false)
  }


  return (
    <div className="cart">
      <div className="items">
        <h3 className="titles" > PRODUCTOS</h3>
        {
          products?.length
            ? products.map((product) => (
              <CartItem
                key={product.id}
                id={product.id}
                Qty={product.quantity}
              />
            ))
            :
            <Link to="/productos" className="carrito-v">
              <img className="carrito-vacio" src="https://www.elpatrondelmate.com.ar/images/carritovacio.png" alt="carrito vacio" />
            </Link>
        }
      </div>
      <div className="totales">
        <h3 className="titles titles-total" > TOTALES </h3>
        <div className="subtotales">
          <AiFillShopping className="subtotales-icons" />
          <h4> SUBTOTAL: </h4>
          <h4>{`$${total}`}</h4>
        </div>
        <div className="subtotales">
          <FcShipped className="subtotales-icons" />
          <h5> Envio: </h5>
          <h5> Sin envio </h5>
        </div>
        <div className="subtotales subtotales-total">
          <h3> TOTAL:</h3>
          <h3>{`$${total}`}</h3>
        </div>
        <div className="buttons">
          <NavLink to='/direccion'>
            <p className="comprar">COMPRAR</p>
          </NavLink>
          <Button
            onClick={handleClickOpen}
          >
            Vaciar
          </Button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Estas seguro/a?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Se eliminaran todos los productos del carrito
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="buttons-c cancel-c">
            Cancelar
          </button>
          <button onClick={handleReset} className="buttons-c delete-c" autoFocus>
            Confirmar
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}






// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CartItem from "./CartItem";
// import Swal from "sweetalert2";
// import {
//   loadCart,
//   cartReset,
//   updateTotal,
// } from "../../redux/actions/cartActions";
// import { Container, makeStyles, Typography, Button } from "@material-ui/core";
// import { Link, useHistory } from 'react-router-dom';

// import { AiFillShopping } from 'react-icons/ai';
// import { FcShipped } from 'react-icons/fc';

// const useStyle = makeStyles({
//   cart: {
//     marginLeft: "0px",
//   },
//   title: {
//     color: "gray",
//   },
// });

// export default function Cart() {
//   const classes = useStyle();
//   const dispatch = useDispatch();
//   const history = useHistory()
//   let cartItems = JSON.parse(localStorage.getItem("cart"));
//   const total = useSelector((state) => state.cart.total);

//   const [state, setstate] = useState("");

//   // if (!total) {
//   //   history.push('/productos')
//   //   Swal.fire(
//   //     {
//   //       text: 'carrito vacio',
//   //       icon: 'warning',
//   //       width: '20rem',
//   //       timer: '3000',
//   //       showConfirmButton: false
//   //     }
//   //   )
//   // }
//   useEffect(() => {
//     console.log("useEffect de cart");
//     dispatch(loadCart());
//     dispatch(updateTotal());
//     cartItems = JSON.parse(localStorage.getItem("cart"));
//     setstate(cartItems);
//   }, [dispatch]);


//   console.log(cartItems);

//   return (
//     <div className="cart">
//       <div className="items">
//         <h3 className="titles" > PRODUCTOS</h3>
//         {
//           cartItems?.length
//             ? cartItems.map((product) => (
//               <CartItem
//                 key={product.id}
//                 id={product.id}
//                 Qty={product.quantity}
//               />
//             ))
//             : 
//               <Link to="/productos" className="carrito-v">
//               <img className="carrito-vacio" src="https://www.elpatrondelmate.com.ar/images/carritovacio.png" alt="carrito vacio"/>
//               </Link>
//         }
//       </div>
//       <div className="totales">
//         <h3 className="titles titles-total" > TOTALES </h3>
//         <div className="subtotales">
//           <AiFillShopping className="subtotales-icons" />
//           <h4> SUBTOTAL: </h4>
//           <h4>{`$${total}`}</h4>
//         </div>
//         <div className="subtotales">
//           <FcShipped className="subtotales-icons" />
//           <h5> Envio: </h5>
//           <h5> Sin envio </h5>
//         </div>
//         <div className="subtotales subtotales-total">
//           <h3> TOTAL:</h3>
//           <h3>{`$${total}`}</h3>
//         </div>
//         <div className="buttons">
//           <button className="comprar">COMPRAR</button>
//           <Button
//             onClick={(() => dispatch(cartReset()), dispatch(updateTotal()))}
//           >
//             Vaciar 
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
