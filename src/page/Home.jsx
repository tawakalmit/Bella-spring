import React from "react";
import Layout from "../components/Layout/Layout";
import Heroslider from "../components/Heroslider/Heroslider";
import Subbanner from "../components/Subbanner/Subbanner";
import Newarrival from "../components/Newarrival/Newarrival";
import Collection from "../components/Collection/Collection";
import Customer from "../components/Customer/Customer";

const Home = () => {
  return (
    <>
      <Layout>
        <Heroslider />
        <Subbanner />
        <Newarrival />
        <Collection />
        <Customer />
      </Layout>
    </>
  );
};

export default Home;
