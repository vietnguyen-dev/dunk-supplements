import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    padding: 2vh 2vw 2vh 2vh;
`

export const ProductIndex = ({children}) => {
    return (
        <Page>
            {children}
        </Page>
    )
}
