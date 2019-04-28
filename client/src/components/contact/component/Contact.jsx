import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from 'components/contact/component/ContactForm';

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

  renderPlContent = () => {
    const {
      contact: { contact: { contactData }, email },
      currentLanguage,
      sendEmail,
    } = this.props;
    const reducedData = contactData.pl.reduce((acc, item) => ({ ...item }), {});
    return (
      <div className="Contact__wrapper">
        <div className="Contact__content">
          <p className="Contact__title">
            {reducedData.title}
          </p>
          <p className="Contact__subtitle">
            {reducedData.subtitle}
          </p>
        </div>
        <hr className="my-4" />
        <ContactForm language={currentLanguage} sendEmail={sendEmail} emailResponse={email} />
      </div>
    );
  };

  renderEngContent = () => {
    const {
      contact: { contact: { contactData }, email },
      currentLanguage,
      sendEmail,
    } = this.props;
    const reducedData = contactData.eng.reduce((acc, item) => ({ ...item }), {});
    return (
      <div className="Contact__wrapper">
        <div className="Contact__content">
          <p className="Contact__title">
            {reducedData.title}
          </p>
          <p className="Contact__subtitle">
            {reducedData.subtitle}
          </p>
        </div>
        <hr className="my-4" />
        <ContactForm language={currentLanguage} sendEmail={sendEmail} emailResponse={email} />
      </div>
    );
  };

  render() {
    const {
      contact: { contact: { contactData, contactFailure } },
      currentLanguage,
    } = this.props;
    return (
      <section className="Contact">
        {contactData && !contactFailure ? (
          <>
            {currentLanguage === 'PL' ? (
              <>{this.renderPlContent()}</>
            ) : (
              <>{this.renderEngContent()}</>
            )}
          </>
        )
          : <p>Loading....</p>
        }
      </section>
    );
  }
}
export default Contact;
