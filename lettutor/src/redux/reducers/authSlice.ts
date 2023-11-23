import AsyncStorage from "@react-native-async-storage/async-storage";
import * as types from "../Constants/action-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: string;
    email: string;
    name: string;
    avatar: string;
    country: string;
    phone: string;
    roles: string[];
    language: string | null;
    birthday: string;
    isActivated: boolean;
    walletInfo: {
        id: string;
        userId: string;
        amount: string;
        isBlocked: boolean;
        createdAt: string;
        updatedAt: string;
        bonus: number;
    };
    courses: any[];
    requireNote: string;
    level: string;
    learnTopics: {
        id: number;
        key: string;
        name: string;
    }[];
    testPreparations: any[];
    isPhoneActivated: boolean;
    timezone: number;
    studySchedule: string;
    canSendMessage: boolean;
}

export interface Tokens {
    access: {
        token: string;
        expires: string;
    };
    refresh: {
        token: string;
        expires: string;
    };
}
interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    tokens: Tokens | null;
    error: string | null;
}
const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    tokens: null,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.error = null;
        },
        loginSuccess: (
            state,
            action: PayloadAction<{ user: User; tokens: Tokens }>
        ) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.tokens = action.payload.tokens;
            AsyncStorage.setItem(
                "access_token",
                action.payload.tokens.access.token
            );
            AsyncStorage.setItem(
                "refresh_token",
                action.payload.tokens.refresh.token
            );
            AsyncStorage.setItem(
                "access_token_expires",
                action.payload.tokens.access.expires
            );
            AsyncStorage.setItem(
                "refresh_token_expires",
                action.payload.tokens.refresh.expires
            );
        },
        loginFailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.tokens = null;
            AsyncStorage.removeItem("access_token");
        },
    },
});

export const { loginRequest, loginSuccess, loginFailed, logout } =
    authSlice.actions;
export default authSlice.reducer;
