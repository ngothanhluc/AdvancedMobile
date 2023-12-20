interface Tutor {
    level: "HIGHER_BEGINNER" | "LOWER_BEGINNER" | string;
    email: string;
    google: string | null;
    facebook: string | null;
    apple: string | null;
    avatar: string;
    name: string;
    country: string;
    phone: string;
    language: string;
    birthday: string;
    requestPassword: boolean;
    isActivated: boolean;
    isPhoneActivated: boolean | null;
    requireNote: boolean | null;
    timezone: number;
    phoneAuth: string | null;
    isPhoneAuthActivated: boolean;
    studySchedule: string;
    canSendMessage: boolean;
    isPublicRecord: boolean;
    caredByStaffId: string | null;
    zaloUserId: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    studentGroupId: string | null;
    feedbacks: Feedback[];
    id: string;
    userId: string;
    video: string;
    bio: string;
    education: string;
    experience: string;
    profession: string;
    accent: string | null;
    targetStudent: string;
    interests: string;
    languages: string;
    specialties: string;
    resume: string | null;
    rating: number;
    isNative: boolean | null;
    youtubeVideoId: string | null;
    price: number;
    isFavoriteTutor: boolean;
    isOnline: boolean;
}
interface Feedback {
    id: string;
    bookingId: string;
    firstId: string;
    secondId: string;
    rating: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    firstInfo: FirstInfo;
}
interface FirstInfo {
    level: string;
    email: string;
    google: string | null;
    facebook: string | null;
    apple: string | null;
    avatar: string;
    name: string;
    country: string;
    phone: string;
    language: string;
    birthday: string;
    requestPassword: boolean;
    isActivated: boolean;
    isPhoneActivated: boolean;
    requireNote: string;
    timezone: number;
    phoneAuth: string | null;
    isPhoneAuthActivated: boolean;
    studySchedule: string;
    canSendMessage: boolean;
    isPublicRecord: boolean;
    caredByStaffId: string | null;
    zaloUserId: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    studentGroupId: string | null;
}
interface FavoriteTutor {
    id: string;
    firstId: string;
    secondId: string;
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    secondInfo: SecondInfo;
}

interface SecondInfo {
    id: string;
    level: string | null;
    email: string;
    google: string | null;
    facebook: string | null;
    apple: string | null;
    avatar: string | null;
    name: string;
    country: string | null;
    phone: string | null;
    language: string | null;
    birthday: string | null; // ISO 8601 date string
    requestPassword: boolean;
    isActivated: boolean;
    isPhoneActivated: boolean | null;
    requireNote: boolean | null;
    timezone: string | null;
    phoneAuth: string | null;
    isPhoneAuthActivated: boolean;
    studySchedule: string | null; // JSON string or object?
    canSendMessage: boolean;
    isPublicRecord: boolean;
    caredByStaffId: string | null;
    zaloUserId: string | null;
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    deletedAt: string | null; // ISO 8601 date string
    studentGroupId: string | null;
    tutorInfo: TutorInfo;
}

interface TutorInfo {
    id: string;
    userId: string;
    video: string;
    bio: string;
    education: string;
    experience: string;
    profession: string;
    accent: string;
    targetStudent: string;
    interests: string;
    languages: string[]; // comma-separated list?
    specialties: string[]; // comma-separated list?
    resume: string;
    rating: number | null;
    isActivated: boolean;
    isNative: boolean | null;
    youtubeVideoId: string | null;
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
}
export type { Tutor, FavoriteTutor };
export default Tutor;
