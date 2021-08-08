import {
  GET_REVS,
  CHECK_REVIEWER,
  REV_MODIFIER,
} from "../actions/reviewActions";

const initialState = {
  reviews: [],
  check: false,
  modifier: false,
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REVS:
      return {
        ...state,
        reviews: action.payload,
      };
    case CHECK_REVIEWER:
      return {
        ...state,
        check: action.payload,
      };
    case REV_MODIFIER:
      return {
        ...state,
        modifier: action.payload,
      };

    default:
      return state;
  }
}
