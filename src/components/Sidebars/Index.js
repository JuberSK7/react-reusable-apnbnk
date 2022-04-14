import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarMenu,
  SidebarWrapper,
  SideBarBtnWrap,
  SideBarRouter,
} from "./SidebarElement";

///////////// //////////  SIDE-BAR TOGGLE FUNCTIONS   ///////// //////////////////

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            Aboute
          </SideBarLink>

          <SideBarLink to="discover" onClick={toggle}>
            discover
          </SideBarLink>

          <SideBarLink to="service" onClick={toggle}>
            Service
          </SideBarLink>

          <SideBarLink to="signin" onClick={toggle}>
            Sing-In
          </SideBarLink>
        </SideBarMenu>
        <SideBarBtnWrap>
          <SideBarRouter to="signin">SingIn</SideBarRouter>
        </SideBarBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
