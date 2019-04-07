import React from "react";
import { Row, Container } from "reactstrap";
import Project from "components/projects/component/Project";

class ProjectList extends React.Component {
  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    let groupSize = 3;
    const { projects } = this.props;
    return (
      <section className="Projects">
        <Container>
          <h2 className="Global__title">Projects</h2>
          {projects &&
            projects
              .map(elem => {
                return <Project {...elem} />;
              })
              .reduce((acc, element, index) => {
                index % groupSize === 0 && acc.push([]);
                acc[acc.length - 1].push(element);
                return acc;
              }, [])
              .map((rowContent, index) => {
                return (
                  <Row className="Projects__wrapper" key={index}>
                    {rowContent}
                  </Row>
                );
              })}
        </Container>
      </section>
    );
  }
}
export default ProjectList;
