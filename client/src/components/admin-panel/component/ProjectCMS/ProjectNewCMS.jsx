import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Row, Col, Form, Button, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import FormBuilder from 'components/layout/component/form-builder/FormBuilder';
import { successToast, failureToast } from 'utils/toastify/toastify';
import PropTypes from 'prop-types';

const availableTechnologies = [
  'react',
  'js',
  'php',
  'css',
  'node',
  'express',
  'mongodb',
  'redux',
];
class ProjectNewCMS extends React.Component {
  state = {
    addNewProjectModal: false,
  }

  static propTypes = {
    addNewProjectAction: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  toggleModalAddNewProject = () => {
    this.setState(prevState => ({
      addNewProjectModal: !prevState.addNewProjectModal,
    }));
  }

  renderCheckboxes = () => (
    <Row className="ProjectCMS__add-new">
      <Col xs="36">
        <h3 className="mb-4">Technologies</h3>
      </Col>
      {availableTechnologies.map(elem => (
        <Col key={elem} xs="12">
          <Field
            label={elem}
            type="checkbox"
            name={`technologies_${elem}`}
            component={FormBuilder}
          />
        </Col>
      ))}
    </Row>
  );

  addNewProject = (values) => {
    const { addNewProjectAction } = this.props;
    if (values) {
      const filterTechnologies = Object.keys(values).filter(key => key.includes('technologies'));
      const technologies = filterTechnologies.map(elem => elem.split('_')[1]);
      const newProjectData = {
        name: values.projectName,
        url: values.url,
        technologies,
      };
      addNewProjectAction(newProjectData).then(() => {
        successToast('New Project has been added');
        this.toggleModalAddNewProject();
      })
        .catch(() => failureToast('Unable to add new project'));
    }
  };

  renderAddNewProjectForm = () => {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.addNewProject)}>
        <Row fluid noGutters className="ProjectCMS__text-inputs">
          <Col xs="36">
            <Field
              label="Project Name"
              type="text"
              name="projectName"
              component={FormBuilder}
            />
          </Col>
          <Col xs="36">
            <Field
              label="URL"
              type="text"
              name="url"
              component={FormBuilder}
            />
          </Col>
        </Row>
        <Row fluid noGutters className="ProjectCMS__text-inputs">
          {this.renderCheckboxes()}
          <Col xs="36">
            <Button outline color="success">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };

  render() {
    const { addNewProjectModal } = this.state;
    return (
      <>
        <Modal isOpen={addNewProjectModal} toggle={this.toggleModalAddNewProject}>
          <ModalHeader toggle={this.toggleModalAddNewProject}>Add new project</ModalHeader>
          <ModalBody>
            {this.renderAddNewProjectForm()}
          </ModalBody>
        </Modal>
        <Row>
          <Col xs="36">
            <Button size="lg" onClick={this.toggleModalAddNewProject} outline color="success">
              Add New Project
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}
export default reduxForm({
  form: 'addNewProject',
})(ProjectNewCMS);
