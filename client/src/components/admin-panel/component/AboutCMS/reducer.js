import {
  GET_ABOUT_CMS_DATA_PENDING,
  GET_ABOUT_CMS_DATA_FULFILLED,
  GET_ABOUT_CMS_DATA_REJECTED,
} from 'redux/actionTypes';

const initialState = {
  aboutCMS: {
    aboutCMSData: null,
    aboutCMSReqest: false,
    aboutCMSReqestFailure: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT_CMS_DATA_PENDING:
      return {
        ...state,
        aboutCMS: {
          ...state.aboutCMS,
          aboutCMSReqest: true,
        },
      };
    case GET_ABOUT_CMS_DATA_FULFILLED:
      const reducedData = action.payload.reduce((acc, item) => ({
        aboutCMSDataId: item._id,
        ...item.dataResponse.reduce((acc, elem) => ({
          ...elem,
        })),
      }), {});
      return {
        ...state,
        aboutCMS: {
          ...state.aboutCMS,
          aboutCMSData: reducedData,
          aboutCMSReqest: false,
        },
      };
    case GET_ABOUT_CMS_DATA_REJECTED:
      return {
        ...state,
        aboutCMS: {
          ...state.aboutCMS,
          aboutCMSReqestFailure: true,
        },
      };
    default:
      return state;
  }
};
