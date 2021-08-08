import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  Button,
} from "@material-ui/core";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import { editProduct, postProduct } from "../../../redux/actions/adminActions";
import { getCategories, getProducts } from "../../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  div:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor:"#fff",
    width:"75%",
    marginRight:"2%",
    marginTop:"15px",
    borderRadius:"15px"
  },
}));

export default function CreateProduct({ edit }) {

  let history = useHistory()

  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.products.categories);

  const [product, setProduct] = useState({
    name: "",
    description: "",

    images: [],

    price: "",
    stock: "",
    categories: null,
  });

  useEffect(() => {
    
    dispatch(getCategories())

    if (edit) {
      setProduct({
        ...edit
      })
    }
  }, [dispatch, edit]);

  const handleChangeCategory = (e) => {

    if (product.categories === null) {
      setProduct({
        ...product,
        categories: [{ name: e.target.name, image: "" }],
      });
    }

    else if (product.categories.find(c => c.name === e.target.name)) {
      setProduct({
        ...product,
        categories: product.categories.filter(
          (element) => element.name !== e.target.name
        ),
      });
    } else {
      setProduct({
        ...product,
        categories: [
          ...product.categories,
          {
            name: e.target.name,
            image: "",
          },
        ],
      });
    }

  };

  function handleChangeProduct(e) {
    setProduct({
      ...product,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = [
      {
        name: product.name,
        description: product.description,
        images: [product.images],
        price: parseFloat(product.price),
        stock: parseInt(product.stock),
        categories: product.categories,
      },
    ];

    if (edit) {
      let newinfo = info[0]

      dispatch(editProduct(newinfo, edit.id));

      await Swal.fire({
        text: "Producto editado exitosamente",
        icon: "success",
        width: "20rem",
        timer: "2000",
        showConfirmButton: false,
      });

      history.push("/admin");

    } else {
      dispatch(postProduct(info));

      setProduct({
        ...product,
        name: "",
        description: "",
        images: "",
        price: "",
        stock: "",
        categories: [],
      });
      await Swal.fire({
        text: "Producto creado exitosamente",
        icon: "success",
        width: "20rem",
        timer: "3000",
        showConfirmButton: false,
      });

    }

    dispatch(getProducts())
  };

  return (
    <div className={classes.div}>
      { edit && <h2> Actualizacion de producto</h2> }
      { !edit && <h1> Crear Producto</h1> }
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <TextField
            required
            id="name"
            label="Nombre"
            defaultValue=""
            variant="outlined"
            onChange={(e) => handleChangeProduct(e)}
            value={product.name}
          />
          <TextField
            required
            id="description"
            label="Descripcion"
            defaultValue=""
            variant="outlined"
            onChange={(e) => handleChangeProduct(e)}
            value={product.description}

          />
          <TextField
            required
            id="images"
            label="Imagenes"
            type="url"
            defaultValue=""
            variant="outlined"
            onChange={(e) => handleChangeProduct(e)}
            value={product.images}

          />

          <TextField
            id="price"
            label="Precio"
            type="number"
            // InputLabelProps={{
            //   shrink: true,
            // }}
            variant="outlined"
            onChange={(e) => handleChangeProduct(e)}
            value={product.price}

          />
          <TextField
            id="stock"
            label="Stock"
            type="number"
            onChange={(e) => handleChangeProduct(e)}
            value={product.stock}

          />
        </div>
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <p>
              <FormLabel component="legend">Categorias</FormLabel>
            </p>

            <FormGroup>
              {
                edit
                  ? categories !== null && product.categories !== null
                    ? categories.map(e =>
                      <FormControlLabel
                        key={e.id}
                        control={
                          product.categories.find(c => c.name === e.name)
                            ? <Checkbox
                              defaultChecked
                              onChange={(e) => handleChangeCategory(e)}
                              name={e.name}
                            />
                            : <Checkbox
                              onChange={(e) => handleChangeCategory(e)}
                              name={e.name}
                            />
                        }
                        label={e.name}
                      />)
                    : <p> Sin categorias cargadas </p>
                  : categories !== null
                    ? categories.map(e =>
                      <FormControlLabel
                        key={e.id}
                        control={
                          <Checkbox
                            onChange={(e) => handleChangeCategory(e)}
                            name={e.name}
                          />
                        }
                        label={e.name}
                      />)
                    : <p> Sin categorias cargadas </p>
              }
            </FormGroup>
          </FormControl>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {edit ? "Actualizar Producto" : "Agregar Producto"}
        </Button>
      </form>
    </div>
  );
}