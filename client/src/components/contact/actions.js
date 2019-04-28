import {
  GET_CONTACT_DATA_PENDING,
  GET_CONTACT_DATA_REJECTED,
  GET_CONTACT_DATA_FULFILLED,
  SEND_EMAIL_PENDING,
  SEND_EMAIL_REJECTED,
  SEND_EMAIL_FULFILLED,
} from 'redux/actionTypes';
import Api from 'api/api';
import axios from 'axios';

export const getContactData = () => async (dispatch) => {
  dispatch({
    type: GET_CONTACT_DATA_PENDING,
    payload: true,
  });
  try {
    const { data } = await axios.get(`${Api._baseURL}/contact`);
    dispatch({
      type: GET_CONTACT_DATA_FULFILLED,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_CONTACT_DATA_REJECTED,
      payload: e.response,
    });
  }
};

export const sendEmail = email => async (dispatch) => {
  dispatch({
    type: SEND_EMAIL_PENDING,
    payload: true,
  });
  try {
    const { data } = await axios.post(`${Api._baseURL}/contact/email`, email);
    dispatch({
      type: SEND_EMAIL_FULFILLED,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: SEND_EMAIL_REJECTED,
      payload: e.response.data,
    });
  }
};
