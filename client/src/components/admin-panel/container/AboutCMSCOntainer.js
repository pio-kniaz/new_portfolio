import { connect } from 'react-redux';
import AboutCMS from 'components/admin-panel/component/AboutCMS/AboutCMS';
import { updateAboutCMS, getAboutCMS, logInEnd } from 'components/admin-panel/actions';

const mapStateToProps = state => ({
  aboutCMS: state.adminPanel.aboutCMS.aboutCMS,
});

const AboutCMSContainer = connect(mapStateToProps, { updateAboutCMS, getAboutCMS, logInEnd })(AboutCMS);
export default AboutCMSContainer;
