import React from 'react';
import User from 'components/admin-panel/component/User/User';
import AboutCMSCOntainer from 'components/admin-panel/container/AboutCMSCOntainer';
import ProjectCMSContainer from 'components/admin-panel/container/ProjectCMSContainer';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from 'utils/authorization/setAuthToken';
import PropTypes from 'prop-types';

class AdminPanel extends React.Component {
  state = {
    modalVisible: true,
    cmsDataCompleted: false,
  };

  static propTypes = {
    setCurrentUser: PropTypes.func.isRequired,
    logOutUser: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
    getAboutCMS: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { setCurrentUser, logOutUser, getAboutCMS } = this.props;
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
      const decoded = jwt_decode(token);
      setCurrentUser(decoded);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout user
        logOutUser();
        // Redirect to home
        return (window.location.href = './');
      }
      getAboutCMS().then(() => this.setState({ cmsDataCompleted: true }));
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible,
    }));
  };

  render() {
    const { modalVisible, cmsDataCompleted } = this.state;
    const {
      logIn,
      currentUser: { userData, isLogged },
    } = this.props;
    return (
      <section className="AdminPanel">
        {!userData && !isLogged ? (
          <User
            modalVisible={modalVisible}
            toggle={this.toggle}
            logIn={logIn}
          />
        ) : (
          <>
            <div>{cmsDataCompleted && <AboutCMSCOntainer />}</div>
            <div>
              <ProjectCMSContainer />
            </div>
          </>
        )}
      </section>
    );
  }
}

export default AdminPanel;
