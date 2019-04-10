import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Language = (props) => {
  Language.propTypes = {
    swichLanguageToPl: PropTypes.func.isRequired,
    swichLanguageToEng: PropTypes.func.isRequired,
  };

  const { swichLanguageToPl, swichLanguageToEng } = props;
  return (
    <div className="d-flex">
      <Button onClick={swichLanguageToPl} color="warning">PL</Button>
      <Button onClick={swichLanguageToEng} color="danger">ENG</Button>
    </div>
  );
};
export default Language;
