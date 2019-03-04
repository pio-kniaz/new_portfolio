import axios from "axios";
import api from "api/api";
import {
  GET_ABOUT_DATA_PENDING,
  GET_ABOUT_DATA_FULFILLED,
  GET_ABOUT_DATA_REJECTED
} from "redux/actionTypes";
export const getAboutData = () => async dispatch => {
  dispatch({
    type: GET_ABOUT_DATA_PENDING,
    payload: true
  })
  try {
    const { data } = await axios.get(`${api._baseURL}/about`);
    dispatch({
      type: GET_ABOUT_DATA_FULFILLED,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_ABOUT_DATA_REJECTED,
      payload: error.response
    });
  }
};
