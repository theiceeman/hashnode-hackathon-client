import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// flowbite js
import "@themesberg/flowbite";
// tailwind css styles
import "./css/tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DAppProvider, ChainId } from "@usedapp/core";
require("dotenv").config();

console.log(ChainId)

const config = {
  autoConnect: false,
  readOnlyChainId: ChainId.Kovan,
  readOnlyUrls: {
    [ChainId.Kovan]: process.env.REACT_APP_KOVAN_NODE,
  },
  networks: [ChainId.Kovan, ChainId.Localhost, ChainId.Mainnet],
  multicallAddresses: {
    [ChainId.Kovan]: "0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a",
    [ChainId.Mainnet]: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
  },
};
console.log(config)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
