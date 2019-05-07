import React from 'react';
import PropTypes from 'prop-types';

const Language = (props) => {
  Language.propTypes = {
    swichLanguageToPl: PropTypes.func.isRequired,
    swichLanguageToEng: PropTypes.func.isRequired,
  };

  const { swichLanguageToPl, swichLanguageToEng } = props;
  return (
    <div className="Language">
      <span className="Language__pl" onClick={swichLanguageToPl} color="warning">PL</span>
      <span className="Language__eng" onClick={swichLanguageToEng} color="danger">ENG</span>
    </div>
  );
};
export default Language;
