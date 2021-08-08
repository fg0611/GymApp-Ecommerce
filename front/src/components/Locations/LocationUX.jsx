import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LocationDraw from "./LocationDraw";
import { getLocations } from "../../redux/actions/locationActions";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import loader from "./loader.gif";
import "./locationux.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function LocationUX() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const initialSelection = {
    lat: 20,
    lng: 20,
  };
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const locations = useSelector((state) => state.location.locations);
  const [selection, setselection] = useState(initialSelection);
  console.log(locations);

  function btnHandler(e) {
    const { value } = e.target;
    const data = locations.find((e) => e.id == value);
    data && setselection(data);
  }

  return (
    <div>
      <table>
        <th>
          <div className="group">
            {locations?.length &&
              locations.map((loc) => (
                <button
                  className="btn"
                  key={loc.id}
                  value={loc.id}
                  onClick={btnHandler}
                >
                  {loc.description}
                </button>
              ))}
          </div>
        </th>
        <tr>
          <th>
            {selection ? (
              <LocationDraw location={selection} />
            ) : (
              <img src={loader} alt="Loading..." />
            )}
          </th>

          <th>
            <div className={classes.root}>
              <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem
                  key="Subheader"
                  cols={2}
                  style={{ height: "auto" }}
                ></ImageListItem>
                {selection?.images &&
                  selection.images.map((item) => (
                    <ImageListItem key={item}>
                      <img src={item} alt="no img" />
                    </ImageListItem>
                  ))}
              </ImageList>
            </div>
          </th>
        </tr>
      </table>
    </div>
  );
}

export default LocationUX;
