import React, { useEffect } from "react";
import Layout from "../../components/Layout";

const shopApi = () => {
  const [Shop, setShop] = useState();
  const apiURL =
    "https://mimallgh.com/mimall-shops-api/shops-api.php?req=get_shops&access_id=mimalldeveloper";

  let displayData;

  async function pullJson() {
    const res = await fetch(apiURL);
    const resData = await res.json();
    console.log(resData);
    displayData = resData.map(function (shop) {
      return <p key={shop.id}>{shop.title}</p>;
    });
    console.log(resData);
    setShop(displayData);
  }
  useEffect(() => {
    pullJson();
  }, []);

  return (
    <Layout>
      <h1>from mimall api</h1>
    </Layout>
  );
};

export default shopApi;
