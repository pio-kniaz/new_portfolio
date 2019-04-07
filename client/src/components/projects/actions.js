import axios from "axios";
import api from "api/api";
import {
  GET_PROJECTS_DATA_PENDING,
  GET_PROJECTS_DATA_REJECTED,
  GET_PROJECTS_DATA_FULFILLED
} from "redux/actionTypes";

export const getProjects = () => async dispatch => {
  dispatch({
    type: GET_PROJECTS_DATA_PENDING
  })
  try {
    const { data } = await axios.get(`${api._baseURL}/project`);
    dispatch ({
      type: GET_PROJECTS_DATA_FULFILLED,
      payload: data,
    })
  } catch (e) {
    dispatch ({
      type: GET_PROJECTS_DATA_REJECTED,
      payload: e.response,
    })
  }
};
