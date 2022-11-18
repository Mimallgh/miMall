import Link from "next/link";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="md:flex md:justify-between  sm:px-12 px-4 bg-[#ff00c8] py-7">
          <h1
            className="lg:text-4xl text-3xl md:mb-0 mb-6 leading-normal font-semibold
    md:2/5"
          >
            <span className="text-teal-400">
              <form>
                <div className="flex justify-center items-center">
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

                  <div className="relative w-full ">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5  z-20 text-sm text-gray-900  rounded-r-lg   border-gray-50
                        sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0  py-2.5   focus:outline-none
                        "
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
            </span>
            {/* <divb className="flex justify-between ">
                <h1 className="bg-black text-white w- h-screen text-center">hello </h1>
              </divb> */}
          </h1>

          {/* <div className="">hello</div> */}
        </div>
        <div className=" bg-black/80">
          <div className="w-screen text-white/50 h-[20rem]">hello</div>
          <div className="bg-white/5 w-screen h-[0.1rem]"></div>
          <div>
            <p className="w-screen text-white h-[3rem] flex justify-center pt-4">
              &copy; 2022 MiMall
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
