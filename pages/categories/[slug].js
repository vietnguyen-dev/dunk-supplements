import React from "react";
import Layout from "../../components/Layout";
import { ProductIndex } from "../../components/UI/ProductIndex";
import PageItem from "../../components/UI/PageItem";
import { Nav } from "../../components/Nav";

import commerce from "../../lib/commerce";
import styled from "styled-components";

const ItemContainer = styled.div`
  height: 80vh;
`

export default function Category({ category, products }) {

  // console.log(category, products)

  return (
    <Layout title="Shop">
      <ProductIndex>
        <Nav />
        <h1>{category.name}</h1>
        <ItemContainer>
          {products.map((product) => (
            <PageItem
              key={product.id}
              name={product.name}
              price={product.price.formatted}
              description={product.description}
              img={product.image.url}
              link={product.permalink}
            />
          ))}
         </ItemContainer>
      </ProductIndex>
    </Layout>
  );
}

export async function getStaticProps({params}) {
  const { slug } = params 

  const category = await commerce.categories.retrieve(slug,{ type: `slug`})

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  return {
    props: {
      category,
      products
    }
  }
}


export async function getStaticPaths(){
  const {data: categories} = await commerce.categories.list()

  const paths = categories.map((category) => ({
      params: {
        slug: category.slug
      },
    }))

  return{
    paths: paths,
    fallback: false
  }
}