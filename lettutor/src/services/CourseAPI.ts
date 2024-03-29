import apiClient from "./axiosConfig";
import React from "react";
interface getCoursesParams {
    perPage: number;
    page?: number;
}
interface searchCoursesParams {
    perPage: number;
    page?: number;
    search?: string;
}

const PREFIX = "/course";
const CourseAPI = {
    getCourses: async ({ page, perPage }: getCoursesParams) => {
        try {
            const response = await apiClient.get(
                `${PREFIX}?page=${page}&size=${perPage}`
            );
            return response.data.data;
        } catch (error: any) {
            console.log(error);
        }
    },
    searchCourses: async ({ page, perPage, search }: searchCoursesParams) => {
        try {
            const response = await apiClient.get(
                `${PREFIX}?page=${page}&size=${perPage}&q=${search}`
            );
            return response.data;
        } catch (error: any) {
            console.log(error);
        }
    },
    getCourseDetails: async (id: string) => {
        try {
            const response = await apiClient.get(`${PREFIX}/${id}`);
            return response.data.data;
        } catch (error: any) {
            console.log(error);
        }
    },
};

export default CourseAPI;
