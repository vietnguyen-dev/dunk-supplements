import Link from 'next/link'
import Image from "next/image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"
import Card from "../components/UI/Card"
import Foot from '../components/UI/Footer'

import commerce from '../lib/commerce'

const LinkToPages = styled.div`
  margin: 10% 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default function Home({merchant, categories, products}) {

  console.log(categories)

  return (
    <Layout title={"Home"}>
      <Hero />
      {/* <div>
        <pre>{JSON.stringify(merchant, null, 2)}</pre>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div> */}
      <LinkToPages id="shop">
        {categories.map((category) => (
          <Link href={`/${category.slug}`} key={category.id}>
            <a>
              <Card>
                <Image
                  src={"/protein-bar.png"}
                  height={150}
                  width={150}
                  alt={`link to ${category.name}`}
                />
                <h3>{category.name}</h3>
              </Card>
            </a>
          </Link>
        ))}
        {/* <Link href="/snacks">
          <a>
            <Card>
              <Image
                src={"/protein-bar.png"}
                height={150}
                width={150}
                alt="link to protein page"
              />
              <h3>SNACKS</h3>
            </Card>
          </a>
        </Link> */}
      </LinkToPages>
      <Foot />
    </Layout>
  );
}


export async function getStaticProps(){
  const merchant = await commerce.merchants.about()
  const {data: categories} = await commerce.categories.list()
  const {data: products} = await commerce.products.list()

  return{
    props: {
      merchant,
      categories,
      products
    }
  }

}