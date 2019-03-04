import { connect } from "react-redux";
import About from "components/about/component/About";
import * as actions from "components/about/actions"
const mapStateToProps = state => ({
  about: state.aboutReducer.about
})
const AboutContainer = connect(mapStateToProps, {...actions} )(About);
export default AboutContainer;
