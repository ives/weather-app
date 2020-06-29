import objectAssign from "object-assign";

const initialState = {
  apiData: {},
  errorMessage: ""
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {

    case "FETCH_WEATHER_SUCCESS":
      return objectAssign({}, state, { apiData: action.payload });

    case "FETCH_WEATHER_ERROR":
      return objectAssign({}, state, { errorMessage: action.message });

    default:
      return state;
  }
}
