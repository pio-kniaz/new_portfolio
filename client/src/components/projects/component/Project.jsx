import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faPhp,
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

const Project = (props) => {
  Project.propTypes = {
    editable: PropTypes.bool,
    showOrHideProject: PropTypes.func,
  };
  Project.defaultProps = {
    editable: false,
    showOrHideProject: () => null,
  };

  const { editable, showOrHideProject, ...elem } = props;
  return (
    <>
      <h3>{elem.name}</h3>
      {editable && (
        <>
          {elem.hidden
            ? <span onClick={() => showOrHideProject(elem._id)} className="Projects__toggle"><FontAwesomeIcon icon={faCheck} /></span>
            : <span onClick={() => showOrHideProject(elem._id)} className="Projects__toggle"><FontAwesomeIcon icon={faTimes} /></span>
          }
        </>
      )}
      <div className="Projects__tech">
        <img src="data:image/jpg;base64,"/>
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
    </>
  );
};
export default Project;
