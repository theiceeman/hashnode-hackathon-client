import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// flowbite js
import "@themesberg/flowbite";
// tailwind css styles
import "./css/tailwind.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  DAppProvider,
  ChainId,
  Localhost
} from "@usedapp/core";
console.log(Localhost);
const config = {
  autoConnect: false,
  readOnlyChainId: ChainId.Localhost,
  readOnlyUrls: {
    [ChainId.Localhost]: "http://localhost:8545",
  },
  networks: [ChainId.Localhost],
  multicallAddresses: {
    [ChainId.Localhost]: process.env.REACT_APP_MULTICALL_ADDRESS,
    [ChainId.Mainnet]: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441"
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
