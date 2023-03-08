import { createSlice } from "@reduxjs/toolkit";

export const userAddressSlice = createSlice({
    name: "userAddress",
    initialState: {
        userAddress: ""
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


