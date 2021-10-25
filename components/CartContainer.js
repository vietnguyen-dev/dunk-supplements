import React from 'react'
import Image from "next/image";

import Logo from './UI/Logo';
import styled from "styled-components";

const CartHeader = styled.header`
  padding: 0% 2vw 0% 2vh;
  display: grid;
  grid-template-columns: 90% 10%;
  background-color: black;
  color: white;
  border: none;
  position: sticky;
  top: 0px;
  z-index: 100;
`;

const HeaderItems = styled.div`
    margin: 7% 15% 7% 0%;
`

const CartContainer = () => {
    return (
      <CartHeader>
        <HeaderItems>
          <Logo />
        </HeaderItems>
        <HeaderItems className="center">
          <Image
            src={"/cart.png"}
            height={32}
            width={32}
            alt="Click This icon to open the cart"
          />
        </HeaderItems>
      </CartHeader>
    );
}

export default CartContainer