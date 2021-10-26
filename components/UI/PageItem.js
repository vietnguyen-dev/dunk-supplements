import React from 'react'
import Image from 'next/image'

import Card from './Card';

import styled from "styled-components";

const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 34% 66%;
`

const TextContainer = styled.div`
    padding: 2% 2% 0% 1%;
`

const Title = styled.h4`
    font-weight: bold;
    font-size: 2.5vh;
`

const Price = styled.p`
  font-weight: bold;
  font-size: 2.5vh;
`;

const PageItem = ({img, name, price, description}) => {
    return (
        <Card>
            <ItemContainer>
                <Image 
                    src={img}
                    width={64}
                    height={64}
                    alt={description}
                />
                <TextContainer>
                    <Title>{name}</Title>
                    <Price>$ {price}</Price>
                    <p>{description}</p>
                </TextContainer>
            </ItemContainer>
        </Card>
    )
}

export default PageItem
