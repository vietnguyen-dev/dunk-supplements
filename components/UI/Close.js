import React from 'react'
import styled from "styled-components";

const ToggleButton = styled.button`
    border: none;
    background-color: white;
`

const Bar = styled.hr`
  width: 8vw;
  border-top: 2px solid black;
  color: black;
  transform: rotateZ(45deg) translateY(7px);
`;
const Bar2 = styled.hr`
  width: 8vw;
  border-top: 2px solid black;
  color: black;
  transform: rotateZ(-45deg) translateY(-7px);
`;

const Close = ({clickEvent}) => {
    return (
        <>
            <ToggleButton onClick={clickEvent}>
                <Bar />
                <Bar2 />
            </ToggleButton>
        </>
    )
}

export default Close
