import VAULT_ABI from "../abi/vault/Vault.sol/Vault.json";
import { Contract, utils } from "ethers";
import { useContractCall } from "@usedapp/core";
import { ethers } from "@usedapp/core/node_modules/ethers";
require("dotenv").config();

export function useGetUserTokenBalance(userAddress, tokenAddress) {
  const { abi } = VAULT_ABI;
  const vaultAddress = process.env.REACT_APP_VAULT_ADDRESS;
  const vaultInterface = new ethers.utils.Interface(abi);


  console.log({ vaultAddress, userAddress, tokenAddress, abi });
  const result =
    useContractCall(
      userAddress &&
        tokenAddress && {
          abi: vaultInterface,
          address: vaultAddress,
          method: 'getUserTokenBalance',
          args: [userAddress, tokenAddress],
        }
    ) ?? [];
    console.log(result);

  // return { send, state };

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
}
