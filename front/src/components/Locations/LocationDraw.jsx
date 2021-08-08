import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const { GMAPS_KEY } = process.env;

const containerStyle = {
  width: "500px",
  height: "500px",
};

function LocationDraw({ location }) {
  const apiKey = GMAPS_KEY;
  const pos = {
    lat: parseFloat(location.lat),
    lng: parseFloat(location.lng),
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={pos} zoom={15}>
        {pos && <Marker position={pos} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(LocationDraw);
