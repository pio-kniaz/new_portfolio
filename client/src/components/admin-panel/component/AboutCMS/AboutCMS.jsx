import React from 'react';
import {
  Container, Button, Form, Row, Col, TabContent, TabPane,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import FormBuilder from 'components/layout/component/form-builder/FormBuilder';
import { successToast, failureToast } from 'utils/toastify/toastify';
import PropTypes from 'prop-types';

class AboutCMS extends React.Component {
    state = {
      activeTab: '1',
    };

  static propTypes = {
    aboutCMS: PropTypes.object.isRequired,
    initialize: PropTypes.func.isRequired,
    updateAboutCMS: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    getAboutCMS: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      getAboutCMS,
    } = this.props;
    getAboutCMS().then(() => {
      this.initializeData();
    });
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  initializeData = () => {
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
      <Col
        key={elem._id}
        md="18"
        xs="36"
      >
        <Field
          label={elem.label}
          type="textarea"
          name={`${elem.field}`}
          component={FormBuilder}
        />
      </Col>
    ));
  };

  renderFieldsENG = () => {
    const {
      aboutCMS: { aboutCMSData },
    } = this.props;
    return aboutCMSData.eng.map(elem => (
      <Col
        key={elem._id}
        md="18"
        xs="36"
      >
        <Field
          label={elem.label}
          type="textarea"
          name={`${elem.field}`}
          component={FormBuilder}
        />
      </Col>
    ));
  };

  render() {
    const {
      aboutCMS: { aboutCMSData },
      handleSubmit,
    } = this.props;
    const { activeTab } = this.state;
    return (
      <Container className="About-CMS">
        <div tabs="true" className="About-CMS__tabs-nav">
          <div>
            <Button
              className={`${activeTab}` === '1'
                ? 'btn__outline btn__outline--lg btn__outline--active'
                : 'btn__outline btn__outline--lg'}
              onClick={() => { this.toggle('1'); }}
            >
              PL
            </Button>
          </div>
          <div>
            <Button
              className={`${activeTab}` === '2'
                ? 'btn__outline btn__outline--lg btn__outline--active'
                : 'btn__outline btn__outline--lg'}
              onClick={() => { this.toggle('2'); }}
            >
              ENG
            </Button>
          </div>
        </div>
        <div className="AdminPanel__outline">
          {aboutCMSData && (
            <Form onSubmit={handleSubmit(this.submitValue)}>
              <TabContent className="About-CMS__tab-content" activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col xs="36" className="About-CMS__pl d-flex flex-wrap">
                      {this.renderFieldsPL()}
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col xs="36" className="About-CMS__eng d-flex flex-wrap">
                      {this.renderFieldsENG()}
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
              <Row>
                <Col xs="36">
                  <Button className="btn__gold">
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
