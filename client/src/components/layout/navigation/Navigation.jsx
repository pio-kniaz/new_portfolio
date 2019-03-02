import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__ul">
        <li className="Navigation__li">
          <NavLink activeClassName="Navigation__a--active" className="Navigation__a btn-outline-primary btn" exact to="/">About</NavLink>
        </li>
        <li className="Navigation__li">
          <NavLink activeClassName="Navigation__a--active" className="Navigation__a btn-outline-primary btn" exact to="/projects">Projects</NavLink>
        </li>
        <li className="Navigation__li">
          <NavLink activeClassName="Navigation__a--active" className="Navigation__a btn-outline-primary btn" exact to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation;
