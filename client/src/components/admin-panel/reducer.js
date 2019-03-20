import { combineReducers } from "redux";
import { reducer as user } from "components/admin-panel/component/User/reducer"
import { reducer as aboutCMS } from "components/admin-panel/component/AboutCMS/reducer"
export const reducer = combineReducers({
  user,
  aboutCMS
});
