import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import LanguageContainer from 'components/language/container/LanguageContainer';

const Navigation = props => {
  const {
    logOutUser,
    currentUser: { userData }
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
            About
          </NavLink>
        </li>
        <li className="Navigation__li">
          <NavLink
            activeClassName="Navigation__a--active"
            className="Navigation__a btn"
            exact
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="Navigation__li">
          <NavLink
            activeClassName="Navigation__a--active"
            className="Navigation__a btn"
            exact
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li className="Navigation__li">
          <LanguageContainer/>
        </li>
        {userData && (
          <li className="Navigation__li">
            <FontAwesomeIcon
              onClick={logOutUser}
              icon={faSignOutAlt}
              color="#b1ff1e"
              size="lg"
            />
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
