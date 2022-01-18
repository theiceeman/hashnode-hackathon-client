import { useWeb3 } from "@3rdweb/hooks";
import { useEffect, useMemo, useState, useCallback } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

//use the wallet instead of private keys
const TokenComponent = () => {
  const { provider } = useWeb3();
  const [balance, setBalance] = useState(0);

  const sdk = useMemo(() => {
    if (provider) {
      return new ThirdwebSDK(provider.getSigner())
    }

    return undefined;
  }, [provider]);

//instantiate the sdk
  const tokenModule = useMemo(() => {
    if (sdk) {
      return sdk.getTokenModule("0xBda298459E3d1D4a6867bBd7c87Ac096f641C915")
    }

    return undefined;
  }, [sdk]);

//get the balance from our token module
  useEffect(() => {
    const getBalance = async () => {
      const tokenBalance = await tokenModule.balance()
      setBalance(tokenBalance.displayValue); 
    }

    if (tokenModule) {
      getBalance()
    };
  }, [tokenModule]);

//mint our token. remember, ethereum deals different with numbers.
// that's why we need to convert our amount
  const amount = ethers.utils.parseUnits("1000", 18);
  const onClick = useCallback(() => {
    

    tokenModule.mint(amount);

  }, [amount, tokenModule]);

  return (
    <div>
      Balance: {balance}
      <br />
        <button style={{backgroundColor: "blue", padding: "20px 30px", color: "white", cursor: "pointer"}} onClick={onClick}>Get me a 1000 Coins!</button>

    </div>
  );
};
export default TokenComponent;