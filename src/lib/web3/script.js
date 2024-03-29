
const Web3 = require('web3');
const { BigNumber } = require("@ethersproject/bignumber");
const dotenv = require('dotenv')
dotenv.config()



const SWAP_ROUTER_ADDRESS_BSC = '0xe41f0FF3f4d90Bb1c4e32714532e064F9eA95F19';
const BSC_CHAIN_ID = 56;


const SWAP_ROUTER_ADDRESS_MATIC = '0x2F34767898CbCb2cd24F86AC4E61C785D49B2df7';
const MATIC_CHAIN_ID = 137;



export async function connectToBrowserProvider() {
    const { ethereum } = window;
    if (ethereum) {
        if (ethereum) {
            window.web3 = new Web3(ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        }

        await confirmUserNetwork()

        let address = await getAddress()
        // console.log({ address })
        return address;

    } else {
        console.log("Please install a browser wallet...");
    }
}
export async function loadProvider() {
    const { ethereum } = window;
    if (!ethereum) {
        console.log("Please install a browser wallet...");
        return;
    }
    if (ethereum) {
        window.web3 = new Web3(ethereum);
        await window.ethereum.enable();
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    }
    return window.web3
}

export async function confirmUserNetwork() {
    const { ethereum } = window;
    let data;

    if (!ethereum) {
        data = "Browser is not Web3 enabled. Install MetaMask!"
        return { ok: false, data };
    }
    let userChainId = parseInt(await ethereum.request({ method: "eth_chainId" }), 16);
    let ChainId = Number(process.env.REACT_APP_CHAIN_ID);

    if (userChainId !== ChainId) {
        data = "You are not connected to the " + getNetworkName(ChainId) + " Network!"
        return { ok: false, data };
    }
    data = "Connected to " + getNetworkName(ChainId) + " Network";
    return { ok: true, data }


}

export const connectedNetworkChainId = async () => {
    const { ethereum } = window;
    if (!ethereum) {
        console.error("Browser is not Web3 enabled. Install MetaMask!");
        return;
    }
    let userChainId = await ethereum.request({ method: "eth_chainId" });
    return parseInt(userChainId, 16)
}

const getAddress = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
};

export const checkIfWalletIsConnected = async () => {
    try {
        const { ethereum } = window;
        if (!ethereum) {
            console.error("Browser is not Web3 enabled. Install MetaMask!");
            return;
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
            const account = accounts[0];
            return { ok: true, message: account };
        } else {
            throw "No authorized account found!";
        }
    } catch (error) {
        return { ok: false, message: error };
    }
}

const getNetworkName = (chainId) => {
    switch (chainId) {
        case 1:
            return 'Ethereum Mainnet';
        case 5:
            return 'Goerli Testnet';
        case 56:
            return 'BSC';
        case 137:
            return 'MATIC';
        case 567:
            return 'Fantom';
        case 31337:
            return 'Localhost';
        default:
            return 'Unknown';
    }
}




