import React from "react";
import { Row, Container } from "reactstrap";
import Project from "components/projects/component/Project";

class ProjectList extends React.Component {
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
            {projects &&
              projects
                .map(elem => {
                  return <>{!elem.hidden && <Project key={elem._id} {...elem} />}</>
                })
              }
          </Row>
        </Container>
      </section>
    );
  }
}
export default ProjectList;
