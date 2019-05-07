import {
  GET_ABOUT_DATA_PENDING,
  GET_ABOUT_DATA_FULFILLED,
  GET_ABOUT_DATA_REJECTED,
} from 'redux/actionTypes';

const initialState = {
  about: {
    aboutData: null,
    aboutRequest: false,
    aboutFailure: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT_DATA_PENDING:
      return {
        ...state,
        about: {
          ...state.about,
          aboutRequest: true,
        },
      };
    case GET_ABOUT_DATA_FULFILLED:
      const reducedToObjData = action.payload.reduce((acc, item) => ({
        ...item.dataResponse.reduce((acc, elem) => ({
          ...elem,
        })),
      }), {});
      return {
        ...state,
        about: {
          ...state.about,
          aboutData: action.payload.length > 0 ? reducedToObjData : null,
          aboutRequest: false,
          aboutFailure: false,
        },
      };
    case GET_ABOUT_DATA_REJECTED:
      return {
        ...state,
        about: {
          ...state.about,
          aboutFailure: true,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
