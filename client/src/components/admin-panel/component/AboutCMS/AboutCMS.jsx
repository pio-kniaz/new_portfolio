import React from "react";
import { Jumbotron, Container, Button, FormGroup, Form } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import FormBuilder from "components/layout/component/form-builder/FormBuilder";

class AboutCMS extends React.Component {
  componentDidMount() {
    const {
      aboutCMS: { aboutCMSData },
      initialize
    } = this.props;
   const { __v,_id,...rest } = aboutCMSData;
    const initialValues = Object.keys(rest).map(elem => {
      let value = aboutCMSData[elem]
      return {
        [elem]: value
      };
    });
    const [a, b, c,] = initialValues;
    let merged = {...a, ...b,...c};
    initialize(merged);
  }
  updateAboutFiled = values => {
    const {
      updateAboutCMS,
      aboutCMS: {
        aboutCMSData: { _id }
      }
    } = this.props;
    console.log(_id, "_id");
    console.log(values);
    updateAboutCMS(values, _id);
  };
  render() {
    const {
      aboutCMS: { aboutCMSData },
      handleSubmit
    } = this.props;

    const { _id,__v,updated,...restofAboutCMSData} = aboutCMSData
    return (
      <div className="CMS">
        {aboutCMSData && restofAboutCMSData && (
          <Jumbotron fluid>
            <Container fluid>
              <h5 className="display-3">About Section</h5>
              <Form onSubmit={handleSubmit(this.updateAboutFiled)}>
                {Object.keys(restofAboutCMSData).map((elem, i) => {
                  return (
                    <FormGroup key={i}>
                      <Field
                        label={elem}
                        type="text"
                        name={elem}
                        component={FormBuilder}
                      />
                    </FormGroup>
                  );
                })}
                <Button>Save</Button>
              </Form>
            </Container>
          </Jumbotron>
        )}
      </div>
    );
  }
}
// console.log(this.initialValues);
export default reduxForm({
  form: "about-cms"
})(AboutCMS);
