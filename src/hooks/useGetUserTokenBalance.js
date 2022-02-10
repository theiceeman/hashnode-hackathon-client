import VAULT_ABI from "../abi/vault/Vault.sol/Vault.json";
import { Contract, utils } from "ethers";
import { useContractFunction } from "@usedapp/core";
import { DAppProvider, ChainId } from "@usedapp/core";
require("dotenv").config();

export const useGetUserTokenBalance = () => {
  const { abi } = VAULT_ABI;
  const vaultAddress = process.env.REACT_APP_VAULT_ADDRESS;
  const vaultInterface = new utils.Interface(abi);
  const vaultContract = new Contract(vaultAddress, vaultInterface);
  const { send: getUserTokenBalance, state: getUserTokenBalanceState } =
    useContractFunction(vaultContract, "getUserTokenBalance", ChainId.Hardhat, {
      transactionName: "Fetch User Token Balance",
    });
  return { getUserTokenBalance, getUserTokenBalanceState };
};
