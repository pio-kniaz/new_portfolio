import { combineReducers } from 'redux'
import { reducer as aboutReducer } from "components/about/reducer"
import { reducer as adminPanel } from "components/admin-panel/reducer"
import { reducer as reduxForm } from 'redux-form';
export const rootReducer = combineReducers({
  aboutReducer,
  adminPanel,
  form: reduxForm,
})
