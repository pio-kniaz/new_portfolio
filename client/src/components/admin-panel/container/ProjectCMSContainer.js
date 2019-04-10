import { connect } from 'react-redux';
import ProjectCMS from 'components/admin-panel/component/ProjectCMS/ProjectCMS';
import { getProjectsCMS, addNewProject, showOrHideProject } from 'components/admin-panel/actions';

const mapStateToProps = state => ({
  projectsCMS: state.adminPanel.projectsCMS.projects,
});
const ProjectCMSContainer = connect(mapStateToProps, { getProjectsCMS, addNewProject, showOrHideProject })(ProjectCMS);
export default ProjectCMSContainer;
