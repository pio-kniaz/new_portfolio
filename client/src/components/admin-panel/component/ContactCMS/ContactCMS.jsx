import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ContactCMSTable from 'components/admin-panel/component/ContactCMS/ContactCMSTable';

class ContactCMS extends React.Component {
  static propTypes = {
    getEmails: PropTypes.func.isRequired,
    deleteEmail: PropTypes.func.isRequired,
    contactCMS: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getEmails } = this.props;
    getEmails();
  }

  render() {
    const {
      contactCMS: {
        emails: {
          emailsData, emailsFailure, emailsDeleteData, emailsDeleteFailure, emailsDeleteRequest,
        },
      }, deleteEmail,
    } = this.props;
    return (
      <Container>
        {emailsData && !emailsFailure
          && (
            <div className="AdminPanel__outline">
              <ContactCMSTable
                deleteEmail={deleteEmail}
                emails={emailsData}
                emailsDeleteData={emailsDeleteData}
                emailsDeleteFailure={emailsDeleteFailure}
                emailsDeleteRequest={emailsDeleteRequest}
              />
            </div>
          )
        }
      </Container>
    );
  }
}
export default ContactCMS;
