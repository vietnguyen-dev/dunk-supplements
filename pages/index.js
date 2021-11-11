import Link from 'next/link'
import Image from "next/image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"
import Card from "../components/UI/Card"

import commerce from '../lib/commerce'

const LinkToPages = styled.div`
  margin: 5% ;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default function Home({ categories}) { 
  return (
    <Layout title={"Home"}>
      <Hero />
      <LinkToPages id="shop">
        {categories.map((category) => (
          <Link href={`/categories/${category.slug}`} key={category.id}>
            <a>
              <Card>
                <Image
                  src={`/${category.slug}.png`}
                  height={150}
                  width={150}
                  alt={`link to ${category.name}`}
                />
                <h3>{category.name}</h3>
              </Card>
            </a>
          </Link>
        ))}
      </LinkToPages>
    </Layout>
  );
}


export async function getStaticProps(){
  // const merchant = await commerce.merchants.about()
  const {data: categories} = await commerce.categories.list()
  // const {data: products} = await commerce.products.list()

  return{
    props: {
      categories
    }
  }

}