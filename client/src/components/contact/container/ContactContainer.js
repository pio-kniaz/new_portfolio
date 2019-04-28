import { connect } from 'react-redux';
import Contact from 'components/contact/component/Contact';
import * as actions from 'components/contact/actions';

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
    currentLanguage: state.language.language,
  };
};
const ContactContainer = connect(mapStateToProps, { ...actions })(Contact);
export default ContactContainer;
