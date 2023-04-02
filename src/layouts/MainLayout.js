import Footer from "components/Footer";
import Nav from "components/Nav";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { HiExclamation } from "react-icons/hi";
import { Notification } from "./dashboard";
import { confirmUserNetwork } from "lib/web3/script";

const MainLayout = () => {
  const [wrongNetworkAlert, setWrongNetworkAlert] = useState(null)

  useEffect(async () => {
    let res = await confirmUserNetwork()
    if (!res.ok)
      setWrongNetworkAlert(res.data)

  }, [])


  return (
    <div>
      {window && !window.ethereum &&
        <Notification>
          Please make sure you have Metamask installed on your PC.
        </Notification>
      }

      {wrongNetworkAlert !== null ?
          <Notification>
            {wrongNetworkAlert}
          </Notification>
          : null
      }
      <Nav />

      <main className="mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
