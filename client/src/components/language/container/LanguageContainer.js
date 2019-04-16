import { connect } from 'react-redux';
import Language from 'components/language/component/Language';
import * as actions from 'components/language/actions';

const mapStateToProps = state => ({
  currentLanguage: state.language.language,
});
const LanguageContainer = connect(mapStateToProps, { ...actions })(Language);

export default LanguageContainer;
