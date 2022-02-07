import { useEthers } from "@usedapp/core";
import Features from "components/Features";
import Hero from "components/Hero";
import Pricing from "components/Pricing";
import Steps from "components/Steps";
import { authenticateUser } from "providers/redux/_actions/user-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const {account} = useEthers();

  const { data: userAuth } = useSelector((state) => state.UserAuth);
//   const [user, setUser] = useState();

  useEffect(() => {
      // console.log(account);
    // dispatch(authenticateUser(account));
  },[]);
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
