import { connect } from 'react-redux';
import ContactCMS from 'components/admin-panel/component/ContactCMS/ContactCMS';
import {
  getContactCMS, updateContactCMS,
} from 'components/admin-panel/actions';

const mapStateToProps = state => ({
  contactCMS: state.adminPanel.contactCMS,
});
const ContactCMSContainer = connect(
  mapStateToProps, {
    getContactCMS, updateContactCMS,
  },
)(ContactCMS);

export default ContactCMSContainer;
