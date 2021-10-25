import React from 'react'
import styled from "styled-components";

const LogoText = styled.p`
  font-size: 4vh;
  line-height: 0.35;
`;
const LogoSpan = styled.span`
  margin-left: 2%;
  color: #ffaf19;
`;

const LogoContainer = styled.div`
    margin: 1%;
`
const Logo = () => {
    return (
      <LogoContainer>
        <LogoText>D<br/><LogoSpan>S</LogoSpan></LogoText>
      </LogoContainer>
    );
}

export default Logo
