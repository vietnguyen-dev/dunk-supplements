import React from 'react'
import styled from "styled-components";


//filter: drop-shadow(0 8px 3px black);
const CardDiv = styled.div`
  margin: 5%;
  background: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const Card = ({children}) => {
    return (
        <CardDiv>
            {children}
        </CardDiv>
    )
}

export default Card
