import React from "react";
import Particles from "react-particles-js";
import { particleOption } from "data/particles/particlesData";
import NavigationContainer from "components/layout/container/NavigationContainer";
import { ToastContainer } from 'react-toastify';
const MainLayout = props => {
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
