import axios from "axios";
import { url } from "../../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getLocations = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${url}/location`);
      dispatch({
        type: "GET_LOCATIONS",
        payload: data,
      });
      if (typeof data.message === "string") {
        toast.warn(data.message);
      }
    } catch (error) {
      dispatch({
        type: "GET_LOCATIONS",
        payload: { message: "Error de llamada" },
      });
      return { error: error };
    }
  };
};

export const getLocation = (id) => {
  return async (dispatch) => {
    let location;
    try {
      const { data } = await axios.get(`${url}/location/${id}`);
      location = await data.json();
      dispatch({
        type: "GET_LOCATION",
        payload: location,
      });
      if (typeof location.message === "string") {
        toast.warn(location.message);
      }
    } catch (error) {
      dispatch({
        type: "GET_LOCATION",
        payload: { message: "Error de llamada" },
      });
      return { error: error };
    }
  };
};

export const addLocation = (data) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${url}/location/create`, data);
      const resJson = await data.json();
      if (typeof resJson.message === "string") {
        toast.success(resJson.message);
      }
      dispatch({
        type: "ADD_LOCATION",
        payload: resJson,
      });
    } catch (error) {
      dispatch({
        type: "ADD_LOCATION",
        payload: { message: "Error de llamada" },
      });
      return { error: error };
    }
  };
};

export const deleteLocation = (id) => {
  return async (dispatch) => {
    //http://localhost:3001/location/delete?id=bc54b265-dc56-4719-b9f6-2267b47b15f9
    try {
      const { data } = await axios.delete(`${url}/location/delete/${id}`);
      const resJson = await data.json();
      if (typeof resJson.message === "string") {
        toast.info(resJson.message);
      }
      dispatch({
        type: "DELETE_LOCATION",
        payload: resJson,
      });
    } catch (error) {
      dispatch({
        type: "DELETE_LOCATION",
        payload: { message: "Error de llamada" },
      });
      return { error: error };
    }
  };
};

export const updateLocation = ({ id, description, lat, lng }) => {
  return async (dispatch) => {
    //http://localhost:3001/location/update?id=bc54b265-dc56-4719-b9f6-2267b47b15f9
    /*  {
      "description": "av general paz 539",
      "lat": -31.408666942379764,
      "lng": -64.18432312420376
  } */
    try {
      const body = {
        description,
        lat,
        lng,
      };
      console.log(id);

      const { data } = await axios.put(`${url}/location/update/${id}`, body);
      const resJson = await data.json();
      if (typeof resJson.message === "string") {
        toast.info(resJson.message);
      }
      dispatch({
        type: "UPDATE_LOCATION",
        payload: resJson,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_LOCATION",
        payload: { message: "Error de llamada" },
      });
      return { error: error };
    }
  };
};
