import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

class FormBuilder extends React.Component {
  saveValues = e => {
    const { input } = this.props;
    console.log(e.target.value,'e.target.value');
    console.log(input,'input');
    input.onChange(e.target.value);
  };
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
              className={touched && error ? "Input Input--invalid" : "Input"}
              type="text"
              placeholder={placeholder}
              {...input}
              // onChange={(e) => {
              //     this.saveValues(e);
              //   }}
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
