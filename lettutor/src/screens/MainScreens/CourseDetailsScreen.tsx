import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const CourseDetailsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ padding: 10 }}>
                <View style={{ padding: 10, gap: 20 }}>
                    <Text>Course Details</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CourseDetailsScreen;
