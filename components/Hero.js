import React from 'react'
import Image from 'next/image';
import styled from "styled-components";

const HeroContainer = styled.div`
  height: 45vh;
  background-color: black;
`;

const HeroHead = styled.h1`
    margin: 20%;
    color: white;
    font-size: 6vh;
    font-style: italic;
    letter-spacing: 5px;
    line-height: .8;
    font-weight: bold;
`

const HeroSpan = styled.span`
  color: #ffaf19;
  margin-left: 5%;
`;

const ShopButton = styled.button`
  padding: 4% 9%;
  border: 3px solid #FFAF19;
  color: white;
  letter-spacing: 4px;
  font-size: 3vh;
  background-color: black;
`;

const ShopLink = styled.a`
  letter-spacing: 3px;
  padding: 0;
`

const Hero = () => {
    return (
      <>
        <HeroContainer>
          <div className="center">
            <HeroHead>
              DUNK <br />
              <HeroSpan>SUPPLEMENTS</HeroSpan>
            </HeroHead>
          </div>
          <div className="center">
            <ShopButton className="center">
              <ShopLink href="#shop">SHOP NOW</ShopLink>
            </ShopButton>
          </div>
        </HeroContainer>
      </>
    );
}

export default Hero
