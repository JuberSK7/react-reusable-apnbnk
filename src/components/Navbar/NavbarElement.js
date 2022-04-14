import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-center: center;
  height: 80px;
  top: 0;
  z-index: 10;
  background-color: transparent;
  position: sticky;
  font-size: 1rem;
  margin-top: -80px;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-flex: start;
  color: #fff;
  cursor: pointer;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 780px) {
    display: block;
    color: #fff;
    position: absolute;
    cursor: pointer;
    font-size: 1.8rem;
    top: 22px;
    right: 14px;
    transform: translate(-100, 60%);
  }
`;
export const FaBars = styled.div``;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -24px;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;
export const NavItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  height: 100%;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  background: #01bf71;
  padding: 10px 22px;
  color: #010606;
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  font-size: 16px;
  text-decoration: none;
  transition: all 0s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #010606;
    transition: all 0s ease-in-out;
  }
`;
