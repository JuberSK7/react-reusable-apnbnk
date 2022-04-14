import styled from "styled-components";
import { MdArrowForward, MdArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c0c0c;
  position: reletive;
  height: 600px;
  padding: 0 30px;
  z-index: 1;

  &:before {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: "";
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: #232a34;
  -o-object-fit: cover;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  padding: 8px 14px;
  max-width: 1200px;
  z-index: 3;
`;

export const HeroH1 = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  font-size: 24px;
  color: #fff;
  text-align: center;
  max-width: 600px;
  margin-top: 14px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 22px;
`;

export const ArrowForward = styled(MdArrowForward)`
font-size; 20px;
margin-top: 2px;`;

export const ArrowRight = styled(MdArrowRight)`
font-size; 20px;
margin-top: 2px;
`;
