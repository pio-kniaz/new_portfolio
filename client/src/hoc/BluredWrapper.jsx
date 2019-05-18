import React from 'react';

const BluredWrapper = WrappedComponent => props => (
  <div className="Blur">
    <WrappedComponent {...props} />
  </div>
);
export default BluredWrapper;
