import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhp,
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

const Project = (props) => {
  Project.propTypes = {
    editable: PropTypes.bool.isRequired,
  };
  const { editable, ...elem } = props;
  console.log(props, 'props');
  return (
    <Col key={elem._id} lg="12" md="12" sm="36" className="Projects__box">
      <h3>{elem.name}</h3>
      {editable && <div>{elem.hidden ? <span>Hide</span> : <span>Show</span> }</div>}
      <div className="Projects__tech">
        {elem.technologies.map((obj, i) => (
          <div key={i}>
            {obj === 'js' && <FontAwesomeIcon size="2x" icon={faJs} />}
            {obj === 'react' && <FontAwesomeIcon size="2x" icon={faReact} />}
            {obj === 'php' && <FontAwesomeIcon size="2x" icon={faPhp} />}
            {obj === 'html' && <FontAwesomeIcon size="2x" icon={faHtml5} />}
            {obj === 'css' && <FontAwesomeIcon size="2x" icon={faCss3} />}
          </div>
        ))
        }
      </div>
    </Col>
  );
};
export default Project;
