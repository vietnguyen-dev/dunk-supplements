import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavBar = styled.ul`
    list-style-type: none;
    display: flex;
    text-align: right;
`



export const Nav = () => {
    return (
      <>
        <nav>
          <NavBar>
            <Link href='/protein'>
              <a>PROTEIN</a>
            </Link>
            <Link href='/creatine'>
              <a>CREATINE</a>
            </Link>
            <Link href='/snacks'>
              <a>SNACKS</a>
            </Link>
          </NavBar>
        </nav>
      </>
    );
}
