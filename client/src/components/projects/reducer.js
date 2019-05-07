import {
  GET_PROJECTS_DATA_PENDING,
  GET_PROJECTS_DATA_REJECTED,
  GET_PROJECTS_DATA_FULFILLED,
} from 'redux/actionTypes';

const initialState = {
  projects: {
    projectsData: null,
    projectsFailure: false,
    projectsRequest: false,
  },
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_DATA_PENDING:
      return {
        ...state.projects,
        projectsRequest: true,
      };
    case GET_PROJECTS_DATA_FULFILLED:
      return {
        ...state.projects,
        projectsData: action.payload.data,
        projectsRequest: false,
        projectsFailure: false,
      };
    case GET_PROJECTS_DATA_REJECTED:
      return {
        ...state.projects,
        projectsFailure: true,
        projectsRequest: false,

      };
    default:
      return state;
  }
};
