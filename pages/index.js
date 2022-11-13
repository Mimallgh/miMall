import React from "react";
import Layout from "../components/Layout";
import ShopItem from "../components/ShopItem";
import data from "../utils/data";
import shopApi from "./api/shopApi";

const Home = () => {
  return (
    <Layout title="Home Page">
      <shopApi />
      {/* <div className="grid grid-cols-1 gap-4  md:grid-cols-3 lg:grid-cols-4">
        {data.shops.map((shop) => (
          <ShopItem shop={shop} key={shop.slug}></ShopItem>
        ))}
      </div> */}
    </Layout>
  );
};

export default Home;
