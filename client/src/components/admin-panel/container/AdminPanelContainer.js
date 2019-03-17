import { connect } from "react-redux";
import AdminPanel from "components/admin-panel/component/AdminPanel";
import * as actions from "components/admin-panel/actions";
const mapStateToProps = (state) => {
  return {
    currentUser: state.adminPanel.user.user,
  }
}

const AdminPanelContainer = connect(mapStateToProps, { ...actions})(AdminPanel);

export default AdminPanelContainer;
