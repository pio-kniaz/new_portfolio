import {
  GET_PROJECTS_CMS_DATA_PENDING,
  GET_PROJECTS_CMS_DATA_FULFILLED,
  GET_PROJECTS_CMS_DATA_REJECTED,
  ADD_PROJECT_CMS_DATA_PENDING,
  ADD_PROJECT_CMS_DATA_REJECTED,
  ADD_PROJECT_CMS_DATA_FULFILLED,
} from 'redux/actionTypes';

const initialState = {
  projects: {
    projectsCMSData: null,
    projectsCMSReqest: false,
    projectsCMSReqestFailure: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_CMS_DATA_PENDING:
      return {
        ...state,
        projects: {
          ...state.projects,
          projectsCMSReqest: true,
        },
      };
    case GET_PROJECTS_CMS_DATA_FULFILLED:
      return {
        ...state,
        projects: {
          ...state.projects,
          projectsCMSData: action.payload.data,
          projectsCMSReqest: false,
          projectsCMSReqestFailure: false,
        },
      };
    case GET_PROJECTS_CMS_DATA_REJECTED:
      return {
        ...state,
        projects: {
          ...state.projects,
          projectsCMSReqest: false,
          projectsCMSReqestFailure: true,
        },
      };
    case ADD_PROJECT_CMS_DATA_PENDING:
      return {
        ...state,
        projects: {
          ...state.projects,
          projectsCMSReqest: true,
        },
      };
    case ADD_PROJECT_CMS_DATA_FULFILLED:
      const concatedData = state.projects.projectsCMSData.concat(action.payload);
      return {
        ...state,
        projects: {
          ...state.projects,
          projectsCMSData: concatedData,
          projectsCMSReqest: false,
          projectsCMSReqestFailure: false,
        },
      };
    case ADD_PROJECT_CMS_DATA_REJECTED:
      return {
        ...state,
        projects: {
          ...state.projects,
          projectsCMSReqest: false,
          projectsCMSReqestFailure: true,
        },
      };
    default:
      return state;
  }
};
