import { connect } from 'react-redux';
import ContactCMS from 'components/admin-panel/component/ContactCMS/ContactCMS';
import {
  getEmails, deleteEmail, getContactCMS, updateContactCMS,
} from 'components/admin-panel/actions';

const mapStateToProps = state => ({
  contactCMS: state.adminPanel.contactCMS,
});
const ContactCMSContainer = connect(
  mapStateToProps, {
    getEmails, deleteEmail, getContactCMS, updateContactCMS,
  },
)(ContactCMS);

export default ContactCMSContainer;
