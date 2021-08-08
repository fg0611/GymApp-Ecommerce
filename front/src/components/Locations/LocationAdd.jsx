import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { addLocation } from "../../redux/actions/locationActions";
import { TextField, makeStyles, Button } from "@material-ui/core";
import LocationDraw from "./LocationDraw";
import FileLoader from "../FileLoader/FileLoader";
import "./locationux.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function LocationAdd() {
  //dispatch and history hooks assignations
  const dispatch = useDispatch();
  const classes = useStyles();

  //history set
  // const history = useHistory();

  //store data
  const store = useSelector((store) => store);
  const locations = store.locations;

  const initialState = {
    description: "",
    lat: 5.910430501036732,
    lng: -62.538044106211686,
    images: null,
  };

  const [location, setLocation] = useState(initialState);

  //this function modifies the React State using the rendered inputs
  const handleInputChange = (event) => {
    setLocation({
      ...location,
      [event.target.name]: event.target.value,
    });
  };

  //this function sends data to backEnd
  const sendData = (event) => {
    event.preventDefault();
    if (location.description.length < 6) {
      toast.warn("La Dirección debe contener mas de 5 caracteres", {
        type: "error",
      });
      return;
    }
    if (location.lat === "") {
      toast.warn("Latitud invalida");
      return;
    }
    if (location.lng === "") {
      toast.warn("Longitud Invalida");
      return;
    }
    let newLocation = {
      description: location.description,
      lat: parseFloat(location.lat),
      lng: parseFloat(location.lng),
      images: location.images,
    };
    dispatch(addLocation(newLocation));
    setLocation(initialState);
    if (locations?.message) {
      toast.info(locations.message);
    }
  };

  function submitImg(url) {
    const { images } = location;
    var newimgs = [];
    if (images) {
      newimgs = [...images, url];
    } else {
      newimgs.push(url);
    }
    setLocation({ ...location, images: newimgs });
  }

  return (
    <div className="container">
      <TextField
        id="1"
        name="description"
        label="Dirección"
        variant="outlined"
        onChange={handleInputChange}
      />
      <TextField
        id="2"
        name="lat"
        label="Lat"
        type="number"
        variant="outlined"
        onChange={handleInputChange}
      />
      <TextField
        id="3"
        name="lng"
        label="Lng"
        type="number"
        variant="outlined"
        onChange={handleInputChange}
      />

      <FileLoader submit={submitImg} />
      <Button variant="contained" color="primary" onClick={sendData}>
        Agregar
      </Button>

      <LocationDraw location={location} />
    </div>
  );
}
