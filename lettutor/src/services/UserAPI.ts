import React from "react";
import apiClient from "./axiosConfig";
import { Alert } from "react-native";
import { Booking } from "../types/booking";
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
    getTotalLessonTime: async () => {
        try {
            const response = await apiClient.get("/call/total");
            return response.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
    getUpcomingLesson: async () => {
        const now = Date.now();
        try {
            const response = await apiClient.get(
                `/booking/next?dateTime=${now}`
            );
            const listUpcomingLesson: Booking[] = response.data.data;
            if (listUpcomingLesson.length === 0) return null;
            listUpcomingLesson.sort((a, b) => {
                return (
                    a.scheduleDetailInfo.scheduleInfo.startTimestamp -
                    b.scheduleDetailInfo.scheduleInfo.startTimestamp
                );
            });
            return listUpcomingLesson[0];
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
    getAllUpcomingLesson: async ({
        page,
        perPage,
    }: {
        page: number;
        perPage: number;
    }) => {
        //const now = Date.now();
        const now = 1698208779401;
        try {
            const response = await apiClient.get(
                `/booking/list/student?page=${page}&perPage=${perPage}&dateTimeGte=${now}&orderBy=meeting&sortBy=asc`
            );
            return response.data.data;
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);
        }
    },
};

export default UserAPI;
