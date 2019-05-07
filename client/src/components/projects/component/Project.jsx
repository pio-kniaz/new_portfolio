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
    </>
  );
};
export default Project;
