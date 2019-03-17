import { connect } from "react-redux";
import Navigation from "components/layout/component/navigation/Navigation";
import { logOutUser } from "components/admin-panel/actions";

const mapStateToProps = state => {
  return {
    currentUser: state.adminPanel.user.user
  };
};
const NavigationContainer = connect(mapStateToProps,{ logOutUser })(Navigation);
export default NavigationContainer;
