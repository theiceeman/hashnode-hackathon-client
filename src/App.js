import Routes from "routes";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./providers/redux-toolkit/store";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <Provider store={store}>
    <Toaster position="top-right" />
      <div>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
