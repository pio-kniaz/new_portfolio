import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form
} from "reactstrap";
import { Field, reduxForm } from "redux-form";
import FormBuilder from "components/layout/component/form-builder/FormBuilder";
import { required } from 'utils/validators/inputsValidator';

class User extends React.Component {
  logInUserHandler = values => {
    const { logIn, toggle } = this.props;
    logIn(values).then(()=> {
      console.log('login success');
      toggle();
    }).catch((e) => {
      console.log(e.response.data);
      console.error('ERROR');
    })
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
                  label="Email"
                  type="text"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  component={FormBuilder}
                  validate={[required]}
                />
              </FormGroup>
              <FormGroup>
                <Field
                  label="Password"
                  type="text"
                  name="password"
                  id="examplePassword"
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
  form: "login"
})(User);
