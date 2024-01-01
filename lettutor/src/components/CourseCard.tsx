import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Avatar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Course from "../types/course";
import courseLevels from "../constants/CourseLevels";
const CourseCard = ({ course }: { course: Course }) => {
    const navigator = useNavigation();
    return (
        <Card
            style={{ backgroundColor: "white" }}
            onPress={() =>
                navigator.navigate("Course Details", {
                    courseID: course?.id,
                })
            }
        >
            {course?.imageUrl ? (
                <Card.Cover source={{ uri: course?.imageUrl }} />
            ) : (
                ""
            )}

            <Card.Content>
                <View style={{ gap: 20, marginVertical: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {course?.name}
                    </Text>
                    <Text>{course?.description}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 18, color: "grey" }}>
                            {courseLevels[course?.level]}
                        </Text>
                        <Text style={{ fontSize: 18, color: "grey" }}>
                            {course?.topics?.length} Topics
                        </Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
};

export default CourseCard;
