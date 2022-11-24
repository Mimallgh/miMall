import Link from "next/link";
import React from "react";

const TopProdTrend = () => {
  return (
    <div className="bg-[#fff] mt-1">
      <div className=" mb-10">
        <span className="tpt sm:text-2xl">
          <div>
            <Link href="/topdeals">
              <h3>top deals</h3>
            </Link>
          </div>
          <div className="bg-gray-500/70 h-10 w-1"></div>
          <div>
            <Link href="/productvideos">
              <h3>product videos</h3>
            </Link>
          </div>
          <div className="bg-gray-500/70 h-10 w-1"></div>
          <div>
            <Link href="/trendings">
              <h3>trendings</h3>
            </Link>
          </div>
        </span>
        <div className="bg-red-500 min-h-[30rem] mt-5">
          <div className="top-card1">
            <div className="flex justify-between items-center">
              <div>hello</div>
              <div>hello</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProdTrend;
