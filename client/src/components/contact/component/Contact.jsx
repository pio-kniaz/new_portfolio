import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from 'components/contact/component/ContactForm';
import ContactMap from 'components/contact/component/ContactMap';
import { Row, Col } from 'reactstrap';

class Contact extends React.Component {
  static propTypes = {
    getContactData: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
    currentLanguage: PropTypes.string.isRequired,
    sendEmail: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { getContactData } = this.props;
    getContactData();
  }

  renderContactContent = (language) => {
    const {
      contact: { contact: { contactData }, email },
      currentLanguage,
      sendEmail,
    } = this.props;
    const reducedData = contactData[language].reduce((acc, item) => ({ ...item }), {});
    return (
      <div className="Contact__wrapper">
        <Row className="Contact__wrapper-row" noGutters>
          <Col
            className="Contact__col Contact__col--map"
            lg="18"
            md="36"
            sm="36"
          >
            <ContactMap
              title={reducedData.title}
              subtitle={reducedData.subtitle}
            />
          </Col>
          <Col
            className="Contact__col Contact__col--form"
            lg="18"
            md="36"
            sm="36"
          >
            <ContactForm language={currentLanguage} sendEmail={sendEmail} emailResponse={email} />
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    const {
      contact: { contact: { contactData, contactFailure } },
      currentLanguage,
    } = this.props;
    return (
      <section className="Contact Blur">
        <div className="Skewed">
          <div className="Skewed__layer Skewed__bottom" />
          <div className="Skewed__layer Skewed__top" />
        </div>
        {contactData && !contactFailure ? (
          <>
            {this.renderContactContent(currentLanguage)}
          </>
        )
          : <p>Loading....</p>
        }
      </section>
    );
  }
}
export default Contact;
