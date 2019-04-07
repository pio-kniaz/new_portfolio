import { connect } from "react-redux";
import ProjectCMS from "components/admin-panel/component/ProjectCMS/ProjectCMS";
import { getProjectsCMS, addNewProject } from 'components/admin-panel/actions';
const mapStateToProps = state => {
  return {
    projectsCMS: state.adminPanel.projectsCMS.projects
  }
}
const ProjectCMSContainer = connect(mapStateToProps,{ getProjectsCMS, addNewProject })(ProjectCMS);
export default ProjectCMSContainer;
