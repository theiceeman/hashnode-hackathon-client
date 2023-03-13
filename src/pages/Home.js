import Features from "components/Features";
import Hero from "components/Hero";
import Pricing from "components/Pricing";
import Steps from "components/Steps";
import { checkIfWalletIsConnected, connectToBrowserProvider } from "lib/web3/script";
import React, { useEffect, useState } from "react";

function Home() {

  return (
    <div className="overflow-hidden bg-white dark:bg-nature-900">
      <Hero />
      <Pricing />
      <Features />
      <Steps />
    </div>
  );
}

export default Home;
