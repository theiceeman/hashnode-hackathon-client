import Routes from "routes";
import { Provider, useDispatch, useSelector } from "react-redux";
// import store from "./providers/redux/store";
import { store } from "./providers/redux-toolkit/store";
import { useEffect, useState } from "react";
import { checkIfWalletIsConnected, connectToBrowserProvider } from "lib/general/script";
import { setUserAddress } from "providers/redux-toolkit/reducers/user-address";

function App() {
  // const [userAddress, setuserAddress] = useState('')

  return (
    <Provider store={store}>
      <div>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
