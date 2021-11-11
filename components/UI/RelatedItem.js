import React from 'react'
import Link from 'next/link'
import styled from "styled-components";

const Related = styled.div`
  margin: 5%;
  display: grid;
  grid-template-columns: 30% 70%;
  border: 1px solid grey;
  padding: 3%;
`;

const RelatedItem = ({img, name, price, link}) => {
    return (
      <Link href={`/products/${link}`}>
        <a>
          <Related>
            <img src={img} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>$ {price}</p>
            </div>
          </Related>
        </a>
      </Link>
    );
}

export default RelatedItem
