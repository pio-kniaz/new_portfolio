import {
  GET_EMAILS_DATA_PENDING,
  GET_EMAILS_DATA_REJECTED,
  GET_EMAILS_DATA_FULFILLED,
  DELETE_EMAIL_PENDING,
  DELETE_EMAIL_REJECTED,
  DELETE_EMAIL_FULFILLED,
} from 'redux/actionTypes';

const initialState = {
  emails: {
    emailsData: null,
    emailsRequest: false,
    emailsFailure: false,
    emailsDeleteData: null,
    emailsDeleteRequest: false,
    emailsDeleteFailure: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMAILS_DATA_PENDING:
      return {
        ...state,
        emails: {
          ...state.emails,
          emailsData: null,
          emailsRequest: true,
          emailsFailure: false,
        },
      };
    case GET_EMAILS_DATA_FULFILLED:
      return {
        ...state,
        emails: {
          ...state.emails,
          emailsData: action.payload,
          emailsRequest: false,
          emailsFailure: false,
        },
      };
    case GET_EMAILS_DATA_REJECTED:
      return {
        ...state,
        emails: {
          ...state.emails,
          emailsData: action.payload,
          emailsRequest: false,
          emailsFailure: true,
        },
      };
    case DELETE_EMAIL_PENDING:
      return {
        ...state,
        emails: {
          ...state.emails,
          emailsDeleteRequest: true,
          emailsDeleteFailure: false,
        },
      };
    case DELETE_EMAIL_FULFILLED:
      return {
        ...state,
        emails: {
          ...state.emails,
          emailsData: state.emails.emailsData.filter(elem => elem._id !== action.payload.data),
          emailsDeleteRequest: false,
          emailsDeleteFailure: false,
          emailsDeleteData: action.payload,
        },
      };
    case DELETE_EMAIL_REJECTED:
      return {
        ...state,
        emails: {
          ...state.emails,
          emailsDeleteData: action.payload.data,
          emailsDeleteRequest: false,
          emailsDeleteFailure: true,
        },
      };
    default:
      return state;
  }
};
