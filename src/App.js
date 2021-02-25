import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [cryptoName, setCryptoName] = useState();
  const [cryptoInfo, setCryptoInfo] = useState("nada");

  function handleChange(event) {
    setCryptoName(event.target.value);
  }

  // useEffect(() => {
  //   axios
  //     .get(`https://www.mercadobitcoin.net/api/${cryptoName}/ticker/`)
  //     .then((res) => {
  //       const infos = res.data;
  //       setCryptoInfo(infos);
  //     });
  // }, [cryptoName]);

  //TEST

  return (
    <>
      <label>
        <select value={cryptoName} onChange={handleChange}>
          <option value="BTC">Bitcoin</option>
          <option value="kkk">kkk</option>
          <option value="coco">Coco</option>
          <option value="manga">Manga</option>
        </select>
      </label>
      <br />
      <button
        onClick={() => {
          setCryptoInfo({
            ticker: {
              high: 14481.47,
              low: 13706.00002,
              vol: 443.73564488,
              last: 14447.01,
              buy: 14447.001,
              sell: 14447.01,
              date: 1502977646,
            },
          });
          console.log("o--->", cryptoInfo.ticker);
        }}
      >
        oo
      </button>
      <br />

      <p>high: </p>
      <p></p>
      <p></p>
      <p></p>
    </>
  );
}

export default App;
