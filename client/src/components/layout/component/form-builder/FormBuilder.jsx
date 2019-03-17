import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

class FormBuilder extends React.Component {
  renderFields = type => {
    const {
      input,
      label,
      placeholder,
      meta: { touched, error, warning }
    } = this.props;
    switch (type) {
      case "textarea":
        return (
          <FormGroup>
            <Label>{label}</Label>
            <Input type="textarea" placeholder={placeholder} {...input} />
            {touched &&
              ((error && (
                <span className="CreateNewCheckList__error d-block error">
                  {error}
                </span>
              )) ||
                (warning && <span>{warning}</span>))}
          </FormGroup>
        );
      case "text":
        return (
          <FormGroup>
            <Label>{label}</Label>
            <Input
              className={touched && error ? 'Input Input--invalid' : 'Input'}
              type="text"
              placeholder={placeholder}
              {...input}
            />
          </FormGroup>
        );
      default:
        return null;
    }
  };
  render() {
    const { type } = this.props;
    return <div>{this.renderFields(type)}</div>;
  }
}
export default FormBuilder;
