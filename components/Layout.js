import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-Mimall gh" : "Mimall"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <div className="flex min-h-screen  flex-col justify-between ">
        <header>
          {/* To sell on the site */}
          <div className="sell text-2sm">
            <Link href="/sell">Sell on MiMall</Link>
          </div>
          <nav className="h-[5rem] z-20 shadow-md bg-green-600 px-4 flex justify-between items-center">
            <Link
              href="/"
              className="px-2 py-4 text-[#380648] font-bold text-3xl font-serif"
            >
              MiMall
            </Link>

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
                    <DropdownMenu.Trigger>All categories</DropdownMenu.Trigger>

                    <DropdownMenu.Content
                      className="drop-down font-serif text-3lg"
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
                </div>
              </div>
            </form>

            <ul className="flex gap-10">
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
            </ul>
            {/* <div>cart login</div> */}
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <p>  &copy; 2022 MiMall</p>
        </footer>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
