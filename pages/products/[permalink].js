import React, { useState, useEffect } from 'react'
import { useCartDispatch } from '../../context/cart-context';
import Layout from "../../components/Layout";
import { Nav } from "../../components/Nav";
import { ProductIndex } from '../../components/UI/ProductIndex';
import PageItem from '../../components/UI/PageItem';
import styled from 'styled-components';
import commerce from "../../lib/commerce";

const ItemName = styled.h1`
  font-size: 3vh;
`

const RelatedItemsContainer = styled.div`
    margin: 5%;
`

const AddToCartForm = styled.form`
    margin: 5%;
`

const InputContainer = styled.div`
  text-align: right;

  > label {
    margin-right: 5%;
  }
`;

const AmountSelect = styled.select`
  padding: 3%;
  width: 45%;
  text-align: center;
  border-radius: 0;
  border: 2px solid black;
`;

const AddToCartButton = styled.button`
  width: 100%;
  height: 5vh;
  background-color: black;
  color: white;
  padding: 3%;
  font-size: 2vh;
  margin-top: 5%;
  border: none;
  letter-spacing: 2px;
  font-weight: bold;
`

const Description = styled.div`
    padding: 1% 5% 0% 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const DescriptionText = styled.p`
  grid-column-start: 0 / 2;
`

export default function Product({product}){
    // console.log(product)
    const [itemAmount, setItemAmount] = useState(1)
    const [itemAdded , setItemAdded] = useState(false)
    const { setCart } = useCartDispatch()

    useEffect(() =>{
        setTimeout(() => {
          setItemAdded(false)
        }, 3000)
     }, [itemAdded])


    const changeAmount = (e) =>{
      setItemAmount(e.target.value)
    }

    const addToCart = (e) => {
        //can add quatity
        e.preventDefault()
        let intNum = parseInt(itemAmount, 10)

        //what does this exactly do?
        commerce.cart.add(product.id, intNum).then(({cart}) => setCart(cart))
        setItemAdded(true)
    }

    return (
      <Layout title={product.name}>
        <Nav />
        <ProductIndex>
          <ItemName>{product.name} </ItemName>
          <img src={product.image.url} />
          <Description>
            <h2>$ {product.price.formatted}</h2>
            <h3>Amount Left: {product.inventory.available}</h3>
          </Description>
          <AddToCartForm onSubmit={addToCart}>
            <InputContainer>
                <label>Select Amount: </label>
              <AmountSelect onChange={changeAmount}>
                <option value="" disabled default hidden>
                  Amount
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </AmountSelect>
            </InputContainer>
            <AddToCartButton type="submit">ADD TO CART</AddToCartButton>
            {itemAdded && <p>Item Added!</p>}
          </AddToCartForm>
          <RelatedItemsContainer>
            <h4>Product Descripton</h4>
            <DescriptionText>{product.description}</DescriptionText>
            <h4>Frequently Bought with...</h4>
            {product.related_products.map((rproduct) => (
              <PageItem
                key={rproduct.id}
                img={rproduct.image.url}
                name={rproduct.name}
                price={rproduct.price.formatted}
                description={rproduct.description}
                link={rproduct.permalink}
              />
            ))}
          </RelatedItemsContainer>
        </ProductIndex>
      </Layout>
    );
}

export async function getStaticProps({params}){
    const { permalink } = params

    const product = await commerce.products.retrieve(permalink, { type: 'permalink'})

    return {
        props: { 
            product
        }
    }
}

export async function getStaticPaths(){
    const {data: products} = await commerce.products.list()

    const paths = products.map((product) => ({
        params: { 
            permalink: product.permalink
        }
    }))

    return {
        paths: paths,
        fallback: false
    }
}

