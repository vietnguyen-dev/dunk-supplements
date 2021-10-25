import React from 'react'
import Head from 'next/head'
import styled from "styled-components";
import CartContainer from './CartContainer';

const Wrapper = styled.main`
   background-color: white;
`

const Layout = ({title, children}) => {
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
            <CartContainer /> 
            <Wrapper>
                {children}
            </Wrapper>
        </main>
      </>
    );
}

export default Layout
