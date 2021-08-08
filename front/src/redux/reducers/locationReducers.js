const initialState = {
  locations: [],
  location: {},
};

export default function locationReducers(state = initialState, action) {
  switch (action.type) {
    case "GET_LOCATIONS":
      return {
        ...state,
        locations: action.payload,
      };
    case "GET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "ADD_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "DELETE_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "UPDATE_LOCATION":
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
}
