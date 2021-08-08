import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchProducts } from "../../redux/actions/productsActions";
import { fade, makeStyles, InputBase, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./search.css";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Search() {
  const [input, setinput] = useState("");

  /* Autocomplete States */
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);

  /* Hooks for autocomplete */
  const dispatch = useDispatch();
  const history = useHistory();
  const wrapperRef = useRef(null);

  /* Select Products State */
  const products = useSelector((state) => state.products.products);

  /* Styles */
  const classes = useStyles();

  /* Logic for ClickOutside */
  useEffect(() => {
    // console.log("USE EFFECT::::");
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  };

  /* Search Dispatcher */
  function handleSearch(e) {
    e.preventDefault();
    if (input.length > 1) {
      const inputLowerCase = input.toLocaleLowerCase();
      dispatch(searchProducts(inputLowerCase));
      history.push("/productos");
      setinput("");
    }
  }

  /* Input State Handler */
  // function handleState(e) {
  //   e.preventDefault();
  //   setinput(e.target.value);
  // }



  /* Display State Handler */
  const displayHandler = (e) => {
    setinput(e);
    setDisplay(false);
  };

  let displayOpts;
  if (display && products?.length && options?.length && input?.length) {
    displayOpts = options
      .filter(({ name }) => name.indexOf(input.toLowerCase()) > -1)
      .map((e, i) => {
        return (
          <div
            className="option"
            key={i}
            value={e.id}
            onClick={() => {
              displayHandler(e.name);
              setinput("");
              history.push(`/producto/${e.id}`);
            }}
          >
            <Typography variant="subtitle1">{e.name}</Typography>
          </div>
        );
      });
  }
  // console.log("Options: ", options);

  return (
    <form className={classes.search} ref={wrapperRef} onSubmit={handleSearch}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Busqueda…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onClick={() => setDisplay(!display)}
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
          dispatch(searchProducts(e.target.value));
          setOptions(products);
        }}
      />
      <div className="autoContainer">{displayOpts}</div>
    </form>
  );
}
