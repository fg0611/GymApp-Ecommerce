import React, { useEffect } from "react";
import SortBar from "./Sortbar";
import ProductCard from "../ProductCard/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import { loadCart } from "../../redux/actions/cartActions";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    paddingTop: "20px",
    display: "flex",
    backgroundColor: "#ededed",
    justifyContent: "space-around",
  },
  sortBar: {
    width: "20%",
    minWidth: "200px",
    display: "flex",
    justifyContent: "center",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    margin: "20px",
    minWidth: "250px",
  },
}));

export default function Catalogo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadCart())
    if (!state.products.products?.length) {
      dispatch(getProducts());
    }
  }, [dispatch, state.products.products?.length]);

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={2} className={classes.sortBar}>
          <SortBar />
        </Grid>
        <Grid item sm={7} md={9} lg={9} className={classes.cards}>
          {Array.isArray(state.products.products) &&
          state.products.products.length !== 0 ? (
            state.products.products.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.card}
                key={product.id}
              >
                <ProductCard
                  name={product.name}
                  id={product.id}
                  images={product.images[0]}
                  price={product.price}
                  stock={product.stock}
                  categories={product.categories.name}
                />
              </Grid>
            ))
          ) : (
            //esta parte podriamos cambiarla por un componente 404, agregue este ProductCard provisorio por si no llegan los productos
            <Grid item xs={3} className={classes.card}>
              <ProductCard
                name="Product NOT FOUND"
                images="https://previews.123rf.com/images/mike301/mike3011604/mike301160400026/56872882-inusual-error-404-gr%C3%A1fico-de-p%C3%A1gina-no-encontrada.jpg"
                price="-"
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
