import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// flowbite js
import "@themesberg/flowbite";
// tailwind css styles
import "./css/tailwind.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DAppProvider,ChainId } from "@usedapp/core";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DAppProvider config={{ 
		  supportedChains:[ChainId.Localhost]
	   }}>
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
