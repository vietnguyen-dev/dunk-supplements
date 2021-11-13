import React from 'react'
import styled from 'styled-components'

const DetailItemContainer = styled.div`
    border: 1px solid grey;
    display: grid;
    grid-template-columns: 20% 40% 20%;
    padding: 2% 0% 2% 0%;
`



const DetailsItem = ({img, price, amount, name}) => {
    return (
      <DetailItemContainer>
        <img src={img} alt={name} />
        <p>{name}</p>
        <div style={{textAlign: `right`}}>
          <p>Amount: {amount}</p>
          <p>$ {price}</p>
        </div>
      </DetailItemContainer>
    );
}

export default DetailsItem
