import React from 'react'
import Image from 'next/image';
import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const HeroHead = styled.h1`
    margin: 25%;
    color: white;
    font-size: 6vh;
    font-style: italic;
    letter-spacing: 5px;
    position: relative;
    line-height: .8;
    font-weight: bold;
`

const HeroSpan = styled.span`
  color: #ffaf19;
  margin-left: 5%;
`;

const ShopButton = styled.button`
  position: relative;
  padding: 4% 9%;
  border: 3px solid #FFAF19;
  color: white;
  letter-spacing: 4px;
  font-size: 3vh;
  background-color: black;
`;

const Hero = () => {
    return (
      <>
        <HeroContainer>
          <Image
            alt="Runner"
            src="/runner.jpg"
            layout="fill"
            //   objectFit="cover"
            quality={100}
          />
          <div className="center">
            <HeroHead>
              DUNK <br />
              <HeroSpan>SUPPLEMENTS</HeroSpan>
            </HeroHead>
          </div>
          <div className="center">
            <ShopButton className="center">
              {" "}
              <a href="#shop">SHOP NOW</a>
            </ShopButton>
          </div>
        </HeroContainer>
      </>
    );
}

export default Hero
