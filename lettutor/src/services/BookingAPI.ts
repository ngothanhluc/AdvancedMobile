import React from "react";
import apiClient from "./axiosConfig";
import { Alert } from "react-native";
import { Booking } from "../types/booking";
const BookingAPI = {
    getSchedulesByID: async (tutorId: string, page: number) => {
        try {
            const response = await apiClient.get(
                `/schedule?tutorId=${tutorId}&page=${page}`
            );
            return response.data.scheduleOfTutor;
        } catch (error) {
            console.log(error);
        }
    },
    bookSchedule: async (scheduleDetailId: string, note: string) => {
        try {
            const response = await apiClient.post(`/booking`, {
                scheduleDetailIds: [scheduleDetailId],
                note: note,
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    cancelBooking: async (bookingId: string) => {
        try {
            const response = await apiClient.delete(`/booking`, {
                data: {
                    scheduleDetailIds: [bookingId],
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
};

export default BookingAPI;
