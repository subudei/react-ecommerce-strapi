import React from "react";
import Hero from "../hero/hero";
import Layout from "../layout/layout";
import MainSection from "../main-section/mainSection";
import ProductCollection from "../product-collection/productCollection";

function HomePage() {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <ProductCollection />
      </Layout>
    </>
  );
}

export default HomePage;
