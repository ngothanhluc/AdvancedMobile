import apiClient from "./axiosConfig";
import { Alert } from "react-native";
const PREFIX = "/auth";

const AuthAPI = {
    login: async (email: string, password: string) => {
        try {
            const response = await apiClient.post(`${PREFIX}/login`, {
                email,
                password,
            });
            return response.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
    register: async (email: string, password: string) => {
        try {
            const response = await apiClient.post(`${PREFIX}/register`, {
                email,
                password,
            });
            return response.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
    forgotPassword: async (email: string) => {
        try {
            const response = await apiClient.post(`user/forgotPassword`, {
                email,
            });
            return response;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
};

export default AuthAPI;
