import Routes from "routes";
import { Provider } from "react-redux";
import store from "./providers/redux/store";
import { useEthers } from "@usedapp/core";
import { useEffect } from "react";

function App() {
  const { account, activateBrowserWallet } = useEthers();
  console.log(account);


  useEffect(() => {
    activateBrowserWallet();
  }, [account, activateBrowserWallet]);
  return (
    <Provider store={store}>
      <div>
        <Routes account={account} />
      </div>
    </Provider>
  );
}

export default App;
