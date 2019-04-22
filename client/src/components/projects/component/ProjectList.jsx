import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import Project from 'components/projects/component/Project';
import PropTypes from 'prop-types';
import api from 'api/api';

class ProjectList extends React.Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    projects: PropTypes.array,
  }

  static defaultProps = {
    projects: null,
  }

  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    const { projects } = this.props;
    console.log(projects, 'projects');
    return (
      <section className="Projects">
        <Container>
          <h2 className="Global__title">Projects</h2>
          <Row className="Projects__row">
            {projects
              && projects.filter(elem => elem.hidden === false)
                .map(project => (
                  <Col
                    key={project._id}
                    lg="12"
                    md="12"
                    sm="36"
                    className="Projects__box"
                    style={{
                      backgroundImage: `url(${api._baseURL}/project/${project._id}/image)`,
                    }}
                  >
                    <Project {...project} />
                  </Col>
                ))
            }
          </Row>
        </Container>
      </section>
    );
  }
}
export default ProjectList;
