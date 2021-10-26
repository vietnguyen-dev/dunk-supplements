import React, {useState} from 'react'
import Head from 'next/head'
import styled from "styled-components";
import CartContainer from './CartContainer';
import Cart from './Cart';

const Wrapper = styled.main`
   background-color: white;
`

const Layout = ({title, children}) => {
    const [cart, setCart] = useState(false)

    const settingCart = () =>{
      setCart(!cart)
    }

    return (
      <>
        <Head>
          <title>Dunk Supplements | {title}</title>
          <meta
            name="description"
            content="Dunk Supplements | helping you be the best version of you"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <CartContainer settingCart={settingCart} />
          <Cart status={cart} settingCart={settingCart} />
          <Wrapper>{children}</Wrapper>
        </main>
      </>
    );
}

export default Layout
