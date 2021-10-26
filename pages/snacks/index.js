import React from "react";
import Layout from "../../components/Layout";
import { ProductIndex } from '../../components/UI/ProductIndex'
import { Nav } from "../../components/Nav";

const Snacks = () => {
  return (
    <Layout title="Shop Snacks Products">
      <ProductIndex>
        <Nav />
        <h1>Snacks</h1>
        <div>
          <p>look through our snsack collection</p>
        </div>
      </ProductIndex>
    </Layout>
  );
};

export default Snacks;
