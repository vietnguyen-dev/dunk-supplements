import React from 'react'
import DetailsItem from './DetailsItem'
import styled from 'styled-components'

const DetailsContainer = styled.div`
    border: 1px solid black;
    padding: 3%;
`

const Title = styled.div`
    letter-spacing: 2px;
    font-size: 3vh;
`

const ItemContainer = styled.div`
    margin: 2% 0% 5% 0%;
`

const OrderDetails = ({details}) => {
    // console.log(details)
    return (
      <DetailsContainer>
        <Title>Order Details</Title>
        <ItemContainer>
        {details.line_items.map(item => 
            <DetailsItem 
                key={item.id}
                name={item.name}
                img={item.image.url}
                price={item.line_total.formatted}
                amount={item.quantity}
            /> 
        )}
        </ItemContainer>
        <table>
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td>$ {details.subtotal.formatted}</td>
            </tr>
            <tr>
              <td>Tax:</td>
              <td>$ {details.tax.amount.formatted}</td>
            </tr>
            <tr>
              <td>Shipping:</td>
              <td>$ {details.shipping.price.formatted}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>$ {details.total_due.formatted}</td>
            </tr>
          </tbody>
        </table>
      </DetailsContainer>
    );
}

export default OrderDetails
