export interface Booking {
    createdAtTimeStamp: number;
    updatedAtTimeStamp: number;
    id: string;
    userId: string;
    scheduleDetailId: string;
    tutorMeetingLink: string;
    studentMeetingLink: string;
    googleMeetLink: string | null;
    studentRequest: string | null;
    tutorReview: string | null;
    scoreByTutor: string | null;
    createdAt: string;
    updatedAt: string;
    recordUrl: string | null;
    cancelReasonId: string | null;
    lessonPlanId: string | null;
    cancelNote: string | null;
    calendarId: string | null;
    isDeleted: boolean;
    isTrial: boolean;
    convertedLesson: number;
    scheduleDetailInfo: ScheduleDetail;
    classReview: ClassReview | null;
    trialBookingReview: string | null;
    showRecordUrl: boolean;
    studentMaterials: string[];
    feedbacks: string[];
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
    scheduleInfo: Schedule;
}

interface Schedule {
    date: string;
    startTimestamp: number;
    endTimestamp: number;
    id: string;
    tutorId: string;
    startTime: string;
    endTime: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    tutorInfo: Tutor;
}

interface Tutor {
    id: string;
    level: string;
    email: string;
    google: string | null;
    facebook: string | null;
    apple: string | null;
    avatar: string;
    name: string;
    country: string;
    phone: string;
    language: string | null;
    birthday: string;
    requestPassword: boolean;
    isActivated: boolean;
    isPhoneActivated: boolean | null;
    requireNote: string | null;
    timezone: number;
    phoneAuth: string | null;
    isPhoneAuthActivated: boolean;
    studySchedule: string | null;
    canSendMessage: boolean;
    isPublicRecord: boolean;
    caredByStaffId: string | null;
    zaloUserId: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    studentGroupId: string | null;
}
interface ClassReview {
    bookingId: string;
    lessonStatusId: number;
    book: string;
    unit: string;
    lesson: string;
    page: number | null;
    lessonProgress: string;
    behaviorRating: number;
    behaviorComment: string;
    listeningRating: number;
    listeningComment: string;
    speakingRating: number;
    speakingComment: string;
    vocabularyRating: number;
    vocabularyComment: string;
    homeworkComment: string;
    overallComment: string;
    lessonStatus: LessonStatus;
}

interface LessonStatus {
    id: number;
    status: string;
    createdAt: string;
    updatedAt: string;
}
