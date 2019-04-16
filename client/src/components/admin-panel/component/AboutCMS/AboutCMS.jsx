import React from 'react';
import {
  Container, Button, Form, Row, Col,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import FormBuilder from 'components/layout/component/form-builder/FormBuilder';
import { successToast, failureToast } from 'utils/toastify/toastify';
import PropTypes from 'prop-types';

class AboutCMS extends React.Component {
  static propTypes = {
    aboutCMS: PropTypes.object.isRequired,
    initialize: PropTypes.func.isRequired,
    updateAboutCMS: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      aboutCMS: { aboutCMSData },
      initialize,
    } = this.props;
    // pl initial values
    const plInitialValue = aboutCMSData.pl.reduce((acc, item) => {
      acc[`${item.field}`] = item.text;
      return acc;
    }, {});
    //
    // eng initial values
    const engInitialValue = aboutCMSData.eng.reduce((acc, item) => {
      acc[`${item.field}`] = item.text;
      return acc;
    }, {});
    //
    const mergerdInitialValues = { ...plInitialValue, ...engInitialValue };
    initialize(mergerdInitialValues);
  }

  submitValue = (values) => {
    const {
      updateAboutCMS,
      aboutCMS: {
        aboutCMSData: { aboutCMSDataId },
      },
    } = this.props;

    const data = { ...values };
    updateAboutCMS(data, aboutCMSDataId)
      .then(() => successToast('Fields have been updated'))
      .catch(() => failureToast('Error'));
  };

  renderFieldsPL = () => {
    const {
      aboutCMS: { aboutCMSData },
    } = this.props;
    return aboutCMSData.pl.map(elem => (
      <Field
        key={elem._id}
        label={elem.label}
        type="textarea"
        name={`${elem.field}`}
        component={FormBuilder}
      />
    ));
  };

  renderFieldsENG = () => {
    const {
      aboutCMS: { aboutCMSData },
    } = this.props;
    return aboutCMSData.eng.map(elem => (
      <Field
        key={elem._id}
        label={elem.label}
        type="textarea"
        name={`${elem.field}`}
        component={FormBuilder}
      />
    ));
  };

  render() {
    const {
      aboutCMS: { aboutCMSData },
      handleSubmit,
    } = this.props;
    return (
      <Container className="About-CMS">
        <h3 className="About-CMS__title">About Section CMS</h3>
        <div className="AdminPanel__outline">
          {aboutCMSData && (
            <Form onSubmit={handleSubmit(this.submitValue)}>
              <Row>
                <Col md="18" xs="36" className="About-CMS__pl">
                  {this.renderFieldsPL()}
                </Col>
                <Col md="18" xs="36" className="About-CMS__cro">
                  {this.renderFieldsENG()}
                </Col>
                <Col xs="36">
                  <Button outline color="success">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </div>
      </Container>
    );
  }
}
export default reduxForm({
  form: 'about-cms',
})(AboutCMS);
