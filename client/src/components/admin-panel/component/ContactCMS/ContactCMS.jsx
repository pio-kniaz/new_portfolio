import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ContactCMSForm from 'components/admin-panel/component/ContactCMS/ContactCMSForm';

class ContactCMS extends PureComponent {
  static propTypes = {
    updateContactCMS: PropTypes.func.isRequired,
    getContactCMS: PropTypes.func.isRequired,
    contactCMS: PropTypes.object.isRequired,
  }

  state = {
    contactCMSReady: false,
  }

  componentDidMount() {
    const { getContactCMS } = this.props;
    getContactCMS().then(() => {
      this.setState({ contactCMSReady: true });
    });
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
        contact: {
          contactData, contactUpdated, contactUpdateFailure, contactUpdateRequest,
        },
      }, updateContactCMS,
    } = this.props;
    const { contactCMSReady } = this.state;
    return (
      <Container>
        {contactCMSReady
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
            </div>
          )
        }
      </Container>
    );
  }
}
export default ContactCMS;
