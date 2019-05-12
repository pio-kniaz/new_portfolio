import {
  GET_CONTACT_DATA_PENDING,
  GET_CONTACT_DATA_REJECTED,
  GET_CONTACT_DATA_FULFILLED,
  UPDATE_CONTACT_DATA_PENDING,
  UPDATE_CONTACT_DATA_REJECTED,
  UPDATE_CONTACT_DATA_FULFILLED,
} from 'redux/actionTypes';

const initialState = {
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
