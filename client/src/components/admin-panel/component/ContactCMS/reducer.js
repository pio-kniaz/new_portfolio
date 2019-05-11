import {
  GET_EMAILS_DATA_PENDING,
  GET_EMAILS_DATA_REJECTED,
  GET_EMAILS_DATA_FULFILLED,
  DELETE_EMAIL_PENDING,
  DELETE_EMAIL_REJECTED,
  DELETE_EMAIL_FULFILLED,
  GET_CONTACT_DATA_PENDING,
  GET_CONTACT_DATA_REJECTED,
  GET_CONTACT_DATA_FULFILLED,
  UPDATE_CONTACT_DATA_PENDING,
  UPDATE_CONTACT_DATA_REJECTED,
  UPDATE_CONTACT_DATA_FULFILLED,
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
  contact: {
    contactData: null,
    contactFailure: false,
    contactRequest: false,
    contactUpdated: null,
    contactUpdateFailure: false,
    contactUpdateRequest: false,
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
      const updatedContent = action.payload.reduce((acc, item) => item.updated, '');
      console.log(updatedContent, 'updatedContent');
      return {
        ...state,
        contact: {
          ...state.contact,
          contactData: reducedData,
          contactFailure: false,
          contactRequest: false,
          contactUpdated: updatedContent,
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
    default:
    case UPDATE_CONTACT_DATA_PENDING:
      return {
        ...state,
        contact: {
          ...state.contact,
          contactUpdateRequest: true,
          contactUpdateFailure: false,
        },
      };
    case UPDATE_CONTACT_DATA_FULFILLED:
      return {
        ...state,
        contact: {
          ...state.contact,
          contactUpdated: action.payload,
          contactUpdateFailure: false,
          contactUpdateRequest: false,
        },
      };
    case UPDATE_CONTACT_DATA_REJECTED:
      return {
        ...state,
        contact: {
          ...state.contact,
          contactUpdateFailure: true,
          contactUpdateRequest: false,
        },
      };
  }
};
