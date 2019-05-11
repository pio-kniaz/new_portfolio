import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ContactCMSTable from 'components/admin-panel/component/ContactCMS/ContactCMSTable';
import ContactCMSForm from 'components/admin-panel/component/ContactCMS/ContactCMSForm';

class ContactCMS extends PureComponent {
  static propTypes = {
    getEmails: PropTypes.func.isRequired,
    deleteEmail: PropTypes.func.isRequired,
    updateContactCMS: PropTypes.func.isRequired,
    getContactCMS: PropTypes.func.isRequired,
    contactCMS: PropTypes.object.isRequired,
  }

  state = {
    contactCMSReady: false,
  }

  componentDidMount() {
    const { getEmails, getContactCMS } = this.props;
    (async () => {
      await Promise.all([
        getContactCMS(),
        getEmails(),
      ]);
      await this.setState({ contactCMSReady: true });
    })();
  }

  initializeData = () => {
    const { contactCMS: { contact: { contactData } } } = this.props;
    const plValues = contactData && contactData.pl.reduce((acc, item) => {
      const { _id, ...rest } = item;
      return {
        titlePl: rest.title,
        subtitlePl: rest.subtitle,
      };
    }, {});
    const engValues = contactData && contactData.eng.reduce((acc, item) => {
      const { _id, ...rest } = item;
      return {
        titleEng: rest.title,
        subtitleEng: rest.subtitle,
      };
    }, {});
    const values = { ...plValues, ...engValues };
    return values;
  }

  render() {
    const {
      contactCMS: {
        emails: {
          emailsData, emailsFailure, emailsDeleteData, emailsDeleteFailure, emailsDeleteRequest,
        },
        contact: { contactData, contactUpdated, contactUpdateFailure, contactUpdateRequest },
      }, deleteEmail, updateContactCMS,
    } = this.props;
    const { contactCMSReady } = this.state;
    return (
      <Container>
        {emailsData && !emailsFailure && contactCMSReady
          && (
            <div className="AdminPanel__outline">
              <ContactCMSForm
                contactUpdateRequest={contactUpdateRequest}
                contactUpdateFailure={contactUpdateFailure}
                contact={contactData}
                contactUpdated={contactUpdated}
                updateContactCMS={updateContactCMS}
                initialValues={this.initializeData()}
              />
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
