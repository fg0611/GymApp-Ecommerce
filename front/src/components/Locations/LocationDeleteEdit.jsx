import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteLocation,
  updateLocation,
} from "../../redux/actions/locationActions";
import { toast } from "react-toastify";
import {
  Button,
  Typography,
  makeStyles,
  Card,
  CardContent,
  TextField,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function LocationDeleteEdit({ location }) {
  const classes = useStyles();
  console.log("location", location);

  const { id } = location;
  // const store = useSelector((store) => store);
  // const locations = store.locations;
  const dispatch = useDispatch();

  const initialState = {
    description: "",
    lat: "",
    lng: "",
  };

  const [data, setData] = useState(initialState);

  //this function modifies the React State using the rendered inputs
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  //UPDATE
  const handleUpdate = (event) => {
    event.preventDefault();
    if (data.description.length < 6) {
      toast.warn("La Dirección debe contener mas de 5 caracteres");
      return;
    }
    if (data.lat === "") {
      toast.warn("Latitud invalida");
      return;
    }
    if (data.lng === "") {
      toast.warn("Longitud Invalida");
      return;
    }
    let newLocation = {
      id: id,
      description: data.description,
      lat: parseFloat(data.lat),
      lng: parseFloat(data.lng),
    };
    dispatch(updateLocation(newLocation));
    setData(initialState);
  };

  //DELETE
  function handleDelete() {
    dispatch(deleteLocation(id));
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography>DATOS DE SUCURSAL SELECCIONADA</Typography>
          <Typography>Dirección: {location.description}</Typography>
          <Typography>Latitud: {location.lat}</Typography>
          <Typography>Longitud: {location.lng}</Typography>

          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={handleDelete}
          >
            Eliminar
          </Button>

          {/* UPDATE FORM */}
          <div>______________________________</div>
          <div>
            <Grid container direction="column" style={{ minHeight: "30vh" }}>
              <TextField
                id="1"
                name="description"
                label="Dirección/Descripción"
                variant="outlined"
                onChange={handleInputChange}
              />
              <TextField
                id="2"
                name="lat"
                label="Latitud"
                type="number"
                variant="outlined"
                onChange={handleInputChange}
              />
              <TextField
                id="3"
                name="lng"
                label="Longitud"
                type="number"
                variant="outlined"
                onChange={handleInputChange}
              />

              <Button
                variant="outlined"
                size="small"
                color="default"
                onClick={handleUpdate}
              >
                Actualizar
              </Button>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
