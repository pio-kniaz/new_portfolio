import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
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
    <a href={elem.url} target="_blank" rel="noopener noreferrer" className="Projects__item">
      {editable && (
        <>
          {elem.hidden
            ? <span onClick={() => showOrHideProject(elem._id)} className="Projects__toggle"><FontAwesomeIcon icon={faCheck} /></span>
            : <span onClick={() => showOrHideProject(elem._id)} className="Projects__toggle"><FontAwesomeIcon icon={faTimes} /></span>
          }
        </>
      )}
    </a>
  );
};
export default Project;
