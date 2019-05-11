import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormBuilder from 'components/layout/component/form-builder/FormBuilder';
import {
  Col, Form, Row, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import { successToast, failureToast } from 'utils/toastify/toastify';

class ContactCMSForm extends React.Component {
  static propTypes = {
    initialValues: PropTypes.object.isRequired,
    contactUpdated: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateContactCMS: PropTypes.func.isRequired,
    contactUpdateFailure: PropTypes.bool.isRequired,
  }

  renderFields = () => {
    const { initialValues } = this.props;
    return Object.keys(initialValues).map(elem => (
      <Col
        key={elem}
        sm="18"
        xs="36"
      >
        <Field
          label={elem}
          type="textarea"
          name={elem}
          component={FormBuilder}
        />
      </Col>
    ));
  }

  updateContactFields = (values) => {
    const { contact: { _id }, updateContactCMS } = this.props;
    console.log(_id, 'contact');
    console.log(values, 'values');
    updateContactCMS(values, _id).then(() => {
      const { contactUpdateFailure } = this.props;
      console.log(contactUpdateFailure, 'contactUpdateFailure');
      if (contactUpdateFailure) {
        failureToast('error');
      } else {
        successToast('succes');
      }
    });
  }

  render() {
    const { handleSubmit, contactUpdated } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.updateContactFields)}>
        <Row className="my-4">
          {this.renderFields()}
          <Col xs="36">
            <div className="d-flex">
              <Col md="8" xs="36">
                <div className="d-flex justify-content-start">
                  <Button className="btn__gold w-100">Send</Button>
                </div>
              </Col>
              <Col md="28" xs="36">
                <div className="d-flex justify-content-end">
                  <p>Last update: </p>
                  <span className="ml-2">
                    {moment(contactUpdated).format('YYYY-MM-DD HH:mm:ss')}
                  </span>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default reduxForm({
  form: 'contact-cms',
})(ContactCMSForm);
