import { SWICH_TO_ENG, SWICH_TO_PL } from 'redux/actionTypes';

const initialState = {
  language: 'ENG',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWICH_TO_ENG:
      return {
        ...state,
        language: action.payload,
      };
    case SWICH_TO_PL:
      return {
        ...state,
        language: action.payload,
      };
    default: return state;
  }
};
