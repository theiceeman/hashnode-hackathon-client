import Features from "components/Features";
import Hero from "components/Hero";
import Pricing from "components/Pricing";
import Steps from "components/Steps";
import React, { useEffect } from "react";

function Home() {
  return (
    <div className="overflow-hidden bg-white dark:bg-nature-900">
      <Hero />
      <Pricing />
      {/* <MarketTrend /> */}
      <Features />
      <Steps />
    </div>
  );
}

export default Home;
