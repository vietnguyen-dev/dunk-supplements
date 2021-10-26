import React from 'react'
import styled from "styled-components";
import CartItem from './UI/CartItem';
import Close from './UI/Close';

const CartContainer = styled.div`
  height: 87vh;
  width: 95vw;
  margin: 3%;
  border-radius: 10px;
  background-color: white;
  padding: 5%;
`;

const CartBackground = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 100;
    position: fixed;
    background-color: rgba(192,192,192,.8)
`

const CartOpen = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
`

const ForwardButton = styled.button`
    border: none;
    color: white;
    background-color: black;
    width: 100%;
    padding: 5%;
    letter-spacing: 3px;
    font-size: 2vh;
    font-weight: bold;
` 

const Checkout = styled.div`
    position: absolute;
    bottom: 15%;
    width: 85%;
    overflow: hidden;
`

const ItemContainer = styled.div`
    border: 1x solid grey;
`

let current = [
  {
    id: 0,
    name: "DUNK Low Sugar Cookies - 20 Count",
    img: '/cookies.jpg',
    price: 9.99,
    description:
      "Made with 80% less sugar. Guranteed to fill your sugar cravings without the sugar effects!",
  },
];

const Cart = ({status, settingCart}) => {
    return (
      <CartBackground className={`${status ? `shown` : `hidden`}`}>
        <CartContainer>
           <CartOpen> 
               <h2>CART</h2>
                <Close clickEvent={settingCart} />
           </CartOpen>
           <ItemContainer>
               {current.map(item => 
                    <CartItem 
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                    />
                )}
            </ItemContainer> 
           <Checkout>
           <h2 style={{textAlign: `right`}}>subtotal: </h2>
           <ForwardButton>CHECKOUT </ForwardButton>
           </Checkout>
        </CartContainer>
      </CartBackground>
    );
}

export default Cart
