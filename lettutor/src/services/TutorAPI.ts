import React from "react";
import apiClient from "./axiosConfig";
import { Alert } from "react-native";
const PREFIX = "/tutor";
const TutorAPI = {
    getTutors: async () => {
        try {
            const response = await apiClient.get(
                `${PREFIX}/more?perPage=9&page=1`
            );
            return response.data.tutors.rows;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
    getTutorByID: async (id: string) => {
        try {
            const response = await apiClient.get(`${PREFIX}/${id}`);
            return response.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
};
export default TutorAPI;
