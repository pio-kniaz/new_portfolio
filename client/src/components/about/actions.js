import axios from ' axios';
import api from 'api/api'
import { GET_ABOUT_DATA } from "redux/actionTypes"
export const getAboutData = ()  => async dispatch => {
  const { data } = await axios.get(`${api._baseURL}/about`)
  dispatch({
    type: GET_ABOUT_DATA,
    payload: data
  })
}
