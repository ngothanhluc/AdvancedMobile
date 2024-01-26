import * as types from "../Constants/action-types";
import { createSlice } from "@reduxjs/toolkit";

export interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: "en",
};

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
