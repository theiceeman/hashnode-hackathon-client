import VAULT_ABI from "../abi/vault/Vault.sol/Vault.json";
import { Contract, utils } from "ethers";
import { useContractCall } from "@usedapp/core";
import { ethers } from "@usedapp/core/node_modules/ethers";
require("dotenv").config();

export const useGetUserTokenBalance = (userAddress, tokenAddress) => {
  const { abi } = VAULT_ABI;
  const vaultAddress = process.env.REACT_APP_VAULT_ADDRESS;
  const vaultInterface = new utils.Interface(abi);
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();
  const vaultContract = new Contract(vaultAddress, vaultInterface, signer);
  console.log({ userAddress, tokenAddress, vaultContract });

  /*   
    abi: Interface
    address: string
    method: string
    args: any[] 
  */
  const { send, state } = useContractCall({
    abi: abi,
    address: vaultAddress,
    method: "getUserTokenBalance",
    args: [userAddress, tokenAddress],
  });
  return { send, state };

  /* const { value: getUserTokenBalance, error: getUserTokenBalanceState } =
  
    useContractCall(
      userAddress &&
        tokenAddress && {
          contract: vaultContract, // instance of called contract
          method: "getUserTokenBalance", // Method to be called
          args: [userAddress, tokenAddress], // Method arguments - address to be checked for balance
        }
    ) ?? {};
  console.log({ getUserTokenBalance, getUserTokenBalanceState });

  return { getUserTokenBalance, getUserTokenBalanceState }; */
};
