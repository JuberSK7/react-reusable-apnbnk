import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Apna Bank</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="about">Aboute</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to="service">Service</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to="signin">Sign-In</NavLinks>
            </NavItems>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="signin">Account</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
