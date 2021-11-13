import React, { useState } from 'react'
import Layout from "../../components/Layout";
import OrderDetails from '../../components/UI/OrderDetails';
import commerce from "../../lib/commerce";
import styled from 'styled-components';

const ContentContainer = styled.div`
    margin: 5%;
`

const FormContainer = styled.div`
    margin: 2% 0% 2% 0%;
`

const TextInput = styled.input`
    width: 80vw;
    padding: 4%;
    border-radius: 0;
    margin: 3% 0% 3% 0%;
    letter-spacing: 1.5px;
`

const SelectRegion = styled.select`
  width: 90vw;
  padding: 4%;
  border-radius: 0;
  margin: 3% 0% 3% 0%;
  letter-spacing: 1.5px;
  background-color: white;
  border: 2px solid black;
  color: grey;
`;

const ConfirmButton = styled.button`
  width: 90vw;
  padding: 4%;
  border-radius: 0;
  margin: 3% 0% 3% 0%;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 2vh;
  background-color: black;
  color: white;
  border: none;
`;

export default function Checkout({checkout}){
    const [mainInfo, setMaininfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }) 

    const [shippingInfo, setShippingInfo] = useState({
        fullName: '',
        address1: '',
        address2: "",
        city: "",
        state: "",
        country: "",
        zipCode: '',
        shipping: ''
    })

    const setFirstName = e => {
        setMaininfo({
            ...mainInfo,
            firstName: e.target.value
        })
    }
    
    const setLastName = (e) => {
        setMaininfo({
        ...mainInfo,
        lastName: e.target.value,
        });
    };

    const setEmail = (e) => {
        setMaininfo({
        ...mainInfo,
        email: e.target.value,
        });
    };

    const setPhoneNumber = (e) => {
        setMaininfo({
        ...mainInfo,
        phoneNumber: e.target.value,
        });
    };

    const { shipping_methods } = checkout
    const { regions } = shipping_methods[0]
    const { US } = regions

       console.log(mainInfo);

    const confirmOrder = () =>{
      console.log(mainInfo, shippingInfo)
    }

    return (
      <Layout title={`Checkout`}>
        <ContentContainer>
          <h1>Checkout</h1>
          <form onSubmit={confirmOrder}>
            <TextInput
              type="text"
              value={mainInfo.firstName}
              onChange={setFirstName}
              placeholder="First Name"
            />
            <TextInput
              type="text"
              value={mainInfo.lastName}
              onChange={setLastName}
              placeholder="Last Name"
            />
            <TextInput
              type="text"
              value={mainInfo.email}
              onChange={setEmail}
              placeholder="Email@domain.com"
            />
            <TextInput
              type="number"
              value={mainInfo.phoneNumber}
              onChange={setPhoneNumber}
              placeholder="Phone Number (Optional)"
            />
            <FormContainer>
              <h2>Shipping</h2>
              <TextInput placeholder="Full Name" />
              <TextInput placeholder="Address Line 1" />
              <TextInput placeholder="Address Line  2" />
              <TextInput placeholder="City" />
              <SelectRegion>
                {US.map((currElement, index) => (
                  <option key={index} value={currElement}>
                    {currElement}
                  </option>
                ))}
              </SelectRegion>
              <SelectRegion>
                <option value="US">US</option>
              </SelectRegion>
              <TextInput type="text" placeholder="Zip Code" />
              <SelectRegion>
                {shipping_methods.map((method) => (
                  <option key={method.id} value={method.description}>
                    {method.description}
                    {method.price.formatted}
                  </option>
                ))}
              </SelectRegion>
            </FormContainer>
            <FormContainer>
              <h2>Payment</h2>
              <TextInput placeholder="Card Number" />
              <TextInput placeholder="CCV / CVC" />
            </FormContainer>
            <ConfirmButton>CONFIRM PAYMENT</ConfirmButton>
          </form>
          <OrderDetails details={checkout.live} />
        </ContentContainer>
      </Layout>
    );
}

export async function getServerSideProps({query}){
    let id = query.id
    const checkout = await commerce.checkout.generateToken(id, {type: 'cart'})


   return{
       props: {
        checkout
       }
   }
}
