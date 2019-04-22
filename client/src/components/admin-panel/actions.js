import axios from 'axios';
import api from 'api/api';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from 'utils/authorization/setAuthToken';

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
  GET_PROJECTS_CMS_DATA_PENDING,
  GET_PROJECTS_CMS_DATA_REJECTED,
  GET_PROJECTS_CMS_DATA_FULFILLED,
  ADD_PROJECT_CMS_DATA_PENDING,
  ADD_PROJECT_CMS_DATA_REJECTED,
  ADD_PROJECT_CMS_DATA_FULFILLED,
  TOGGLE_PROJECT_CMS_DATA_PENDING,
  TOGGLE_PROJECT_CMS_DATA_REJECTED,
  TOGGLE_PROJECT_CMS_DATA_FULFILLED,
} from 'redux/actionTypes';


export const setCurrentUser = decodedToken => ({
  type: LOG_IN_USER,
  payload: decodedToken,
});

export const logInRejected = data => ({
  type: LOG_IN_USER_REJECTED,
  payload: data,
});

export const logIn = user => async (dispatch) => {
  const { data } = await axios.post(`${api._baseURL}/users/login`, user);
  try {
    localStorage.setItem('jwtToken', data.token);
    setAuthToken(data.token);
    const decodedToken = jwt_decode(data.token);
    dispatch(setCurrentUser(decodedToken));
  } catch (e) {
    dispatch(logInRejected(e.response));
  }
};
// Log out and clear auth token in local local storage
export const clearLoggedUser = () => ({
  type: CLEAR_LOGGED_USER,
  payload: {},
});

export const logOutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  dispatch(clearLoggedUser());
};


// CMS
export const getAboutCMS = () => async (dispatch) => {
  dispatch({
    type: GET_ABOUT_CMS_DATA_PENDING,
    payload: true,
  });
  try {
    const { data } = await axios.get(`${api._baseURL}/about`);
    dispatch({
      type: GET_ABOUT_CMS_DATA_FULFILLED,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_ABOUT_CMS_DATA_REJECTED,
      payload: e.response,
    });
  }
};

export const updateAboutCMS = (obj, id) => async (dispatch) => {
  dispatch({
    type: UPDATE_ABOUT_CMS_DATA_PENDING,
    payload: true,
  });
  try {
    const { data } = await axios.put(`${api._baseURL}/about/${id}`, obj);
    dispatch({
      type: UPDATE_ABOUT_CMS_DATA_FULFILLED,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ABOUT_CMS_DATA_REJECTED,
      payload: e,
    });
  }
};
// Projects
export const getProjectsCMS = () => async (dispatch) => {
  dispatch({
    type: GET_PROJECTS_CMS_DATA_PENDING,
    payload: true,
  });
  try {
    const { data } = await axios.get(`${api._baseURL}/project`);
    dispatch({
      type: GET_PROJECTS_CMS_DATA_FULFILLED,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_PROJECTS_CMS_DATA_REJECTED,
      payload: e.response,
    });
  }
};
// Add new Project

export const addNewProject = newProject => async (dispatch) => {
  dispatch({
    type: ADD_PROJECT_CMS_DATA_PENDING,
    payload: true,
  });
  const formData = new FormData();
  formData.append('image', newProject.image);
  const newData = {
    ...newProject,
  };
  try {
    const { data } = await axios.post(`${api._baseURL}/project/`, newData);
    await axios.put(`${api._baseURL}/project/images/${data._id}`, formData);
    dispatch({
      type: ADD_PROJECT_CMS_DATA_FULFILLED,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ADD_PROJECT_CMS_DATA_REJECTED,
      payload: e.response,
    });
  }
};

export const showOrHideProject = id => async (dispatch) => {
  dispatch({
    type: TOGGLE_PROJECT_CMS_DATA_PENDING,
    payload: true,
  });
  try {
    const { data } = await axios.put(`${api._baseURL}/project/${id}`);
    dispatch({
      type: TOGGLE_PROJECT_CMS_DATA_FULFILLED,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: TOGGLE_PROJECT_CMS_DATA_REJECTED,
      payload: e.response,
    });
  }
};
