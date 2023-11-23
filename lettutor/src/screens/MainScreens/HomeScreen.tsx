import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TutorCard from "../../components/TutorCard";
import COLORS from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type Tutor from "../../types/tutor";
import TutorAPI from "../../services/TutorAPI";
import { useQuery } from "@tanstack/react-query";
import LoadingOverlay from "../../components/LoadingOverlay";
const HomeScreen = () => {
    const date = new Date();
    const handleEnterLessonRoom = () => {
        console.log("Enter Lesson Room");
    };
    const { data: tutors, isLoading } = useQuery<Tutor[]>({
        queryKey: ["tutorsHomePage"],
        queryFn: () => TutorAPI.getTutors(),
    });
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.homeHeader}>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 20,
                                fontWeight: "bold",
                            }}
                        >
                            Upcoming Lesson
                        </Text>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                            }}
                        >
                            {date.toISOString()}
                        </Text>
                        <Pressable onPress={handleEnterLessonRoom}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: 10,
                                    backgroundColor: "white",
                                    borderRadius: 12,
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="presentation-play"
                                    size={24}
                                    color={COLORS.secondary}
                                />
                                <Text
                                    style={{
                                        color: COLORS.secondary,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Enter Lesson Room
                                </Text>
                            </View>
                        </Pressable>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                            }}
                        >
                            Total Lesson Time: 509 hours 35 minutes
                        </Text>
                    </View>
                    <View style={styles.tutorList}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Recommended Tutor
                        </Text>
                        {isLoading ? (
                            <LoadingOverlay message={"Loading Tutors..."} />
                        ) : (
                            <>
                                {tutors &&
                                    tutors?.map((tutor) => (
                                        <TutorCard
                                            key={tutor.id}
                                            bookAble={true}
                                            tutor={tutor}
                                        />
                                    ))}
                            </>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    homeHeader: {
        padding: 20,
        gap: 6,
        width: "100%",
        backgroundColor: COLORS.primary,
        flexDirection: "column",
        alignItems: "center",
    },
    tutorList: {
        flexDirection: "column",
        padding: 20,
    },
});
export default HomeScreen;
