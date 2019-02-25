import React from "react";
import Particles from "react-particles-js";
import { particleOption } from "data/particles/particlesData"
const MainLayout = props => {
  const { children } = props;
  return (
    <Particles
			className="MainLayout"
      params={particleOption}
    >
      {children}
    </Particles>
  );
};
export default MainLayout;
