import React from "react";
import apiClient from "./axiosConfig";
import { Alert } from "react-native";
const UserAPI = {
    getUserInfo: async () => {
        try {
            const response = await apiClient.get("/user/info");
            return response.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
};

export default UserAPI;
