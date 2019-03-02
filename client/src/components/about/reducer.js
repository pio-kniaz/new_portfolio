import { GET_ABOUT_DATA } from "redux/actionTypes";

const initialState = {
  about: {
    aboutData: null,
    aboutRequest: false,
    aboutFailure: false
  }
};

export const reducer = (state = initialState, action) => {
  switch (action) {
    case GET_ABOUT_DATA:
      return {
        ...state,
        about: {
          ...state.about,
          aboutData: action.payload,
          aboutFailure: false
        }
      };
    default:
      return {
        ...state
      };
  }
};
