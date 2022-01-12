import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react';
import './App.css';
import TokenComponent from './components/token';
const supportedChainIds = [1, 4, 137, 250, 43114, 80001];
const connectors = {
  injected: {},
  magic: { 
  },
  walletconnect: {},
  walletlink: {
    appName: "thirdweb - demo",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};

function App() {
  return (
    <div className='App'>
      <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <ConnectWallet />
      <TokenComponent />
    </ThirdwebProvider>
    </div>
  )
}

export default App;
