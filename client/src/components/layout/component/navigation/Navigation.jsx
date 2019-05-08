import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt, faUser, faEnvelope, faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Navigation = (props) => {
  Navigation.propTypes = {
    logOutUser: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
  };
  const {
    logOutUser,
    currentUser: { userData },
  } = props;
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
          <li className="Navigation__li">
            <FontAwesomeIcon
              onClick={logOutUser}
              icon={faSignOutAlt}
              color="#fff"
              size="lg"
            />
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
