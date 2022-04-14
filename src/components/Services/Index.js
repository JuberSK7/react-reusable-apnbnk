import React from "react";
import Pic1 from "../../Images/pic1.png";
import Pic2 from "../../Images/pic2.png";
import Pic3 from "../../Images/pic3.png";
import {
  ServiceContainer,
  ServiceH1,
  ServiceWrapper,
  ServiceCart,
  ServiceIcon,
  ServiceH2,
  ServiceP,
} from "./ServiceElement";
const Service = () => {
  return (
    <ServiceContainer>
      <ServiceH1>Our Services</ServiceH1>
      <ServiceWrapper>
        <ServiceCart>
          <ServiceIcon src={Pic1} />
          <ServiceH2>Apna Mortgage Loan</ServiceH2>
          <ServiceP>
            {" "}
            Financial requirement of outside loan/Business Expansion/Working
            capital
          </ServiceP>
        </ServiceCart>

        <ServiceCart>
          <ServiceIcon src={Pic2} />
          <ServiceH2>Vehicle Loan</ServiceH2>
          <ServiceP>
            For purchase of new / second hand Vehicle for own use or for
            commercial use
          </ServiceP>
        </ServiceCart>

        <ServiceCart>
          <ServiceIcon src={Pic3} />
          <ServiceH2>Term Deposit</ServiceH2>
          <ServiceP>
            Savings kept for a fixed period of end. The the deposit is decided
            at the time
          </ServiceP>
        </ServiceCart>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Service;
