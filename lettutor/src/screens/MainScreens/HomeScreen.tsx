import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import LoadingOverlay from "../../components/LoadingOverlay";
import TutorCard from "../../components/TutorCard";
import COLORS from "../../constants/Colors";
import { Specialty, setSpecialties } from "../../redux/reducers/specialtySlice";
import TutorAPI from "../../services/TutorAPI";
import UserAPI from "../../services/UserAPI";
import type Tutor from "../../types/tutor";
const HomeScreen = () => {
    const dispatch = useDispatch();
    const date = new Date();
    const handleEnterLessonRoom = () => {
        console.log("Enter Lesson Room");
    };
    const { data: tutors, isLoading } = useQuery<Tutor[]>({
        queryKey: ["tutorsHomePage"],
        queryFn: () => TutorAPI.getTutors({ perPage: 9, page: 1 }),
    });
    const { data: learnTopics } = useQuery<Specialty[]>({
        queryKey: ["learnTopics"],
        queryFn: () => UserAPI.getLearnTopics(),
    });
    const { data: testPreparation } = useQuery<Specialty[]>({
        queryKey: ["testPreparation"],
        queryFn: () => UserAPI.getTestPreparation(),
    });
    let specialties: Specialty[] = [];
    if (learnTopics) {
        specialties = specialties.concat(learnTopics);
    }
    if (testPreparation) {
        specialties = specialties.concat(testPreparation);
    }
    specialties.unshift({ key: "all", name: "All" });
    dispatch(setSpecialties({ specialties: specialties }));
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
