import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import FormBuilder from 'components/layout/component/form-builder/FormBuilder';
import { required } from 'utils/validators/inputsValidator';
import PropTypes from 'prop-types';

class User extends React.Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    modalVisible: PropTypes.bool.isRequired,
  }

  logInUserHandler = (values) => {
    const { logIn, toggle } = this.props;
    logIn(values).then(() => {
      console.log('login success');
      toggle();
    }).catch((e) => {
      console.error(e);
    });
  };

  render() {
    const { modalVisible, toggle, handleSubmit } = this.props;
    return (
      <div>
        <Modal isOpen={modalVisible} toggle={toggle}>
          <ModalHeader toggle={toggle}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit(this.logInUserHandler)}>
              <FormGroup>
                <Field
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  component={FormBuilder}
                  validate={[required]}
                />
              </FormGroup>
              <FormGroup>
                <Field
                  label="Password"
                  type="text"
                  name="password"
                  placeholder="Password"
                  component={FormBuilder}
                  validate={[required]}
                />
              </FormGroup>
              <FormGroup>
                <Button>Log In</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default reduxForm({
  form: 'login',
})(User);
