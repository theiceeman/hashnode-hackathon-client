import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "lib/general/helper-functions";

export const themeModeSlice = createSlice({
    name: "themeMode",
    initialState: {
        themeMode: ""
    },
    reducers: {
        setThemeMode: (state, action) => {
            console.log("setting theme mode..");
            let value = action.payload;
            value === "light"
                ? state.themeMode = 'light'
                : state.themeMode = 'dark';
            setLocalStorage('user_theme', value);

        },
    }
})
// SELECTOR
// allows app to update slice
export const { setThemeMode } = themeModeSlice.actions;


