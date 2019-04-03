import React from 'react';
import { Button } from 'reactstrap';
const Language = (props) => {
  const { swichLanguageToPl , swichLanguageToEng } = props;
  return (
    <div className="d-flex">
      <Button onClick={swichLanguageToPl} color="warning">PL</Button>
      <Button onClick={swichLanguageToEng} color="danger">ENG</Button>
    </div>
  )
}
export default Language;
