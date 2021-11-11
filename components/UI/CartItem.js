import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import commerce from '../../lib/commerce'
import { useCartState, useCartDispatch } from "../../context/cart-context";

const Item = styled.div`
    border: 1px solid grey;
    display: grid;
    grid-template-columns: 25% 75%;
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
    padding: 0;
    width: 25px;
`

const CartItem = ({id, img, name, price, amount}) => {
    const validPrice = parseFloat(price)
    const {setCart} = useCartDispatch()

    const handleUpdateCart = ({cart}) => setCart(cart)

    const increment = () =>{
        commerce.cart.update(id, {quantity: amount + 1}).then(handleUpdateCart);
    }

     const decrement = () => {
      (amount > 1 )
        ? commerce.cart.update(id, { quantity: amount - 1 }).then(handleUpdateCart)
        : remove();
     };

     const remove = () => {
        commerce.cart.remove(id).then(handleUpdateCart);
     }

    return (
      <Item>
        <img src={img} alt={name} />
        <ItemText>
          <div>
            <p>{name}</p>
            <p>
              <Remove onClick={remove}>Remove</Remove>
            </p>
          </div>
          <div>
            <p>$ {validPrice * amount}</p>
            <Operator>
              <OperatorButton onClick={decrement}>_ </OperatorButton>
              <p>{amount}</p>
              <OperatorButton onClick={increment}>+</OperatorButton>
            </Operator>
          </div>
        </ItemText>
      </Item>
    );
}

export default CartItem
