import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
const Navigation = props => {
  console.log(props, "from navigation");
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
            className="Navigation__a btn-outline-primary btn"
            exact
            to="/"
          >
            About
          </NavLink>
        </li>
        <li className="Navigation__li">
          <NavLink
            activeClassName="Navigation__a--active"
            className="Navigation__a btn-outline-primary btn"
            exact
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="Navigation__li">
          <NavLink
            activeClassName="Navigation__a--active"
            className="Navigation__a btn-outline-primary btn"
            exact
            to="/contact"
          >
            Contact
          </NavLink>
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
