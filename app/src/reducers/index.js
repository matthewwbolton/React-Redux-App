import { FETCH_DATA, UPDATE_STATUS, SET_ERROR, SET_COUNTRY } from "../actions";

const initialState = {
  countryData: [],
  isFetchingData: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true
      };

    case UPDATE_STATUS:
      console.log("$$$$$$$$$", action.payload);
      return {
        ...state,
        countryData: action.payload,
        isFetchingData: false,
        error: ""
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case SET_COUNTRY:
      return {
        ...state,
        countryData: state.countryData.filter(
          elem => elem.Country === action.payload
        )
      };

    default:
      return state;
  }
};
