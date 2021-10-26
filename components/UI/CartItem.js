import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Item = styled.div`
    border: 1px solid grey;
    display: grid;
    grid-template-columns: 30% 70%;
    padding: 2%;
`

const ItemText = styled.div`
    display: grid;
    grid-template-columns: 80% 30%;
    padding: 2%;
`

const Remove = styled.span`
    border-bottom: 1px solid grey;
    margin: 1%;
`

const Operator = styled.div`
    display: flex;
    align-items: right end;
    
`

const OperatorButton = styled.button`
    border: none;
    margin: 3%;
    border-radius: 50%;
    padding: 0;
`

const CartItem = ({img, name, price, amount}) => {
    return (
        <Item>
            <Image 
                src={img}
                width={300}
                height={225}
                alt={name}
            />
            <ItemText>
                <div>
                    <h3>{name}</h3>
                    <p><Remove>Remove</Remove></p>
                </div>
                <div>
                    <p>{price * amount}</p>
                    <Operator>
                        <OperatorButton>_ </OperatorButton>
                        <p>{amount}</p>
                        <OperatorButton>+</OperatorButton>
                    </Operator>
                </div>
            </ItemText>
        </Item>
    )
}

export default CartItem
