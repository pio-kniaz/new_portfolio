import React from 'react';
import Project from 'components/projects/component/Project';
import { Row, Container, Col } from 'reactstrap';
import ProjectNewCMS from 'components/admin-panel/component/ProjectCMS/ProjectNewCMS';
import PropTypes from 'prop-types';

class ProjectCMS extends React.Component {
  static propTypes = {
    getProjectsCMS: PropTypes.func.isRequired,
    addNewProject: PropTypes.func.isRequired,
    showOrHideProject: PropTypes.func.isRequired,
    projectsCMS: PropTypes.object.isRequired,
  }


  componentDidMount() {
    const { getProjectsCMS } = this.props;
    getProjectsCMS();
  }

  render() {
    console.log(this.props, 'from project cms');
    const {
      projectsCMS: {
        projectsCMSData,
        projectsCMSReqest,
        projectsCMSReqestFailure,
      },
      addNewProject,
      showOrHideProject,
    } = this.props;
    return (
      <Container>
        <h2 className="Global__title">Projects CMS</h2>
        <div className="AdminPanel__outline">
          <ProjectNewCMS addNewProjectAction={addNewProject} />
          <Row className="Projects__row">
            {projectsCMSData
              && projectsCMSData
                .map(elem => (
                  <Col key={elem._id} lg="12" md="12" sm="36" className="Projects__box">
                    <Project
                      editable
                      showOrHideProject={showOrHideProject}
                      {...elem}
                    />
                  </Col>
                ))
            }
          </Row>
        </div>
      </Container>
    );
  }
}
export default ProjectCMS;
