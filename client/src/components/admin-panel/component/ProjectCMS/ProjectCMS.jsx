import React from 'react';
import Project from 'components/projects/component/Project';
import { Row, Container, Col } from 'reactstrap';
import ProjectNewCMS from 'components/admin-panel/component/ProjectCMS/ProjectNewCMS';
import PropTypes from 'prop-types';
import api from 'api/api';

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
        <div className="AdminPanel__outline">
          <ProjectNewCMS addNewProjectAction={addNewProject} />
          <Row className="Projects__row">
            {projectsCMSData && !projectsCMSReqestFailure
              && projectsCMSData
                .map(elem => (
                  <Col
                    key={elem._id}
                    lg="12"
                    md="12"
                    sm="36"
                    className="Projects__col"
                  >
                    <div
                      className="Projects__box Projects__box--no-hover"
                      style={{
                        backgroundImage: `url(${api._baseURL}/project/${elem._id}/image)`,
                      }}
                    >
                      <Project
                        editable
                        showOrHideProject={showOrHideProject}
                        {...elem}
                      />

                    </div>
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
