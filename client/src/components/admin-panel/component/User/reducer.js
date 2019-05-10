import { LOG_IN_USER, LOG_OUT, LOG_IN_USER_END } from 'redux/actionTypes';

const initialState = {
  user: {
    userData: null,
    isLogged: false,
  },
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_USER:
      return {
        ...state,
        user: {
          ...state.user,
          userData: action.payload,
          isLogged: true,
        },
      };
    case LOG_OUT:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_IN_USER_END:
      return {
        ...state,
        user: {
          userData: null,
          isLogged: false,
        },
      };
    default:
      return state;
  }
};
