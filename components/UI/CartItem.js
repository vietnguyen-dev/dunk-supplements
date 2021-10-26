import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Item = styled.div`
    border: 1px solid grey;
    display: flex;
    padding: 3%;
`

const CartItem = ({img, name, price, description}) => {
    return (
        <Item>
            <Image 
                src={img}
                width={300}
                height={225}
                alt={name}
            />
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{description}</p>
            </div>
        </Item>
    )
}

export default CartItem
