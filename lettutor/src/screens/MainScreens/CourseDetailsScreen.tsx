import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import COLORS from "../../constants/Colors";
import CourseAPI from "../../services/CourseAPI";
import { useQuery } from "@tanstack/react-query";
import Course from "../../types/course";
import courseLevels from "../../constants/CourseLevels";
import LoadingOverlay from "../../components/LoadingOverlay";
import { useNavigation } from "@react-navigation/native";
const CourseDetailsScreen = ({ route }: any) => {
    const { courseID } = route.params;
    const navigator = useNavigation();
    const { data: course, isLoading } = useQuery<Course>({
        queryKey: ["course", courseID],
        queryFn: () => CourseAPI.getCourseDetails(courseID),
    });
    if (isLoading) return <LoadingOverlay message="Loading..." />;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView>
                <Image
                    style={{
                        width: "100%",
                        height: 250,
                        objectFit: "cover",
                        marginBottom: 10,
                    }}
                    source={{ uri: course?.imageUrl }}
                ></Image>
                <View style={{ padding: 10, gap: 20 }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                marginBottom: 10,
                            }}
                        >
                            {course?.name}
                        </Text>
                        <Text>{course?.description}</Text>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "bold",
                            }}
                        >
                            Overview
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                paddingHorizontal: 10,
                            }}
                        >
                            <Icon
                                source="crosshairs-question"
                                size={30}
                                color={COLORS.secondary}
                            ></Icon>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        marginBottom: 10,
                                    }}
                                >
                                    Why take this course?
                                </Text>
                                <Text style={{ lineHeight: 20 }}>
                                    {course?.reason}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}
                    >
                        <Icon
                            source="crosshairs-question"
                            size={30}
                            color={COLORS.secondary}
                        ></Icon>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    marginBottom: 10,
                                }}
                            >
                                What will you be able to do?
                            </Text>
                            <Text style={{ lineHeight: 20 }}>
                                {course?.purpose}
                            </Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Experience Level
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingHorizontal: 10,
                            }}
                        >
                            <Icon
                                source="human-handsup"
                                size={24}
                                color={COLORS.secondary}
                            ></Icon>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    paddingHorizontal: 10,
                                }}
                            >
                                {course?.level
                                    ? courseLevels[course?.level]
                                    : "Any Level"}
                            </Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Course Length
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingHorizontal: 10,
                            }}
                        >
                            <Icon
                                source="timeline-outline"
                                size={24}
                                color={COLORS.secondary}
                            ></Icon>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    paddingHorizontal: 10,
                                }}
                            >
                                {course?.topics.length} Topics
                            </Text>
                        </View>
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                marginBottom: 10,
                            }}
                        >
                            List of Topics
                        </Text>
                        <View style={{ gap: 16 }}>
                            {course?.topics.map((topic) => (
                                <Pressable
                                    key={topic.id}
                                    style={{
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        backgroundColor: COLORS.background,
                                        borderRadius: 10,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 2,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,
                                        elevation: 2,
                                    }}
                                    onPress={() => {
                                        navigator.navigate("PDF View", {
                                            pdfUrl: topic.nameFile,
                                        });
                                    }}
                                >
                                    <Text style={{ fontSize: 16 }}>
                                        {`${topic.orderCourse}. ${topic.name}`}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CourseDetailsScreen;
