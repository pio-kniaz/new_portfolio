import React from 'react';
import { Collapse, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import User from 'components/admin-panel/component/User/User';
import AboutCMSCOntainer from 'components/admin-panel/container/AboutCMSCOntainer';
import ProjectCMSContainer from 'components/admin-panel/container/ProjectCMSContainer';
import ContactCMSContainer from 'components/admin-panel/container/ContactCMSContainer';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from 'utils/authorization/setAuthToken';
import PropTypes from 'prop-types';

class AdminPanel extends React.Component {
  state = {
    modalVisible: true,
    collapsedSections: [],
  };

  static propTypes = {
    setCurrentUser: PropTypes.func.isRequired,
    logOutUser: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { setCurrentUser, logOutUser } = this.props;
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
        (window.location.href = './');
      }
    }
  }

  openCollapsedSection = (name) => {
    const { collapsedSections } = this.state;
    if (collapsedSections.includes(name)) {
      this.setState({
        collapsedSections: collapsedSections.filter(elem => elem !== name),
      });
    } else {
      this.setState({
        collapsedSections: [...collapsedSections, name],
      });
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible,
    }));
  };

  render() {
    const { modalVisible, collapsedSections } = this.state;
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
            <div>
              <Container>
                <h3 className="About-CMS__title">
                  About Section CMS
                  <FontAwesomeIcon
                    style={{ marginLeft: '20px' }}
                    icon={collapsedSections.includes('aboutCMS') ? faAngleDown : faAngleUp}
                    onClick={() => this.openCollapsedSection('aboutCMS')}
                  />
                </h3>
                <Collapse isOpen={collapsedSections.includes('aboutCMS')}>
                  <AboutCMSCOntainer />
                </Collapse>
              </Container>
              <Container>
                <h3 className="About-CMS__title">
                  Projects Section CMS
                  <FontAwesomeIcon
                    style={{ marginLeft: '20px' }}
                    icon={collapsedSections.includes('projectsCMS') ? faAngleDown : faAngleUp}
                    onClick={() => this.openCollapsedSection('projectsCMS')}
                  />
                </h3>
                <Collapse isOpen={collapsedSections.includes('projectsCMS')}>
                  <ProjectCMSContainer />
                </Collapse>
              </Container>
              <Container>
                <h3 className="About-CMS__title">
                  Contact Section CMS
                  <FontAwesomeIcon
                    style={{ marginLeft: '20px' }}
                    icon={collapsedSections.includes('contactCMS') ? faAngleDown : faAngleUp}
                    onClick={() => this.openCollapsedSection('contactCMS')}
                  />
                </h3>
                <Collapse isOpen={collapsedSections.includes('contactCMS')}>
                  <ContactCMSContainer />
                </Collapse>
              </Container>
            </div>
          </>
        )}
      </section>
    );
  }
}

export default AdminPanel;
