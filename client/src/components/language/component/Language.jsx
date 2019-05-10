import React from 'react';
import PropTypes from 'prop-types';

const Language = (props) => {
  Language.propTypes = {
    swichLanguageToPl: PropTypes.func.isRequired,
    swichLanguageToEng: PropTypes.func.isRequired,
    currentLanguage: PropTypes.string.isRequired,
  };

  const { swichLanguageToPl, swichLanguageToEng, currentLanguage } = props;
  return (
    <div className="Language">
      <span className={`${currentLanguage}` === 'pl' ? 'Language__pl Language--active' : 'Language__pl'} onClick={swichLanguageToPl} color="warning">PL</span>
      <span className={`${currentLanguage}` === 'eng' ? 'Language__eng Language--active' : 'Language__eng'} onClick={swichLanguageToEng} color="danger">ENG</span>
    </div>
  );
};
export default Language;
