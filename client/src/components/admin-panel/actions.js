import axios from "axios";
import api from "api/api";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "utils/authorization/setAuthToken";

import {
  LOG_IN_USER,
  LOG_IN_USER_REJECTED,
  CLEAR_LOGGED_USER,
  GET_ABOUT_CMS_DATA_PENDING,
  GET_ABOUT_CMS_DATA_REJECTED,
  GET_ABOUT_CMS_DATA_FULFILLED,
  UPDATE_ABOUT_CMS_DATA_PENDING,
  UPDATE_ABOUT_CMS_DATA_REJECTED,
  UPDATE_ABOUT_CMS_DATA_FULFILLED,
} from "redux/actionTypes";

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
};

export const clearLoggedUser = () => {
  return {
    type: CLEAR_LOGGED_USER,
    payload: {}
  };
};

// CMS
export const getAboutCMS = () => async dispatch => {
  const response = await axios.get(`${api._baseURL}/about`);
  dispatch({
    type: GET_ABOUT_CMS_DATA_PENDING,
    payload: true,
  });
  try {
    dispatch({
      type: GET_ABOUT_CMS_DATA_FULFILLED,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ABOUT_CMS_DATA_REJECTED,
      payload: e.response,
    });
  }
};

export const updateAboutCMS = (obj,id) => async dispatch => {
  console.log(obj,'obj');
  const { data } = await axios.put(`${api._baseURL}/about/${id}`,obj);
  dispatch({
    type: UPDATE_ABOUT_CMS_DATA_PENDING,
    payload: true,
  })
  try {
    dispatch({
      type: UPDATE_ABOUT_CMS_DATA_FULFILLED,
      payload: data,
    })
  } catch (e) {
    dispatch({
      type: UPDATE_ABOUT_CMS_DATA_REJECTED,
      payload:e
    })
  }
}
