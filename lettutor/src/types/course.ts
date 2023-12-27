interface Course {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    level: string;
    reason: string;
    purpose: string;
    other_details: string;
    default_price: number;
    course_price: number;
    courseType: string | null;
    sectionType: string | null;
    visible: boolean;
    displayOrder: number | null;
    createdAt: string;
    updatedAt: string;
    topics: Topic[];
    categories: Category[];
}

interface Topic {
    id: string;
    courseId: string;
    orderCourse: number;
    name: string;
    beforeTheClassNotes: string | null;
    afterTheClassNotes: string | null;
    nameFile: string;
    numberOfPages: number | null;
    description: string;
    videoUrl: string | null;
    type: string | null;
    createdAt: string;
    updatedAt: string;
}

interface Category {
    id: string;
    title: string;
    description: string | null;
    key: string;
    displayOrder: number | null;
    createdAt: string;
    updatedAt: string;
}

export type { Course, Topic, Category };
export default Course;
