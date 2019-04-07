import React from "react";
import Project from "components/projects/component/Project";
import { Row, Container } from "reactstrap";
import ProjectNewCMS from "components/admin-panel/component/ProjectCMS/ProjectNewCMS";

class ProjectCMS extends React.Component {
  componentDidMount() {
    const { getProjectsCMS } = this.props;
    getProjectsCMS();
  }
  render() {
    let groupSize = 3;
    console.log(this.props, "from project cms");
    const {
      projectsCMS: {
        projectsCMSData,
        projectsCMSReqest,
        projectsCMSReqestFailure
      },
      addNewProject
    } = this.props;
    return (
      <Container>
        <h2 className="Global__title">Projects CMS</h2>
        <div className="AdminPanel__outline">
          <ProjectNewCMS addNewProjectAction={addNewProject} />
          {projectsCMSData &&
            projectsCMSData
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
        </div>
      </Container>
    );
  }
}
export default ProjectCMS;
