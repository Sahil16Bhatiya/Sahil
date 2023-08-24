import React, { useState } from "react";
import {
  Line,
  Menu,
  NavList,
  NavLogo,
  NavMenuList,
  StyledCTA,
  StyledNavbar,
  StyledNavLinks,
} from "../styles/Navbar.styled";
import logo from "../../assets/logo.gif";
import { animateScroll as scroll } from "react-scroll";
import MobileMenu from "./MobileMenu";
import './navb.css';
import { Background } from "react-parallax";

const ctaStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  textDecoration: 'none',
  borderRadius: '5px',
};


const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Height
  const stickyNavFunction = () => {
    if (window.scrollY >= 510) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", stickyNavFunction);

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  // mobile toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar className={stickyNav ? "sticky" : ""}>
      <div>
        <NavLogo to="/" onClick={toTop} src={logo} alt="logo" className="nlogo" />
      </div>
      <NavMenuList>
        <NavList>
          <StyledNavLinks
            to="home"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Home
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Projects
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            About
          </StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks
            to="playground"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-85.26}
          >
            Playground
          </StyledNavLinks>
        </NavList>
        
      </NavMenuList>
   
      <StyledCTA
        href=" https://sahil16bhatiya.github.io/ChatBot/"
        target="_blank"
        rel="noreferrer"
        style={ctaStyle}
      >

<span>
          <span>
            <svg
              width="10"
              height="16"
              viewBox="0 0 24 24"
              fill="#fff"
            >  
            <path d="M11.999 0c-2.25 0-4.5.06-6.6.21a5.57 5.57 0 0 0-5.19 5.1c-.24 3.21-.27 6.39-.06 9.6a5.644 5.644 0 0 0 5.7 5.19h3.15v-3.9h-3.15c-.93.03-1.74-.63-1.83-1.56-.18-3-.15-6 .06-9 .06-.84.72-1.47 1.56-1.53 2.04-.15 4.2-.21 6.36-.21s4.32.09 6.36.18c.81.06 1.5.69 1.56 1.53.24 3 .24 6 .06 9-.12.93-.9 1.62-1.83 1.59h-3.15l-6 3.9V24l6-3.9h3.15c2.97.03 5.46-2.25 5.7-5.19.21-3.18.18-6.39-.03-9.57a5.57 5.57 0 0 0-5.19-5.1c-2.13-.18-4.38-.24-6.63-.24zm-5.04 8.76c-.36 0-.66.3-.66.66v2.34c0 .33.18.63.48.78 1.62.78 3.42 1.2 5.22 1.26 1.8-.06 3.6-.48 5.22-1.26.3-.15.48-.45.48-.78V9.42c0-.09-.03-.15-.09-.21a.648.648 0 0 0-.87-.36c-1.5.66-3.12 1.02-4.77 1.05-1.65-.03-3.27-.42-4.77-1.08a.566.566 0 0 0-.24-.06z"/>
            </svg>
            Nancy-ChatBot
          </span>
        </span>



      </StyledCTA>


      <StyledCTA
        href="mailto:sahilbhatiya90@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
            </svg>
            get in touch
          </span>
        </span>
      </StyledCTA>

      <Menu onClick={toggle}>
        <Line width="1.5rem" />
        <Line />
        <Line width="1.5rem" ml="0.5rem" />
      </Menu>

      <MobileMenu isOpen={isOpen} toggle={toggle}></MobileMenu>
    </StyledNavbar>
  );
};

export default Navbar;
