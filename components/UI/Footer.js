import React from 'react'
import Logo from './Logo';
import Image from 'next/image';
import styled from "styled-components";

const Foot = styled.footer`
  background-color: black;
  color: white;
  padding: 2vh 2vw 2vh 2vh;
`;

const Logos = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`

const Socials = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  margin: 0% 5% 0% 5%;
  padding: 3%;
`

const Footer = () => {
    return (
      <Foot>
        <Logos>
          <Logo />
          <Socials>
            <IconContainer>
              <Image
                src="/twitter-32.png"
                height={32}
                width={32}
                alt="link to our official twitter account"
              />
            </IconContainer>
            <IconContainer>
              <Image
                src="/facebook-32.png"
                height={32}
                width={32}
                alt="link to our official twitter account"
              />
            </IconContainer>
            <IconContainer>
              <Image
                src="/instagram-32.png"
                height={32}
                width={32}
                alt="link to our official twitter account"
              />
            </IconContainer>
          </Socials>
        </Logos>
      </Foot>
    );
}

export default Footer
