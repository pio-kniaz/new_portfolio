import { combineReducers } from 'redux';
import { reducer as about } from 'components/about/reducer';
import { reducer as projects } from 'components/projects/reducer';
import { reducer as contact } from 'components/contact/reducer';
import { reducer as adminPanel } from 'components/admin-panel/reducer';
import { reducer as language } from 'components/language/reducer';
import { reducer as reduxForm } from 'redux-form';

export const rootReducer = combineReducers({
  language,
  adminPanel,
  about,
  contact,
  projects,
  form: reduxForm,
});
