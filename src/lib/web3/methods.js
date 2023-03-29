import { BigNumber } from 'ethers';
import { TryCatchException } from 'lib/general/helper-functions';
const dotenv = require('dotenv')
dotenv.config()

const Web3 = require('web3');
const { abi: vaultAbi } = require('../../abi/Vault.json');
const { abi: compoundControllerAbi } = require('../../abi/CompoundController.json');
const { abi: userWalletAbi } = require('../../abi/UserWallet.json');
const { abi: erc20Abi } = require('../../abi/ERC20Token.json');




const VAULT_ADDRESS = process.env.REACT_APP_VAULT_ADDRESS;
const COMPOUND_CONTROLLER_ADDRESS = process.env.REACT_APP_COMPOUND_CONTROLLER_ADDRESS;
const USER_WALLET_ADDRESS = process.env.REACT_APP_USER_WALLET_ADDRESS;


export async function decimal(client, tokenAddress) {
    const contract = new client.eth.Contract(erc20Abi, tokenAddress.trim())
    const decimal = await contract.methods.decimals().call();
    // console.log({ decimal })
    return decimal;
}


export async function getUserVault(client, userAddress, tokenAddress) {
    const contract = new client.eth.Contract(vaultAbi, VAULT_ADDRESS.trim())
    const result = await contract.methods._getUserVault(userAddress, tokenAddress).call();
    console.log({ result })
}



export async function getUserTokenBalance(client, userAddress, tokenAddress) {
    const contract = new client.eth.Contract(vaultAbi, VAULT_ADDRESS.trim())
    const result = await contract.methods.getUserTokenBalance(userAddress, tokenAddress).call();
    return result;
}


export async function approve(client, from, tokenAddress, amount) {
    try {
        const contract = new client.eth.Contract(erc20Abi, tokenAddress.trim())
        let tokenDecimal = await decimal(client, tokenAddress);
        let _amount = BigNumber.from((amount * 10 ** tokenDecimal)
            .toLocaleString('fullwide', { useGrouping: false }));

        let action = await contract.methods.approve(USER_WALLET_ADDRESS, _amount)

        let txn = await client.eth.sendTransaction({
            from,
            to: tokenAddress.trim(),
            data: action.encodeABI(),
            // gas: await action.estimateGas({ from }),
            gas: 300000,   //   300000 GAS
            gasPrice: 500000000000  //  wei
        })
        console.log({ txn })
        return { ok: true, data: txn }
    } catch (error) {
        return TryCatchException(error)
    }
}

export async function deposit(client, from, tokenAddress, amount) {
    try {
        const contract = new client.eth.Contract(userWalletAbi, USER_WALLET_ADDRESS.trim())
        let tokenDecimal = await decimal(client, tokenAddress);
        let depositAmount = BigNumber.from((amount * 10 ** tokenDecimal)
            .toLocaleString('fullwide', { useGrouping: false }));

        let action = await contract.methods['0x47e7ef24'](tokenAddress, depositAmount)

        let txn = await client.eth.sendTransaction({
            from,
            to: USER_WALLET_ADDRESS,
            data: action.encodeABI(),
            gas: await action.estimateGas({ from }),
            // gas: 300000,   //   300000 GAS
            gasPrice: 500000000000  //  wei
        })
        console.log({ txn })

        return { ok: true, data: txn }
    } catch (error) {
        return TryCatchException(error)
    }
}
export async function withdrawFromVault(client, from, recipient, tokenAddress, amount) {
    try {
        const contract = new client.eth.Contract(userWalletAbi, USER_WALLET_ADDRESS.trim())
        let tokenDecimal = await decimal(client, tokenAddress);
        let withdrawAmount = BigNumber.from((amount * 10 ** tokenDecimal)
            .toLocaleString('fullwide', { useGrouping: false }));

        let action = await contract.methods.withdrawFromVault(recipient, tokenAddress, withdrawAmount)

        let txn = await client.eth.sendTransaction({
            from,
            to: USER_WALLET_ADDRESS,
            data: action.encodeABI(),
            gas: await action.estimateGas({ from }),
            // gas: 300000,   //   300000 GAS
            gasPrice: 500000000000  //  wei
        })
        // console.log({ txn });return;

        return { ok: true, data: txn }
    } catch (error) {
        return TryCatchException(error)
    }
}

export async function investInCompound(client,from, tokenAddress, amount) {
    try {
        const contract = new client.eth.Contract(userWalletAbi, USER_WALLET_ADDRESS.trim())
        let tokenUnderlying = getTokenUnderlyingAddress(tokenAddress)
        let tokenDecimal = await decimal(client, tokenAddress);
        let investAmount = BigNumber.from((amount * 10 ** tokenDecimal)
            .toLocaleString('fullwide', { useGrouping: false }));

        let action = await contract.methods.investInCompound(tokenAddress, tokenUnderlying, investAmount)

        let txn = await client.eth.sendTransaction({
            from,
            to: USER_WALLET_ADDRESS,
            data: action.encodeABI(),
            gas: await action.estimateGas({ from }),
            gasPrice: 500000000000  //  wei
        })
        // console.log({ txn });return;

        return { ok: true, data: txn }
    } catch (error) {
        return TryCatchException(error)
    }
}



const getTokenUnderlyingAddress = (tokenAddress) => {
    switch (tokenAddress) {
        case process.env.REACT_APP_USDC_ADDRESS:
            return process.env.REACT_APP_CUSDC_ADDRESS
            break;
        case process.env.REACT_APP_DAI_ADDRESS:
            return process.env.REACT_APP_CDAI_ADDRESS
            break;
        case process.env.REACT_APP_UNI_ADDRESS:
            return process.env.REACT_APP_CUNI_ADDRESS
            break;
        case process.env.REACT_APP_WBTC_ADDRESS:
            return process.env.REACT_APP_CWBTC_ADDRESS
            break;
        case process.env.REACT_APP_USDT_ADDRESS:
            return process.env.REACT_APP_CUSDT_ADDRESS
            break;
        default:
            return null
            break;
    }
}