import { combineReducers } from 'redux';
import { reducer as user } from 'components/admin-panel/component/User/reducer';
import { reducer as aboutCMS } from 'components/admin-panel/component/AboutCMS/reducer';
import { reducer as projectsCMS } from 'components/admin-panel/component/ProjectCMS/reducer';
import { reducer as contactCMS } from 'components/admin-panel/component/ContactCMS/reducer';

export const reducer = combineReducers({
  user,
  aboutCMS,
  projectsCMS,
  contactCMS,
});
