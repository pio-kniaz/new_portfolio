import { connect } from 'react-redux';
import ContactCMS from 'components/admin-panel/component/ContactCMS/ContactCMS';
import { getEmails, deleteEmail } from 'components/admin-panel/actions';

const mapStateToProps = state => ({
  contactCMS: state.adminPanel.contactCMS,
});
const ContactCMSContainer = connect(mapStateToProps, { getEmails, deleteEmail })(ContactCMS);

export default ContactCMSContainer;
