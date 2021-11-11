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
  padding: .5%;
  margin: 2%;
  border-bottom: 1px solid grey;
`

export const Nav = () => {
    return (
      <>
        <NavContainer>
          <NavBar>
            <Link href="/categories/protein">
              <NavLink>PROTEIN</NavLink>
            </Link>
            <Link href="/categories/creatine">
              <NavLink>CREATINE</NavLink>
            </Link>
            <Link href="/categories/snacks">
              <NavLink>SNACKS</NavLink>
            </Link>
          </NavBar>
        </NavContainer>
      </>
    );
}
