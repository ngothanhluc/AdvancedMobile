interface TutorDetails {
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
    rating: number;
    isNative: boolean | null;
    youtubeVideoId: string | null;
    User: {
        id: string;
        level: string;
        avatar: string;
        name: string;
        country: string;
        language: string;
        isPublicRecord: boolean;
        caredByStaffId: string | null;
        zaloUserId: string | null;
        studentGroupId: string | null;
        courses: Array<{
            id: string;
            name: string;
            TutorCourse: {
                UserId: string;
                CourseId: string;
                createdAt: string;
                updatedAt: string;
            };
        }>;
    };
    isFavorite: boolean;
    avgRating: number;
    totalFeedback: number;
}
export default TutorDetails;
