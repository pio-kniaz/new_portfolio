import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt, faUser, faEnvelope, faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Navigation extends React.Component {
  state = {
    redirect: false,
  }

  static propTypes = {
    logOutUser: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
  };

  logOutAndRedirect = () => {
    const { logOutUser } = this.props;
    logOutUser();
    this.setState({ redirect: true });
  }

  render() {
    const {
      currentUser: { userData },
    } = this.props;
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/" />;
    return (
      <nav className="Navigation">
        <ul className="Navigation__ul">
          <li className="Navigation__li">
            <NavLink
              activeClassName="Navigation__a--active"
              className="Navigation__a btn"
              exact
              to="/"
            >
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </li>
          <li className="Navigation__li">
            <NavLink
              activeClassName="Navigation__a--active"
              className="Navigation__a btn"
              exact
              to="/projects"
            >
              <FontAwesomeIcon icon={faBriefcase} />
            </NavLink>
          </li>
          <li className="Navigation__li">
            <NavLink
              activeClassName="Navigation__a--active"
              className="Navigation__a btn"
              exact
              to="/contact"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
          </li>
          {userData && (
            <li
              className="Navigation__li"
              style={{
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon
                onClick={this.logOutAndRedirect}
                icon={faSignOutAlt}
                color="#fff"
                size="lg"
              />
            </li>
          )}
        </ul>
      </nav>
    );
  }
}
export default Navigation;
