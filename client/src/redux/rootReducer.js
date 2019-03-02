import { combineReducers } from 'redux'
import { reducer as aboutReducer } from "components/about/reducer"
export const rootReducer = combineReducers({
  aboutReducer
})
