import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [infoBtc, setInfoBtc] = useState(false);
  const [infoEth, setInfoEth] = useState(false);

  useEffect(() => {
    axios.get(`https://www.mercadobitcoin.net/api/BTC/ticker/`).then((res) => {
      const infos = res.data;
      setInfoBtc(infos);
    });
    axios.get(`https://www.mercadobitcoin.net/api/ETH/ticker/`).then((res) => {
      const infos = res.data;
      setInfoEth(infos);
    });
  }, []);

  function toBr(num) {
    return num.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  }

  return (
    <>
      <div className="btc">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" 
        style={{width: "100px"}}
        />
        {infoBtc && (
          <>
            <p>
              <strong>Buy:</strong> {toBr(infoBtc.ticker.buy)}
            </p>
            <p>
              <strong>High</strong> {toBr(infoBtc.ticker.high)}
            </p>
            <p>
              <strong>Low</strong> {toBr(infoBtc.ticker.low)}
            </p>
          </>
        )}
      </div>
      <div>
        ETH:
        {infoEth && (
          <>
            <p>Buy: {infoEth.ticker.buy}</p>
            <p>high: {infoEth.ticker.high}</p>
            <p>Low: {infoEth.ticker.low}</p>
          </>
        )}
      </div>
    </>
  );
}

export default App;
