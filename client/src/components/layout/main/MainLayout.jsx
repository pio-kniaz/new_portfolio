import React from "react";
import Particles from "react-particles-js";
import { particleOption } from "data/particles/particlesData";
import Navigation from "components/layout/navigation/Navigation";

const MainLayout = props => {
  const { children } = props;
  return (
    <div className="MainLayout">
      <Navigation />
      <Particles params={particleOption}>
        {children}
      </Particles>
    </div>
  );
};
export default MainLayout;
