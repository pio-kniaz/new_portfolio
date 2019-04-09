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
          <Row className="Projects__row">
            {projectsCMSData &&
              projectsCMSData.map(elem => {
                return <Project editable key={elem._id} {...elem} />;
              })}
          </Row>
        </div>
      </Container>
    );
  }
}
export default ProjectCMS;
