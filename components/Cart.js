import React from 'react'
import Link from 'next/link'
import { useCartState } from '../context/cart-context';
import styled from "styled-components";
import CartItem from './UI/CartItem';
import Close from './UI/Close';

import commerce from '../lib/commerce';

const CartContainer = styled.div`
  height: 89vh;
  width: 95vw;
  margin: 3%;
  border-radius: 10px;
  background-color: white;
  padding: 1% 3%;
`;

const CartConnector = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  right: 0;
  transform: translate(-10px, -20px);
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid white;
`;

const CartBackground = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 100;
    position: fixed;
    background-color: rgba(192,192,192,.8)
`

const CartOpen = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
`

const ForwardButton = styled.button`
    border: none;
    color: white;
    background-color: black;
    width: 100%;
    padding: 5%;
    letter-spacing: 3px;
    font-size: 2vh;
    font-weight: bold;
` 

const Checkout = styled.div`
    position: absolute;
    bottom: 11%;
    width: 90%;
    overflow: hidden;
`

const ItemContainer = styled.div`
    border: 1x solid grey;
`

const Cart = ({status, settingCart}) => {
    const cart = useCartState()
    const { state } = cart
    const { id } = state
    
    // const getCheckOutToken = () =>{
    //   commerce.checkout
    //     .generateToken(id, { type: "cart" })
    //     .then((checkout) => console.log(checkout));
    // }

    return (
      <CartBackground className={`${status ? `shown` : `hidden`}`}>
        <CartConnector />
        <CartContainer>
          <CartOpen>
            <h2>CART</h2>
            <Close clickEvent={settingCart} />
          </CartOpen>
          <ItemContainer>
            {cart.state.line_items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.image.url}
                name={item.name}
                price={item.price.formatted}
                amount={item.quantity}
              />
            ))}
          </ItemContainer>
          <Checkout>
            {/* <h2>subtotal: {cart.state.subtotal.formatted}</h2> */}
            <ForwardButton>
              <Link href={`/checkout/?id=${id}`}>
              <a>
              PROCEED TO CHECKOUT
              </a>
              </Link>
            </ForwardButton>
          </Checkout>
        </CartContainer>
      </CartBackground>
    );
}

export default Cart
