import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { BsGithub, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <header>
        {/* To sell on the site */}
        <div className="sell text-1xl z-20">
          <Link href="/sell">Sell on MiMall</Link>
        </div>

        <nav className="h-[5rem] z-20 mt-8 top-0 fixed w-screen shadow-md  bg-gray-900 px-4 flex justify-between items-center">
          <Link
            href="/"
            className="px-2 py-4 text-[#380648] font-bold text-3xl font-serif"
          >
            {/* TODO: Logo  */}
            MiMall
          </Link>
          <ul className="gap-10  hidden md:flex">
            <form>
              <div className="flex  ">
                {/* <label
                  htmlfor="search-dropdown"
                    className="mb-2 text-sm font-medium sr-only"
                  >
                    Your Email
                  </label> */}
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm text-[#ffff] font-medium text-center border border-gray-300 rounded-l-lg"
                  type="button"
                >
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>All categories</DropdownMenu.Trigger>

                    <DropdownMenu.Content
                      className="drop-down font-serif text-3xl"
                      sideOffset={5}
                    >
                      <DropdownMenu.Arrow className="text-red-500" />
                      <DropdownMenu.Item>
                        <Link href="phones">Mobile Phones</Link>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <Link href="/laptop">Laptops</Link>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <Link href="/provisions">Provisions</Link>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <Link href="/cosmetics">Cosmestics</Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </button>

                <d iv className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5  z-20 text-sm text-gray-900  rounded-r-lg border-l-2 border w-[20rem] border-gray-50"
                    placeholder="Search"
                    required=""
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-500 rounded-r-lg border-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </d>
              </div>
            </form>
            <div className="flex justify-between items-end">
              {/* <ul className="gap-10  hidden md:flex"> */}
              <Link
                href="/account"
                className="capitalize gap-2 flex text-[#ffff] text-2lg tracking-wide font-serif"
              >
                <VscAccount className="flex justify-between " size="25" />
                account
              </Link>

              <Link
                href="/help"
                className="capitalize gap-2 flex text-[#ffff] text-2lg tracking-wide font-serif"
              >
                <BiHelpCircle className="flex" size="25" />
                help
              </Link>

              <Link
                href="/cart"
                className="capitalize gap-2 flex text-[#ffff] text-2lg tracking-wide font-serif"
              >
                <AiOutlineShoppingCart
                  className="flex justify-between"
                  size="25"
                />
                cart
              </Link>
            </div>
          </ul>

          {/* Sidebar */}
          <div>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} className="text-white" />
            </div>
            {/* <div>cart login</div> */}
            <div
              className={
                nav
                  ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70"
                  : ""
              }
            >
              <div
                className={
                  nav
                    ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }
              >
                <div>
                  {/* Logo div */}
                  <div className="flex text-white w-full items-center justify-between ">
                    {/* <h1> TODO: Logo goes here </h1> */}
                    MiMall
                    <div
                      onClick={handleNav}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                    >
                      <AiOutlineClose />
                    </div>
                  </div>
                </div>
                <div className="border-b tracking-widest border-gray-300 my-4 text-white">
                  <p className="w-[85%] md:w-[90%] py-4 ">
                    MiMall Ghana: Where Ghanaians shop
                  </p>
                </div>
                <div>
                  {/* Dropdowns */}
                  <ul className="py-4">
                    <form>
                      <div className="flex">
                        {/* <label
                  htmlfor="search-dropdown"
                    className="mb-2 text-sm font-medium sr-only"
                  >
                    Your Email
                  </label> */}
                        <button
                          id="dropdown-button"
                          data-dropdown-toggle="dropdown"
                          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm text-[#ffff] font-medium text-center border border-gray-300 rounded-l-lg"
                          type="button"
                        >
                          <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                              All categories
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Content
                              className="drop-down font-serif text-3xl"
                              sideOffset={5}
                            >
                              <DropdownMenu.Arrow className="text-red-500" />
                              <DropdownMenu.Item>
                                <Link href="phones">Mobile Phones</Link>
                              </DropdownMenu.Item>

                              <DropdownMenu.Item>
                                <Link href="/laptop">Laptops</Link>
                              </DropdownMenu.Item>

                              <DropdownMenu.Item>
                                <Link href="/provisions">Provisions</Link>
                              </DropdownMenu.Item>

                              <DropdownMenu.Item>
                                <Link href="/cosmetics">Cosmestics</Link>
                              </DropdownMenu.Item>
                            </DropdownMenu.Content>
                          </DropdownMenu.Root>
                        </button>

                        <div className="relative w-full">
                          <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5  z-20 text-sm text-gray-900  rounded-r-lg border-l-2 border w-[10rem] border-gray-50"
                            placeholder="Search"
                            required=""
                          />
                          <button
                            type="submit"
                            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-500 rounded-r-lg border-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                          >
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              ></path>
                            </svg>
                            <span className="sr-only">Search</span>
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className=" pt-5 space-y-10 uppercase font-serif ">
                      <Link
                        href="/account"
                        className=" gap-1 flex text-[#ffff] text-2lg tracking-wide font-serif"
                      >
                        <VscAccount
                          className="flex justify-between "
                          size="25"
                        />
                        account
                      </Link>

                      <Link
                        href="/help"
                        className=" gap-1 flex text-[#ffff] text-2lg tracking-wide font-serif"
                      >
                        <BiHelpCircle className="flex" size="25" />
                        help
                      </Link>

                      <Link
                        href="/cart"
                        className=" gap-1 flex text-[#ffff] text-2lg tracking-wide font-serif"
                      >
                        <AiOutlineShoppingCart
                          className="flex justify-between"
                          size="25"
                        />
                        cart
                      </Link>
                    </div>
                  </ul>

                  {/* Socials */}
                  <div className="pt-20 ">
                    <p className="uppercase tracking-wide text-white">
                      Follow us on our social media handles
                    </p>
                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                      <div className="rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                      <div className="rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
                        <BsGithub />
                      </div>
                      <div className="rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
                        <BsFacebook />
                      </div>
                      <div className="rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
                        <BsInstagram />
                      </div>
                      <div className="rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:bg-white hover:scale-105 ease-in duration-300">
                        <BsTwitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
