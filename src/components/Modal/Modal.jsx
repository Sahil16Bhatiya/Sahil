import React from "react";

import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { ModalCard, ModalLink, Overlay } from "../styles/Modal.styled";
const Modal = ({ toggleHandler }) => {
  return (
    <>
      <OverlayBackground toggleHandler={toggleHandler} />
      <ModalCard>   
Welcome to My Portfolio. I am Sahil Bhatiya, a Full-Stack Developer.
       
      </ModalCard>
    </>
  );
};

const OverlayBackground = ({ toggleHandler }) => {
  return <Overlay onClick={toggleHandler} />;
};

export default Modal;
