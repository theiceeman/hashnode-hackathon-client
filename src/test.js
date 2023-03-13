
const Web3 = require('web3');
const { abi: userWalletAbi } = require('./abi/UserWallet.json');
const { abi: erc20Abi } = require('./abi/ERC20Token.json');
const dotenv = require('dotenv');
const { BigNumber } = require('ethers');
dotenv.config()

const PROVIDER = 'http://127.0.0.1:8545/';
const DAI_ADDRESS = process.env.REACT_APP_DAI_ADDRESS;
const USER_WALLET_ADDRESS = process.env.REACT_APP_USER_WALLET_ADDRESS;

const client = new Web3(PROVIDER);



async function approve(amount, from, fromPrivateKey) {
    const contract = new client.eth.Contract(erc20Abi, DAI_ADDRESS.trim())
    let _amount = BigNumber.from((amount * 10 ** 18)
        .toLocaleString('fullwide', { useGrouping: false }));
    let action = await contract.methods.approve(USER_WALLET_ADDRESS, _amount)

    let tx = {
        from,
        to: DAI_ADDRESS.trim(),
        data: action.encodeABI(),
        gas: 1500000,
    }
    const createTransaction = await client.eth.accounts.signTransaction(
        tx,
        fromPrivateKey
    );
    let approve = await client.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log({ approve })
}


async function deposit(amount, from, fromPrivateKey) {
    const contract = new client.eth.Contract(userWalletAbi, USER_WALLET_ADDRESS.trim())
    let _depositAmount = BigNumber.from((amount * 10 ** 18)
        .toLocaleString('fullwide', { useGrouping: false }));
    let action = await contract.methods.deposit(DAI_ADDRESS, _depositAmount)

    let tx = {
        from,
        to: USER_WALLET_ADDRESS.trim(),
        data: action.encodeABI(),
        gas: 1500000,
    }
    const createTransaction = await client.eth.accounts.signTransaction(
        tx,
        fromPrivateKey
    );
    let deposit = await client.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log({ deposit })
}

const FROM = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
const FROM_PRIVATE_KEY = 'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'

approve(10, FROM, FROM_PRIVATE_KEY).then(() => {
    deposit(10, FROM, FROM_PRIVATE_KEY)
})