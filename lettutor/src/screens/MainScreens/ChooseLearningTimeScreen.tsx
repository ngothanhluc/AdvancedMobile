import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import BookingAPI from "../../services/BookingAPI";
import type { Schedule } from "../../types/schedule";
import { Button, Card, Icon, Modal, Portal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const ChooseLearningTimeScreen = ({ route }: any) => {
    const navigator = useNavigation();
    const { tutorId, page, date } = route.params;
    const [visible, setVisible] = React.useState(false);
    const [selectedSchedule, setSelectedSchedule] = React.useState<Schedule>();
    const [note, setNote] = React.useState("");
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: "white", padding: 20 };
    const handleBook = () => {
        hideModal();
        BookingAPI.bookSchedule(selectedSchedule?.scheduleDetails[0].id, note);
        navigator.goBack();
    };
    const {
        data: rawSchedules,
        isLoading,
        isError,
    } = useQuery<Schedule[]>({
        queryKey: ["schedule", tutorId],
        queryFn: () => BookingAPI.getSchedulesByID(tutorId, page),
        staleTime: 0,
    });
    var schedules: Schedule[] = [];
    if (rawSchedules) {
        schedules = rawSchedules.filter((schedule) => {
            const day = new Date(schedule.startTimestamp);
            return day.toLocaleDateString() === date;
        });
        schedules.sort((a, b) => {
            return a.startTimestamp - b.startTimestamp;
        });
    }
    return (
        <SafeAreaView>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={containerStyle}
                >
                    <Card>
                        <Card.Content style={{ gap: 10 }}>
                            <Text style={{ fontSize: 20 }}>
                                Book this tutor
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                Booking time
                            </Text>
                            <Text>{date}</Text>
                            <Text>{`${new Date(
                                selectedSchedule?.startTimestamp
                            ).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })} - ${new Date(
                                selectedSchedule?.endTimestamp
                            ).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}`}</Text>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                Note
                            </Text>
                            <TextInput
                                value={note}
                                onChangeText={setNote}
                                numberOfLines={5}
                                style={{
                                    padding: 20,
                                    borderRadius: 8,
                                    borderWidth: 2,
                                }}
                                placeholder="Your request for tutor"
                            />
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={hideModal}>Cancel</Button>
                            <Button onPress={handleBook}>Book</Button>
                        </Card.Actions>
                    </Card>
                </Modal>
            </Portal>
            <ScrollView>
                <View>
                    <Text
                        style={{
                            width: "100%",
                            fontSize: 20,
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >{`On ${date}`}</Text>
                    {schedules.map((schedule) => {
                        const start = new Date(
                            schedule.startTimestamp
                        ).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                        });
                        const end = new Date(
                            schedule.endTimestamp
                        ).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                        });
                        return (
                            <View
                                key={schedule.id}
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: 10,
                                    margin: 10,
                                    borderRadius: 10,
                                    backgroundColor: "#fff",
                                }}
                            >
                                <Text>{start}</Text>
                                <Text>{end}</Text>
                                <Button
                                    mode="contained"
                                    onPress={() => {
                                        setSelectedSchedule(schedule);
                                        showModal();
                                    }}
                                    disabled={schedule.isBooked}
                                >
                                    Book
                                </Button>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChooseLearningTimeScreen;
