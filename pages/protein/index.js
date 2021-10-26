import React from 'react'
import Layout from '../../components/Layout'
import { ProductIndex } from '../../components/UI/ProductIndex'
import { Nav } from '../../components/Nav'

const Protein = () => {
    return (
        <Layout title='Shop Protein Products'>
            <ProductIndex>
                <Nav />
                <h1>Protein</h1>
            </ProductIndex>
        </Layout>
    )
}

export default Protein
