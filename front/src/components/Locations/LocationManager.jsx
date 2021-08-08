import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationDeleteEdit from "./LocationDeleteEdit";
import LocationSelector from "./LocationSelector";
import { getLocations } from "../../redux/actions/locationActions";
import { Grid } from "@material-ui/core";

export default function LocationManager() {
  let location = useSelector((store) => store.location.location);
  console.log(location);

  //dispatch and history hooks assignations
  const dispatch = useDispatch();
  //this one brings to a global redux state all locations
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch ,location]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <table>
        <th>
          <LocationSelector />
        </th>
        <th>
          <LocationDeleteEdit location={location} />
        </th>
      </table>
    </Grid>
  );
}
