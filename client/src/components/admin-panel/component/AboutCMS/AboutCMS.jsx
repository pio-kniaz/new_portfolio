import React from "react";
import { Container, Button, Form, Row, Col } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import FormBuilder from "components/layout/component/form-builder/FormBuilder";
import { successToast, failureToast } from "utils/toastify/toastify";

class AboutCMS extends React.Component {
  componentDidMount() {
    const {
      aboutCMS: { aboutCMSData },
      initialize
    } = this.props;
    // pl initial values
    const plInitialValue = aboutCMSData.pl.reduce((acc, item) => {
      acc[`${item.field}`] = item.text;
      return acc;
    }, {});
    //
    // eng initial values
    const engInitialValue = aboutCMSData.eng.reduce(
      (acc, item) => {
        acc[`${item.field}`] = item.text;
        return acc;
      },
      {}
    );
    //
    const mergerdInitialValues = { ...plInitialValue, ...engInitialValue };
    initialize(mergerdInitialValues);
  }

  submitValue = values => {
    const {
      updateAboutCMS,
      aboutCMS: {
        aboutCMSData: { aboutCMSDataId }
      }
    } = this.props;

    const data = {...values }
    updateAboutCMS(data, aboutCMSDataId)
    .then(()=>successToast('Fields have been updated'))
    .catch(()=>failureToast('Error'))
  };
  renderFieldsPL = () => {
    const {
      aboutCMS: { aboutCMSData }
    } = this.props;
    return aboutCMSData.pl.map(elem => {
      return (
        <Field
          key={elem._id}
          label={elem.label}
          type="textarea"
          name={`${elem.field}`}
          component={FormBuilder}
        />
      );
    });
  };
  renderFieldsENG = () => {
    const {
      aboutCMS: { aboutCMSData }
    } = this.props;
    return aboutCMSData.eng.map(elem => {
      return (
        <Field
          key={elem._id}
          label={elem.label}
          type="textarea"
          name={`${elem.field}`}
          component={FormBuilder}
        />
      );
    });
  };

  render() {
    const {
      aboutCMS: { aboutCMSData },
      handleSubmit
    } = this.props;
    return (
      <Container className="About-CMS">
        {aboutCMSData && (
          <Form onSubmit={handleSubmit(this.submitValue)}>
            <h3 className="About-CMS__title">About Section CMS</h3>
            <Row className="About-CMS__row">
              <Col md="6" xs="12" className="About-CMS__pl">
                {this.renderFieldsPL()}
              </Col>
              <Col md="6" xs="12" className="About-CMS__cro">
                {this.renderFieldsENG()}
              </Col>
              <Col xs="12">
                <Button outline color="success">Submit</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Container>
    );
  }
}
export default reduxForm({
  form: "about-cms"
})(AboutCMS);
