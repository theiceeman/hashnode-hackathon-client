import {
    createSlice,
    configureStore
} from "@reduxjs/toolkit";
import { themeModeSlice } from "./reducers/theme";
import { userAddressSlice } from "./reducers/user-address";


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
        userAddress: userAddressSlice.reducer,
        themeMode: themeModeSlice.reducer
    }
})



