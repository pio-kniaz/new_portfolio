import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { successToast, failureToast } from 'utils/toastify/toastify';
import { required, email } from 'utils/validators/inputsValidator';

import FormBuilder from 'components/layout/component/form-builder/FormBuilder';

class ContactForm extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    sendEmail: PropTypes.func.isRequired,
    emailResponse: PropTypes.object.isRequired,
    reset: PropTypes.func.isRequired,
  }

  sendEmailHandler = (values) => {
    const { sendEmail, language } = this.props;
    sendEmail({
      ...values,
      contact_language: language,
    })
      .then(() => {
        const { emailResponse, reset } = this.props;
        reset('contact');
        if (emailResponse.emailFailure) {
          return Object.values(emailResponse.emailData)
            .map(errorMessage => failureToast(errorMessage));
        }
        return successToast(emailResponse.emailData.message);
      });
  }

  render() {
    const { language, handleSubmit } = this.props;
    return (
      <div className="Contact__ContactForm">
        <Form onSubmit={handleSubmit(this.sendEmailHandler)}>
          <Field
            label={language === 'pl' ? 'Imie' : 'Your name'}
            type="text"
            name="contact_name"
            component={FormBuilder}
            validate={required}
          />
          <Field
            label={language === 'pl' ? 'Email' : 'Your Email'}
            type="email"
            name="contact_email"
            component={FormBuilder}
            validate={[email, required]}
          />
          <Field
            label={language === 'pl' ? 'Temat' : 'Subject'}
            type="text"
            name="contact_subject"
            component={FormBuilder}
            validate={required}
          />
          <Field
            label={language === 'pl' ? 'Wiadomość' : 'Message'}
            type="textarea"
            name="contact_message"
            component={FormBuilder}
            validate={required}
          />
          <Button className="mt-3 btn btn-lg btn__black">
            Send
          </Button>
        </Form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'contact',
})(ContactForm);
