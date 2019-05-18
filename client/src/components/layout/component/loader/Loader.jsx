import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => (
  <div className="Loader">
    <div className="Loader__wrapper">
      <Spinner className="Loader__spinner" style={{ width: '5rem', height: '5rem' }} />
    </div>
  </div>
);

export default Loader;
