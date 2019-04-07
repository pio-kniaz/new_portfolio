import { connect } from 'react-redux';
import ProjectList from "components/projects/component/ProjectList";
import * as actions from "components/projects/actions";
const mapStateToProps = (state) => {
  return {
    projects: state.projects.projectsData
  }
}
const ProjectContainer = connect(mapStateToProps, { ...actions })(ProjectList)
export default ProjectContainer;
