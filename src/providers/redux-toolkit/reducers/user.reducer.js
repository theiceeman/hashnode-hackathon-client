import { createSlice } from "@reduxjs/toolkit";
import tokens from "components/_mock_/coin";


// USER_ADDRESS
export const userAddressSlice = createSlice({
    name: "userAddress",
    initialState: {
        userAddress: null
    },
    reducers: {
        setUserAddress: (state, action) => {
            state.userAddress = action.payload;
        }
    }
})
// SELECTOR
// allows app to update slice
export const { setUserAddress } = userAddressSlice.actions;



// USER_PROVIDER
export const userProviderSlice = createSlice({
    name: "userProvider",
    initialState: {
        userProvider: {}
    },
    reducers: {
        setUserProvider: (state, action) => {
            state.userProvider = action.payload;
        }
    }
})
// SELECTOR
// allows app to update slice
export const { setUserProvider } = userProviderSlice.actions;



// USER_TOTAL_BALANCE
export const userTotalBalanceSlice = createSlice({
    name: "userTotalBalance",
    initialState: {
        userTotalBalance: 0
    },
    reducers: {
        setUserTotalBalance: (state, action) => {
            state.userTotalBalance = action.payload;
        }
    }
})
// SELECTOR
// allows app to update slice
export const { setUserTotalBalance } = userTotalBalanceSlice.actions;



// WALLET_TOKENS
export const walletTokensSlice = createSlice({
    name: "walletTokens",
    initialState: {
        walletTokens: tokens
    },
    reducers: {
        setWalletTokens: (state, action) => {
            state.walletTokens = action.payload;
        }
    }
})
// SELECTOR
// allows app to update slice
export const { setWalletTokens } = walletTokensSlice.actions;




