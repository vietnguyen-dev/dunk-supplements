import React from 'react'
import Layout from '../../components/Layout'
import { ProductIndex } from '../../components/UI/ProductIndex'
import { Nav
 } from '../../components/Nav'
const Creatine = () => {
    return (
       <Layout title='Shop Creatine Products'>
           <ProductIndex>
            <Nav />
            <h1>Creatine</h1>
           </ProductIndex>
       </Layout>
    )
}

export default Creatine
