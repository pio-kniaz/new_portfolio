import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectCustom = ({ content, icon, className }) => (
  <Col
    className={`Projects__col Projects__${className}`}
    lg="12"
    md="12"
    sm="36"
  >
    <div
      className={`Projects__box Projects__box--${className}`}
    >
      <div className="Projects__customer-content">
        <p>{content}</p>
        {
          icon && (
            <NavLink to="/contact">
              <FontAwesomeIcon className="Projects__customer--plus" icon={faPlusCircle} />
            </NavLink>
          )
        }
      </div>
    </div>
  </Col>
);

ProjectCustom.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string.isRequired,
};
ProjectCustom.defaultProps = {
  icon: false,
};
export default ProjectCustom;
