import React from 'react';
import { Row, Container } from 'reactstrap';
import Project from 'components/projects/component/Project';
import PropTypes from 'prop-types';

class ProjectList extends React.Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    const { projects } = this.props;
    return (
      <section className="Projects">
        <Container>
          <h2 className="Global__title">Projects</h2>
          <Row className="Projects__row">
            {projects
              && projects
                .map(elem => <>{!elem.hidden && <Project key={elem._id} {...elem} />}</>)
            }
          </Row>
        </Container>
      </section>
    );
  }
}
export default ProjectList;
