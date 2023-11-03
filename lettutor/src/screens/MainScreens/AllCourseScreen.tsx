import React from "react";
import { View, Text, ScrollView } from "react-native";
import CourseCard from "../../components/CourseCard";
import { SafeAreaView } from "react-native-safe-area-context";
const AllCourseScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ padding: 10 }}>
                <View style={{ padding: 10, gap: 20 }}>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AllCourseScreen;
