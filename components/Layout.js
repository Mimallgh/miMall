import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Slider from "../components/Slider";
import Nav from "../components/Nav";
import Footer from "../components/footer/Footer";
import TopProdTrend from "./TopProdTrend";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-Mimall gh" : "Mimall"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <div className="flex min-h-screen pt-[6rem] flex-col justify-between ">
        <div className="">
          <Slider />
        </div>

        <div className="mt-5">
          <TopProdTrend />
        </div>

        <Nav />
        <main className="flex-grow">{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
