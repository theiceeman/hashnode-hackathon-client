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

const config = {
  autoConnect: false,
  readOnlyChainId: ChainId.Hardhat,
  readOnlyUrls: {
    [ChainId.Hardhat]: "http://localhost:8545",
  },
  supportedChains: [ChainId.Hardhat, ChainId.Localhost, ChainId.Mainnet],
  multicallAddresses: {
    [ChainId.Hardhat]: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
    [ChainId.Mainnet]: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
  },
};

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
