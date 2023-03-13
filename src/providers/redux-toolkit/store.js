import {
    createSlice,
    configureStore
} from "@reduxjs/toolkit";
import { themeModeSlice } from "./reducers/theme-reducer";
import { userAddressSlice, userProviderSlice, userTotalBalanceSlice } from "./reducers/user.reducer";


// REDUCER
const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: ""
    },
    reducers: {
        setSearchSelector: (state, action) => {
            state.search = action.payload;
        }
    }
})
// allows app to update the search slice
export const { setSearchSelector } = searchSlice.actions;

// SELECTOR
// selector that will return the value we need for the particular component 
export const selectSearch = (state) => state.search.search



// STORE
// attaches search slice to the app root store reducer
export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        themeMode: themeModeSlice.reducer,

        userAddress: userAddressSlice.reducer,
        // userProvider: userProviderSlice.reducer,
        userTotalBalance: userTotalBalanceSlice.reducer,
    }
})



