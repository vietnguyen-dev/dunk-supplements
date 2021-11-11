import React from "react";
import Layout from "../../components/Layout";
import { ProductIndex } from '../../components/UI/ProductIndex'
import PageItem from "../../components/UI/PageItem";
import { Nav } from "../../components/Nav";

import commerce from '../../lib/commerce'

export default function Snacks ({products}) {

  console.log(products)

  return (
    <Layout title="Shop Snacks Products">
      <ProductIndex>
        <Nav />
        <h1>SNACKS</h1>
        <div>
          {products.map((product) => 
            <PageItem 
                key={product.id}
                name={product.name}
                price={product.price.formatted}
                description={product.description}
                img={product.image.url}
            />
          )}
        </div>
      </ProductIndex>
    </Layout>
  );
};

export async function getStaticProps(){
  const {data: products} = await commerce.products.list({
    category_slug: [`snacks`]
  })

  return{
    props: {
      products
    }
  }

}