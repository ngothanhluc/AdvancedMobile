import React from "react";
import apiClient from "./axiosConfig";
import { Alert } from "react-native";
const UserAPI = {
    getLearnTopics: async () => {
        try {
            const response = await apiClient.get("/learn-topic");
            return response.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
    getTestPreparation: async () => {
        try {
            const response = await apiClient.get("/test-preparation");
            return response.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
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
