export interface Schedule {
    id: string;
    tutorId: string;
    startTime: string;
    endTime: string;
    startTimestamp: number;
    endTimestamp: number;
    createdAt: string;
    isBooked: boolean;
    scheduleDetails: ScheduleDetail[];
}

interface ScheduleDetail {
    startPeriodTimestamp: number;
    endPeriodTimestamp: number;
    id: string;
    scheduleId: string;
    startPeriod: string;
    endPeriod: string;
    createdAt: string;
    updatedAt: string;
    bookingInfo: BookingInfo[];
    isBooked: boolean;
}

interface BookingInfo {
    createdAtTimeStamp: number;
    updatedAtTimeStamp: number;
    id: string;
    isDeleted: boolean;
    createdAt: string;
    scheduleDetailId: string;
    updatedAt: string;
    cancelReasonId: number | null;
    userId: string;
}
