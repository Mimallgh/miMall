import React from "react";
import Link from "next/link";

const ShopItem = ({ shop }) => {
  return (
    <div className="card">
      <Link href={`/shop/${shop.slug}`}>
        <img src={shop.image} alt={shop.name} className="rounded shadow" />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/shop/${shop.slug}`}>
          <h2 text-lg>{shop.name}</h2>
        </Link>

        <p className="mb-2">{shop.description}</p>
        <button className="primary-button">More</button>
      </div>
    </div>
  );
};

export default ShopItem;
