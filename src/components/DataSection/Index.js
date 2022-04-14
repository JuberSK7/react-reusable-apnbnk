import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  SubTilte,
  BtnWrap,
  Img,
  Column2,
  ImgWrap,
} from "./DataElement";
import { Button } from "../ButtonElement";

const DataSection = ({
  lightBg,
  lightText,
  ImgStart,
  topLine,
  id,
  darkTest,
  headline,
  description,
  buttonLeble,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <div>

      
      {/*     /////////  ////////   IMPORT REUSABLE COMPONENT DATA /////////// ///////   */}


      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow ImgStart={ImgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTilte darkTest={darkTest}>{description}</SubTilte>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {" "}
                    {buttonLeble}{" "}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

export default DataSection;
