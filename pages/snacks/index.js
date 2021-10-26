import React from "react";
import Layout from "../../components/Layout";
import { ProductIndex } from '../../components/UI/ProductIndex'
import PageItem from "../../components/UI/PageItem";
import { Nav } from "../../components/Nav";

let dummmySnacks = [
  {
    id: 0,
    name: "DUNK Sugarless Cookies - 20 Count",
    price: 10.0,
    description:
      "Made with 80% less sugar. Guranteed to fill your sugar cravings without the sugar effects!",
    img: '/cookies.jpg'
  },
];

const Snacks = () => {
  return (
    <Layout title="Shop Snacks Products">
      <ProductIndex>
        <Nav />
        <h1>SNACKS</h1>
        <div>
          {dummmySnacks.map(({id, name, price, description, img}) => <
            PageItem 
              key={id}
              name={name}
              price={price}
              description={description}
              img={img}
            />) }
        </div>
      </ProductIndex>
    </Layout>
  );
};

export default Snacks;
