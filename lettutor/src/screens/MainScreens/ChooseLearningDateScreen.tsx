import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import BookingAPI from "../../services/BookingAPI";
import type { Schedule } from "../../types/schedule";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-paper";
const ChooseLearningDateScreen = ({ route }: any) => {
    const navigation = useNavigation();
    const { tutorId } = route.params;
    const [page, setPage] = React.useState(0);
    // const {
    //     data: schedules,
    //     isLoading,
    //     isError,
    // } = useQuery<Schedule[]>({
    //     queryKey: ["schedule", tutorId],
    //     queryFn: () => BookingAPI.getSchedulesByID(tutorId, page),
    // });
    function showDays() {
        const today = new Date();
        const days: any[] = [];

        for (let i = 0; i < 7; i++) {
            const day = new Date(today);
            day.setDate(today.getDate() + page * 7 + i);
            days.push(day.toLocaleDateString());
        }
        return days;
    }
    const days = showDays();
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View
                        style={{
                            marginBottom: 20,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignContent: "center",
                        }}
                    >
                        <Button
                            mode="contained"
                            onPress={() => {
                                if (page > 0) setPage(page - 1);
                            }}
                            disabled={page === 0}
                        >
                            <Icon
                                source="chevron-left"
                                color="#fff"
                                size={20}
                            ></Icon>
                        </Button>
                        <Text style={{ alignSelf: "center" }}>{`${page}`}</Text>
                        <Button
                            mode="contained"
                            onPress={() => {
                                setPage(page + 1);
                            }}
                        >
                            <Icon
                                source="chevron-right"
                                color="#fff"
                                size={20}
                            ></Icon>
                        </Button>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            gap: 20,
                            paddingHorizontal: 40,
                        }}
                    >
                        {days.map((day, index) => {
                            return (
                                <Button
                                    key={index}
                                    mode="contained"
                                    onPress={() => {
                                        navigation.navigate(
                                            "Choose Learning Time",
                                            {
                                                tutorId: tutorId,
                                                date: day,
                                                page: page,
                                            }
                                        );
                                    }}
                                    style={{
                                        padding: 10,
                                    }}
                                >
                                    <Text>{day}</Text>
                                </Button>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChooseLearningDateScreen;
