import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100% 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  height: 860px;
  max-width: 1100px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  z-index: 1;
`;
export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ ImgStart }) =>
    ImgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ ImgStart }) =>
      ImgStart ? `'col1' 'col2'` : `'col1 col1'  'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  margin-bottom: 10px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0 15px;
  margin-bottom: 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 588px;
  padding-top: 0;
  padding-bottom: 40px;
`;

export const TopLine = styled.p`
  margin-bottom: 36px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 1.4px;
  color: #01bf71;
  text-transform: uppercase;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "white" : "black")};

  @media and screen (max-width: 480px) {
    font-size: 38px;
  }
`;

export const SubTilte = styled.p`
  margin-bottom: 35px;
  max-width: 440px;
  line-height: 24px;
  font-size: 18px;
  color: ${({ darkTest }) => (darkTest ? "#010606" : "#fff")};
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-weight: 555px;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
  margin: 0 0 10px 0;
`;
