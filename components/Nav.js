import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavContainer = styled.nav`
  margin-left: 30vw;
`

const NavBar = styled.ul`
    list-style-type: none;
    display: flex;
    text-align: right;
`

const NavLink = styled.a`
  padding: 1%;
  margin:1%;
`

export const Nav = () => {
    return (
      <>
        <NavContainer>
          <NavBar>
            <Link href='/protein'>
              <NavLink>PROTEIN</NavLink>
            </Link>
            <Link href='/creatine'>
              <NavLink>CREATINE</NavLink>
            </Link>
            <Link href='/snacks'>
              <NavLink>SNACKS</NavLink>
            </Link>
          </NavBar>
        </NavContainer>
      </>
    );
}
