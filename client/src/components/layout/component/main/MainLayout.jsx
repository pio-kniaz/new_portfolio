import React from "react";
import Particles from "react-particles-js";
import { particleOption } from "data/particles/particlesData";
import NavigationContainer from "components/layout/container/NavigationContainer";

const MainLayout = props => {
  const { children } = props;
  return (
    <>
      <Particles className="Particles" params={particleOption} />
      <div className="MainLayout">
        <NavigationContainer />
        {children}
      </div>
    </>
  );
};
export default MainLayout;
