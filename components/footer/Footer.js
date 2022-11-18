import Link from "next/link";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import ItemsContainer from "./ItemsContainer";
import Socials from "./Socials";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ff00c8] py-7 ">
        <div className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <h1> ads goes here </h1>
        </div>

        <div>
          <input
            type="text"
            placeholder="search"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 
            mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none "
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 
          duration-300 px-5 py-2.5 font-[Popins] rounded-md 
          text-white md:w-auto w-full "
          >
            Search
          </button>
        </div>
      </div>

      <div>
        <ItemsContainer />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-10 text-center pt-2 text-gray-400 text-sm pb-8 
        "
        >
          <div className="bg-white/5 w-screen  h-[0.1rem]"></div>
          <div className="pt-5">
            <span>&copy; 2022 MiMall. All rights reserved. </span>
            <span>Terms . Privacy Policy</span>
            <Socials Icons={Icons} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
