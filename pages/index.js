import Link from 'next/link'
import Image from "next/image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"
import Card from "../components/UI/Card"
import Foot from '../components/UI/Footer'

const LinkToPages = styled.div`
  margin: 10% 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default function Home() {
  return (
    <Layout title={"Home"}>
      <Hero />
      <LinkToPages id="shop">
        <Card>
          <Image
            src={"/protein-bar.png"}
            height={150}
            width={150}
            alt="link to protein page"
          />
          <h3>SNACKS</h3>
        </Card>

        <Link href='/Protein'>
          <a>
            <Card>
              <Image
                src={"/protein-bar.png"}
                height={150}
                width={150}
                alt="link to protein page"
              />
              <h3>PROTEIN</h3>
            </Card>
          </a>
        </Link>

        <Card>
          <Image
            src={"/protein-bar.png"}
            height={150}
            width={150}
            alt="link to protein page"
          />
          <h3>CREATINE</h3>
        </Card>
      </LinkToPages>
      <Foot />
    </Layout>
  );
}
