import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { motion } from "framer-motion";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">Home</a>
            <a href="/">Products</a>
            <a href="/">ABout us</a>
            <CallButton href="tel:9642183XXX" style={{color:"white"}} className="call-btn">
              9642183XXX
            </CallButton>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 1.4rem;
  z-index: 999;
  justify-content: space-between;
  height: 4rem;
  /* border-bottom:1px solid #CCD6F6; */
  box-shadow: 1px 1px 30px #ccd6f6;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: var(--primary-color);
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    font-size: 65.5%;
    font-weight: 600;
    &:hover {
      color: var(--brand-color);
      /* border-bottom: 1px solid #fdcb6e; */
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
const CallButton = styled.a`
  padding: 10px 10px;
  border-radius: 4px;
  background: var(--primary-color);
`;
