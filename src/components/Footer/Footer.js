import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>Get in Touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:sahilbhatiya90@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:+639951076206">+91 9313121066</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/Sahil16Bhatiya"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/sahil-bhatiya-140175219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://www.instagram.com/_bhatiya_sahil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Don’t let yesterday take up too much of today.</ContactHeader>
          <ContactLink href="tel:+91 9313121066">
            sahilbhatiya90@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small
            href="https://github.com/Sahil16Bhatiya"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sahil Bhatiya
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
