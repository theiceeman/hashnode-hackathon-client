import Routes from "routes";
import { Provider } from "react-redux";
import store from "./providers/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
