import {
  GET_CONTACT_DATA_PENDING,
  GET_CONTACT_DATA_REJECTED,
  GET_CONTACT_DATA_FULFILLED,
  SEND_EMAIL_PENDING,
  SEND_EMAIL_REJECTED,
  SEND_EMAIL_FULFILLED,
} from 'redux/actionTypes';

const initialState = {
  contact: {
    contactData: null,
    contactFailure: false,
    contactRequest: false,
  },
  email: {
    emailData: null,
    emailFailure: false,
    emailRequest: false,
  },
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_DATA_PENDING:
      return {
        ...state,
        contact: {
          ...state.contact,
          contactRequest: true,
        },
      };
    case GET_CONTACT_DATA_FULFILLED:
      const reducedData = action.payload.reduce((acc, item) => ({
        ...item.dataResponse.reduce((obj, elem) => ({
          ...elem,
        })),
      }), {});
      return {
        ...state,
        contact: {
          ...state.contact,
          contactData: reducedData,
          contactFailure: false,
          contactRequest: false,
        },
      };
    case GET_CONTACT_DATA_REJECTED:
      return {
        ...state,
        contact: {
          ...state.contact,
          contactFailure: true,
        },
      };
    case SEND_EMAIL_PENDING:
      return {
        ...state,
        email: {
          ...state.email,
          emailRequest: true,
          emailFailure: false,
          emailData: null,
        },
      };
    case SEND_EMAIL_FULFILLED:
      return {
        ...state,
        email: {
          ...state.email,
          emailData: action.payload,
        },
      };
    case SEND_EMAIL_REJECTED:
      return {
        ...state,
        email: {
          ...state.email,
          emailData: action.payload,
          emailFailure: true,
          emailRequest: false,
        },
      };
    default:
      return state;
  }
};
