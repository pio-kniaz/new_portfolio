import { combineReducers } from "redux";
import { reducer as user } from "components/admin-panel/component/User/reducer"
export const reducer = combineReducers({
  user
});
