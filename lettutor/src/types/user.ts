export interface User {
    id: string;
    email: string;
    name: string;
    avatar: string;
    country: string;
    phone: string;
    roles: string[];
    language: string;
    birthday: string;
    isActivated: boolean;
    tutorInfo: TutorInfo | null;
    walletInfo: WalletInfo;
    requireNote: string;
    level: string;
    learnTopics: {
        id: number;
        key: string;
        name: string;
    }[];
    testPreparations: {
        id: number;
        key: string;
        name: string;
    }[];
    isPhoneActivated: boolean;
    timezone: number;
    referralInfo: ReferralInfo;
    studySchedule: string;
    canSendMessage: boolean;
    studentGroup: string | null;
    studentInfo: any | null; // Consider refining the type based on expected data
    avgRating: number;
}

interface TutorInfo {
    id: string;
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
    resume: any | null; // Consider refining the type based on expected data
    rating: number;
    isActivated: boolean;
    isNative: boolean;
    youtubeVideoId: string | null;
}

interface WalletInfo {
    amount: string;
    isBlocked: boolean;
    bonus: number;
}

interface ReferralInfo {
    referralCode: string;
    referralPackInfo: ReferralPackInfo;
}

interface ReferralPackInfo {
    earnPercent: number;
}
