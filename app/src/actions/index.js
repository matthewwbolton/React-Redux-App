import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const SET_ERROR = "SET_ERROR";
export const SET_SEARCH = "SET_SEARCH";

export const SET_COUNTRY = "SET_COUNTRY";

export const setCountry = country => {
  return {
    type: SET_COUNTRY,
    payload: country
  };
};

export const setSearch = country => {
  return {
    type: SET_SEARCH,
    payload: country
  };
};

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://api.covid19api.com/summary")
    .then(res => {
      console.log(res.data);
      dispatch({ type: UPDATE_STATUS, payload: res.data.Countries });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SET_ERROR, payload: err.status });
    });
};
