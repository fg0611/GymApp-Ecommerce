import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getProducts } from "../../../redux/actions/productsActions";

import { MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { deleteProduct } from "../../../redux/actions/adminActions";

import './AdmProducts.css'

export default function AdmProducts() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null)

    useEffect(() => {
        if (!products?.length) {
            dispatch(getProducts());
        }
    }, [dispatch, products?.length]);


    const handleClickOpen = (e) => {
        setId(e)
        setOpen(true);
    };

    const handleDelete = (e) => {
        dispatch(deleteProduct(id))
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="admProducts">
            <div className="titulos product-cards">
                <h3 className="name">NOMBRE</h3>
                <h3 className="stock">STOCK</h3>
                <h3 className="price">PRECIO</h3>
                <h3 className="edit">EDITAR</h3>
                <h3 className="delete">ELIMINAR</h3>
            </div>
            {
                products !== null &&
                products.map(p =>
                    <div className="product-cards">
                        <h4 className="name">{p.name.toUpperCase()}</h4>
                        <p className="stock">{p.stock}</p>
                        <p className="price">{`$${p.price}`}</p>
                        <div className="edit">
                            <Link to={`/admin/product/${p.id}`} className="edit-l">
                                <AiFillEdit/>
                            </Link>
                        </div>
                        <div className="delete">
                            <button
                                className="delete-button"
                                name={p.id}
                                onClick={() => handleClickOpen(p.id)}
                            >
                                <MdDelete />
                            </button>
                        </div>
                    </div>
                )
            }
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Estas seguro/a?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Este producto se eliminara de forma permanente.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className="buttons-c cancel-c">
                        Cancelar
                    </button>
                    <button onClick={handleDelete} className="buttons-c delete-c" autoFocus>
                        Confirmar
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    )
}



// import { useSelector, useDispatch } from "react-redux"
// import { useEffect, useState } from "react"
// import { Link } from 'react-router-dom'
// import { getProducts } from "../../../redux/actions/productsActions";

// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// import { makeStyles } from '@material-ui/core/styles';
// import { Grid } from "@material-ui/core";
// import { deleteProduct } from "../../../redux/actions/adminActions";
// import DeleteIcon from '@material-ui/icons/Delete';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: '10px 0 10px 0',
//         display: 'flex',
//         flexDirection: ' column',
//         alignItems: 'center',
//         marginTop: "10px",
//         width: '80%'
//     },
//     grid: {
//         backgroundColor: 'white',
//         padding: '10px',
//         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//         borderRadius: '10px'
//     },
//     description: {
//         backgroundColor: '#ededed',
//         padding: '10px',
//         color: 'black',
//         maxHeight: '50px'
//     },
//     info: {
//         marginTop: '10px',
//         display: 'flex',
//         alignItems: 'center',
//     },
//     infob: {
//         justifyContent: 'end',
//         marginTop: '10px',
//         display: 'flex',
//         alignItems: 'center',
//     },
//     button: {
//         margin: theme.spacing(1),
//     },
//     delete: {
//         margin: theme.spacing(1),
//         backgroundColor: 'red',
//         color: 'white',
//         '&:hover': {
//             background: "white",
//             color: 'red'
//          },
//     },
//     products: {
//         margin: '10px 0',
//         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//         maxHeight: '80px'
//     }
// }));


// export default function AdmProducts() {

//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.products.products);
//     const classes = useStyles();
//     const [open, setOpen] = useState(false);
//     const [id, setId] = useState(null)

//     useEffect(() => {
//         if (!products?.length) {
//             dispatch(getProducts());
//         }
//     }, [dispatch, products?.length]);


//     const handleClickOpen = (e) => {
//         setId(e)
//         setOpen(true);
//     };

//     const handleDelete = (e) => {
//         dispatch(deleteProduct(id))
//         setOpen(false);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div className={classes.root} >

//             <Grid container xs={11} xl={12} className={classes.grid}>
//                 <Grid container xs={12} className={classes.description}>
//                     <Grid xs={2} sm={2} md={3} lg={5} className={classes.info}>
//                         <h4>NOMBRE</h4>
//                     </Grid>
//                     <Grid xs={2} sm={2} md={2} lg={1} className={classes.info}>
//                         STOCK
//                     </Grid >
//                     <Grid xs={3} sm={1} md={2} lg={1} className={classes.info}>
//                         PRECIO
//                     </Grid >

//                     <Grid xs={2} sm={3} md={2} lg={2} className={classes.infob}>
//                         EDITAR
//                     </Grid>
//                     <Grid xs={2} sm={3} md={2} lg={2} className={classes.infob}>
//                         ELIMINAR
//                     </Grid>
//                 </Grid>
//                 {
//                     products !== null &&
//                     products.map(p =>
//                         <Grid container xs={12} key={p.id} className={classes.products}>
//                             <Grid xs={2} sm={2} md={3} lg={5} className={classes.info} style={{ "paddingLeft": "10px" }}>
//                                 <h4>{p.name}</h4>
//                             </Grid>
//                             <Grid xs={2} sm={2} md={2} lg={1} className={classes.info}>
//                                 {p.stock}
//                             </Grid >
//                             <Grid xs={1} sm={1} md={2} lg={1} className={classes.info}>
//                                 {`$${p.price}`}
//                             </Grid >

//                             <Grid xs={3} sm={3} md={2} lg={2} className={classes.infob}>
//                                 <Link to={`/admin/product/${p.id}`}>
//                                     <Button
//                                         variant="contained"
//                                         color="default"
//                                         className={classes.button}
//                                         startIcon={<CloudUploadIcon />}
//                                     >
//                                         EDITAR
//                                     </Button>
//                                 </Link>
//                             </Grid>
//                             <Grid xs={3} sm={3} md={2} lg={2} className={classes.infob}>
//                                 <Button
//                                     onClick={() => handleClickOpen(p.id)}
//                                     name={p.id}
//                                     variant="contained"
//                                     color="primary"
//                                     className={classes.delete}
//                                     startIcon={<DeleteIcon />}
//                                 >
//                                     ELIMINAR
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     )
//                 }
//             </Grid>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">{"Alerta!"}</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-description">
//                         Estas seguro/a que quieres eliminar este producto ?
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose} color="primary">
//                         Cancelar
//                     </Button>
//                     <Button onClick={handleDelete} color="primary" className={classes.delete} autoFocus>
//                         Confirmar
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     )
// }



