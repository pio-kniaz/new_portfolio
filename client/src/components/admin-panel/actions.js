import axios from "axios";
import api from "api/api";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "utils/authorization/setAuthToken";

import { LOG_IN_USER, LOG_IN_USER_REJECTED , LOG_OUT , CLEAR_LOGGED_USER } from "redux/actionTypes";

export const logIn = user => async dispatch => {
  const { data } = await axios.post(`${api._baseURL}/users/login`, user);
  try {
    localStorage.setItem("jwtToken", data.token);
    setAuthToken(data.token);
    const decodedToken = jwt_decode(data.token);
    console.log({ decodedToken: decodedToken });
    dispatch(setCurrentUser(decodedToken));
  } catch (e) {
    dispatch(logInRejected(e.response));
  }
};

export const setCurrentUser = decodedToken => {
  return {
    type: LOG_IN_USER,
    payload: decodedToken
  };
};

export const logInRejected = data => {
  return {
    type: LOG_IN_USER_REJECTED,
    payload: data
  };
};
// Log out and clear auth token in local local storage

export const logOutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  dispatch(clearLoggedUser());
}

export const clearLoggedUser = () => {
  return {
    type: CLEAR_LOGGED_USER,
    payload: {},
  }
}
