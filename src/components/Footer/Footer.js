import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialIcon,
  SocialIconLink
} from "./FooterElement";

import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Customer Care</FooterLinkTitle>
              <FooterLink to="/signin">Contact Us </FooterLink>
              <FooterLink to="/signin">FAQs </FooterLink>
              <FooterLink to="/signin">Returns & Exchange </FooterLink>
              <FooterLink to="/signin">Terms of Services </FooterLink>
              <FooterLink to="/signin">Privacy Policy </FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Inside Grace Eleyae</FooterLinkTitle>
              <FooterLink to="/signin">Aboute Us</FooterLink>
              <FooterLink to="/signin">GE Magzines </FooterLink>
              <FooterLink to="/signin">Why satin </FooterLink>
              <FooterLink to="/signin">Contact UIs </FooterLink>
              <FooterLink to="/signin">ReportUs </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>My Account</FooterLinkTitle>
              <FooterLink to="/signin">Sign In </FooterLink>
              <FooterLink to="/signin">Registers </FooterLink>
              <FooterLink to="/signin">My Rewards </FooterLink>
              <FooterLink to="/signin">Credit </FooterLink>
              <FooterLink to="/signin">Withdraw</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Explore</FooterLinkTitle>
              <FooterLink to="/signin">Home </FooterLink>
              <FooterLink to="/signin">Aboute </FooterLink>
              <FooterLink to="/signin">Capabilitis</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Account</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">ApnaBank</SocialLogo>
            <WebsiteRight>
              ApnaBank @ {new Date().getFullYear()}All Right Reserves
            </WebsiteRight>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" area-lable="FaceBook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcon>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" area-lable="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcon>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" area-lable="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcon>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" area-lable="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
