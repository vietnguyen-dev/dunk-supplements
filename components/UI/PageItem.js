import React from 'react'
import Link from 'next/link'
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

const PageItem = ({img, name, price, description, link}) => {
    return (
      <Link href={`/products/${link}`}> 
      <a>
        <Card>
          <ItemContainer>
            <img src={img} alt={description} />
            <TextContainer>
              <Title>{name}</Title>
              <Price>$ {price}</Price>
              {description}
            </TextContainer>
          </ItemContainer>
        </Card>
        </a>
      </Link>
    );
}

export default PageItem
