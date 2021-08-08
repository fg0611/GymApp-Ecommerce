import React, { useEffect } from "react";
import LocationDraw from "./LocationDraw";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../redux/actions/locationActions";
import {
  makeStyles,
  MenuItem,
  Select,
  FormControl,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function LocationSelector() {
  //dispatch and history hooks assignations
  const classes = useStyles();
  const dispatch = useDispatch();
  //store data
  const store = useSelector((store) => store);
  const locations = store.location;
  const location = store.location.location;

  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = React.useState("");

  useEffect(() => {}, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  let options;
  if (locations?.locations) {
    options = locations.locations.map((e) => (
      <MenuItem key={e.id} value={e.id}>
        {e.description}
      </MenuItem>
    ));
  } else if (locations?.message) {
    <p>{locations.message}</p>;
  } else {
    <p>No hay información</p>;
  }

  function handleSelection(e) {
    if (e.target.value === "") {
      return;
    }
    //key is the location's id
    setSelection(e.target.value);
    dispatch(getLocation(e.target.value));
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Typography>SELECCIONA UNA SUCURSAL:</Typography>
        {/* <InputLabel id="demo-controlled-open-select-label"></InputLabel> */}

        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selection}
          onChange={handleSelection}
        >
          <MenuItem value="">Ninguna</MenuItem>
          {options}
        </Select>
      </FormControl>
      <LocationDraw location={selection} />
    </div>
  );
}
