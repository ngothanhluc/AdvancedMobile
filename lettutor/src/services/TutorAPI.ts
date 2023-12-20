import React from "react";
import apiClient from "./axiosConfig";
import { Alert } from "react-native";
interface getTutorsParams {
    perPage: number;
    page?: number;
}
interface searchTutorsParams {
    page?: number;
    perPage?: number;
    search?: string;
    filters?: {
        specialties?: string[];
        nationality?: Map<string, boolean>;
    };
}

const PREFIX = "/tutor";
const TutorAPI = {
    getTutors: async ({ perPage, page }: getTutorsParams) => {
        try {
            const response = await apiClient.get(
                `${PREFIX}/more?perPage=${perPage}&page=${page}`
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
    searchTutors: async (params: searchTutorsParams) => {
        try {
            const response = await apiClient.post(`${PREFIX}/search`, params);
            return response.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
    addFavoriteTutor: async (tutorId: string) => {
        try {
            const response = await apiClient.post(`/user/manageFavoriteTutor`, {
                tutorId,
            });
            return response.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
};
export default TutorAPI;
