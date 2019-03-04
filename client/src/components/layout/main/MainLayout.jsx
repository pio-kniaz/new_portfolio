import React from "react";
import Particles from "react-particles-js";
import { particleOption } from "data/particles/particlesData";
import Navigation from "components/layout/navigation/Navigation";

const MainLayout = props => {
  const { children } = props;
  return (
    <>
      <Particles className="Particles" params={particleOption} />
      <div className="MainLayout">
        <Navigation />
        {children}
      </div>
    </>
  );
};
export default MainLayout;
