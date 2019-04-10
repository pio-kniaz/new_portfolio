import React from 'react';
import Particles from 'react-particles-js';
import { particleOption } from 'data/particles/particlesData';
import NavigationContainer from 'components/layout/container/NavigationContainer';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

const MainLayout = (props) => {
  MainLayout.propTypes = {
    children: PropTypes.object.isRequired,
    adminPanel: PropTypes.bool,
  };
  MainLayout.defaultProps = {
    adminPanel: false,
  };

  const { children, adminPanel } = props;
  return (
    <>
      <ToastContainer />
      {!adminPanel && <Particles className="Particles" params={particleOption} />}
      <div className="MainLayout">
        <NavigationContainer />
        {children}
      </div>
    </>
  );
};
export default MainLayout;
