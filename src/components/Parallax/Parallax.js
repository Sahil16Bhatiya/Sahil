import React from "react";
import { Parallax } from "react-parallax";
import parralaxImage from "../../assets/kr.jpg";
import { ParallaxContainer, ParallaxText } from "../styles/Parallax.styled";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-500} style={{ width: "100%" }}>
      <ParallaxContainer>
        <ParallaxText>
        Don't wait for the perfect moment.  <br />
        Take the moment and make it perfect.
        </ParallaxText>
      </ParallaxContainer>
    </Parallax>
  );
};

export default ParallaxComponent;
