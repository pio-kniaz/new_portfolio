import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <div className="Loader">
       <Spinner className="Loader__spinner" style={{ width: '5rem', height: '5rem' }} />
    </div>
  )
};

export default Loader;
