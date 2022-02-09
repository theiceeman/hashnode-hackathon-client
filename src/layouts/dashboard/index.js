import React from "react";
import { Outlet } from "react-router-dom";
// Dashboard components
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import { HiExclamation } from "react-icons/hi";
import { useEthers, useContractFunction } from "@usedapp/core";
import { Contract } from "ethers";
import { useEffect } from "react";
import dotenv from "dotenv";
import VAULT_ABI from "../../abi/vault/Vault.sol/Vault.json";
dotenv.config();

const Notification = () => {
  return (
    <div className="w-full text-white bg-norm-blue">
      <div className="container flex items-center px-3 py-1 mx-auto">
        <HiExclamation className="w-5 h-5 text-white" />
        <p className="mx-3 font-semibold font-sans text-sm">
          Please make sure you have Metamask installed on your PC.
        </p>
      </div>
    </div>
  );
};

const DashboardLayout = ({ account }) => {
  /* const VAULT_ADDRESS = process.env.REACT_APP_VAULT_ADDRESS;
  // const contract = new Contract(VAULT_ADDRESS, VAULT_ABI.abi);

  // const { send } = useContractFunction(contract, "getUserTokenBalance");

  useEffect(() => {
    async function sendTransaction() {
      // return await send(account, process.env.REACT_APP_VAULT_ADDRESS);
    }
    // console.log(sendTransaction());
  }); */
  return (
    <>
      <div className="bg-nature-100 dark:bg-nature-900">
        <div className="w-full">
          {/* Navigation starts */}
          {window && !window.ethereum && <Notification />}
          <Navbar account={account} />
          <TopBar />
          {/* Navigation ends */}
          <main className="lg:container lg:mx-auto py-12 w-full lg:px-8">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DashboardLayout;
