import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addToCart, loadCart } from "../../redux/actions/cartActions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import Popover from "@material-ui/core/Popover";
import "./productCard.css"
import Swal from "sweetalert2";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    margin: "2px 0",
  },
  noStock: {
    background: "#e0e0e0",
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: "gray",
  },
  popover: {
    pointerEvents: "none",
    // backgroundColor: "#25252542",
  },
  paper: {
    maxWidth: 300,
    display: "flex",
    alignContent: "center",
  },
  img: {
    width: "auto",
  },
  card: {
    width: "90%",
  },
  text: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
});

export default function ProductCard({
  name,
  id,
  images,
  price,
  categories,
  stock,
}) {

  const classes = useStyles();
  const cart = useSelector(store => store.cart.items)
  const dispatch = useDispatch();
  const history = useHistory()

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleAddToCart = async () => {

    let product = cart?.find( e => e.id === id)

    let user = JSON.parse(localStorage.getItem("storage"));
    
    if(cart && product?.quantity >= stock) {
      
      Swal.fire(
        {
          text: 'Ups! Alcanzo el maximo del stock',
          icon: 'warning', 
          width:'20rem', 
          timer: '3000', 
          showConfirmButton: false 
        }
        )
        history.push("/cart")
      }
      else {
      await dispatch(addToCart(id, product?.quantity ? product.quantity + 1 : 1, price));
      Swal.fire(
        {
          text:'Se agrego al carrito',
          icon: 'success', 
          width:'20rem', 
          timer: '3000', 
          showConfirmButton: false 
        }
      )
    }
    if(user?.uid) dispatch(loadCart())
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      {stock ? (
        <Card className={classes.root}>
          <CardActionArea className={classes.div}>
            <Link to={`/producto/${id}`} style={{ textDecoration: "none" }}>
              <CardMedia
                component="img"
                alt={name}
                height="230"
                image={images}
                title={name}
                className={classes.img}
              />
            </Link>
            <CardContent className={classes.card}>
              <Typography
                gutterBottom
                variant="h6"
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                className={classes.text}
              >
                {name}
              </Typography>
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography variant="h5" className={classes.pop} >{name}</Typography>
              </Popover>
              <Typography gutterBottom variant="h4">
                ${price}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {categories}
              </Typography>
              
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                agregar al carrito
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <Card className={classes.noStock}>
          <CardActionArea>
            <Link to={`/producto/${id}`} style={{ textDecoration: "none" }}>
              <CardMedia
                component="img"
                alt={name}
                height="230"
                width="230"
                image={images}
                title={name}
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography gutterBottom variant="h4" component="h2">
                ${price}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {categories}
              </Typography>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
              >
                NO DISPONIBLE <BlockIcon />
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}

















// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import { addToCart } from "../../redux/actions/cartActions";
// import { toast } from "react-toastify";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
// } from "@material-ui/core";
// import BlockIcon from "@material-ui/icons/Block";
// import Popover from "@material-ui/core/Popover";
// import "./productCard.css";
// import Swal from "sweetalert2";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     display: "flex",
//     justifyContent: "center",
//   },
//   button: {
//     width: "100%",
//     margin: "2px 0",
//   },
//   noStock: {
//     background: "#e0e0e0",
//     maxWidth: 345,
//   },
//   avatar: {
//     backgroundColor: "gray",
//   },
//   popover: {
//     pointerEvents: "none",
//     backgroundColor: "#25252542",
//   },
//   paper: {
//     maxWidth: 300,
//     display: "flex",
//     alignContent: "center",
//   },
//   img: {
//     width: "auto",
//   },
//   card: {
//     display: "flex",
//     flexDirection: "column",
//     width: "90%",
//   },
//   div: {
//     display: "flex",
//     flexDirection: "column",
//     flexWrap: "wrap",
//     // alignContent: 'center',
//     // justifyContent: 'space-around',
//   },
// });

// export default function ProductCard({
//   name,
//   id,
//   images,
//   price,
//   categories,
//   stock,
// }) {
//   // { name, price, image, categories } props
//   const classes = useStyles();

//   // const { user } = JSON.parse(window.localStorage.getItem("storage"))

//   const detail = useSelector((state) => state.products.productDetail);
//   const userId = useSelector(store => store.user.uid);
//   const cart = useSelector(store => store.cart.items)
//   const dispatch = useDispatch();
//   const history = useHistory()

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const handleAddToCart = () => {
//     // let cart = JSON.parse(window.localStorage.getItem("cart"))

//     let product = cart?.find( e => e.id === id)

//     if(cart && product?.quantity >= stock) {

//       Swal.fire(
//         {
//           text: 'Ups! Alcanzo el maximo del stock',
//           icon: 'warning', 
//           width:'20rem', 
//           timer: '3000', 
//           showConfirmButton: false 
//         }
//       )
//       history.push("/cart")
//     }
//     else {
//       dispatch(addToCart(id, "add", price, userId));
//       Swal.fire(
//         {
//           text:'Se agrego al carrito',
//           icon: 'success', 
//           width:'20rem', 
//           timer: '3000', 
//           showConfirmButton: false 
//         }
//       )
//     }
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <div>
//       {stock ? (
//         <Card className={classes.root}>
//           <CardActionArea className={classes.div}>
//             <Link to={`/producto/${id}`} style={{ textDecoration: "none" }}>
//               <CardMedia
//                 component="img"
//                 alt={name}
//                 height="230"
//                 image={images}
//                 title={name}
//                 className={classes.img}
//               />
//             </Link>
//             <CardContent className={classes.card}>
//               <Typography
//                 gutterBottom
//                 variant="h6"
//                 aria-owns={open ? "mouse-over-popover" : undefined}
//                 aria-haspopup="true"
//                 onMouseEnter={handlePopoverOpen}
//                 onMouseLeave={handlePopoverClose}
//               >
//                 <span className="text">{name}</span>
//               </Typography>
//               <Popover
//                 id="mouse-over-popover"
//                 className={classes.popover}
//                 classes={{
//                   paper: classes.paper,
//                 }}
//                 open={open}
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 onClose={handlePopoverClose}
//                 disableRestoreFocus
//               >
//                 <Typography variant="h5" className={classes.pop} >{name}</Typography>
//               </Popover>
//               <Typography gutterBottom variant="h4">
//                 ${price}
//               </Typography>

//               <Typography variant="body2" color="textSecondary" component="p">
//                 {categories}
//               </Typography>
//               <Button
//                 className={classes.button}
//                 variant="contained"
//                 color="primary"
//               >
//                 comprar ahora
//               </Button>
//               <Button
//                 className={classes.button}
//                 variant="contained"
//                 color="secondary"
//                 onClick={handleAddToCart}
//               >
//                 agregar al carrito
//               </Button>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       ) : (
//         <Card className={classes.noStock}>
//           <CardActionArea>
//             <Link to={`/producto/${id}`} style={{ textDecoration: "none" }}>
//               <CardMedia
//                 component="img"
//                 alt={name}
//                 height="230"
//                 width="230"
//                 image={images}
//                 title={name}
//               />
//             </Link>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {name}
//               </Typography>
//               <Typography gutterBottom variant="h4" component="h2">
//                 ${price}
//               </Typography>

//               <Typography variant="body2" color="textSecondary" component="p">
//                 {categories}
//               </Typography>
//               <Button
//                 className={classes.button}
//                 variant="outlined"
//                 color="primary"
//               >
//                 NO DISPONIBLE <BlockIcon />
//               </Button>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       )}
//     </div>
//   );
// }
