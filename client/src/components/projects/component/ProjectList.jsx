import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import Project from 'components/projects/component/Project';
import PropTypes from 'prop-types';
import api from 'api/api';
import Loader from 'components/layout/component/loader/Loader';
import BluredWrapper from 'hoc/BluredWrapper';

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
    return (
      <section className="Projects">
        <div className="Skewed">
          <div className="Skewed__layer Skewed__bottom" />
          <div className="Skewed__layer Skewed__top" />
        </div>
        <Container fluid className="Projects__content">
          <Row className="Projects__row">
            {projects
              ? projects.filter(elem => elem.hidden === false)
                .map(project => (
                  <Col
                    key={project._id}
                    lg="12"
                    md="12"
                    sm="36"
                    className="Projects__col"
                  >
                    <div
                      className="Projects__box"
                      style={{
                        backgroundImage: `url(${api._baseURL}/project/${project._id}/image)`,
                      }}
                    >
                      <Project {...project} />

                    </div>
                  </Col>
                ))
              : <Loader />
            }
          </Row>
        </Container>
      </section>
    );
  }
}
export default BluredWrapper(ProjectList);
