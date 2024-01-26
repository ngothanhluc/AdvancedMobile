import React from "react";
import { View, Text } from "react-native";
import {
    Card,
    Button,
    Avatar,
    IconButton,
    Portal,
    Modal,
} from "react-native-paper";
import BookingAPI from "../services/BookingAPI";
import type { Booking } from "../types/booking";
import { useNavigation } from "@react-navigation/native";
const UpcomingCard = ({ lesson }: { lesson: Booking }) => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
    const showModal2 = () => setVisible2(true);
    const hideModal2 = () => setVisible2(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: "white", padding: 20 };
    const date = new Date(lesson.scheduleDetailInfo.startPeriodTimestamp);
    const day = date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    const time = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
    });
    const cancelLesson = async () => {
        const now = new Date();
        const date = new Date(lesson.scheduleDetailInfo.startPeriodTimestamp);
        const hoursDiff = (date - now) / (1000 * 60 * 60);
        if (hoursDiff <= 2) {
            alert("You can't cancel this lesson");
        } else {
            const res = await BookingAPI.cancelBooking(lesson.id);
            if (res) {
                alert(res.message);
            }
        }
        hideModal();
    };
    return (
        <Card style={{ padding: 10, backgroundColor: "#fff" }}>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={containerStyle}
                >
                    <Text>Do you want to cancel this lesson?</Text>
                    <Card.Actions>
                        <Button
                            onPress={() => {
                                hideModal();
                            }}
                        >
                            No
                        </Button>
                        <Button onPress={cancelLesson}>Delete</Button>
                    </Card.Actions>
                </Modal>
            </Portal>
            <Portal>
                <Modal
                    visible={visible2}
                    onDismiss={hideModal2}
                    contentContainerStyle={containerStyle}
                >
                    <Text>Do you want to enter meeting room right now?</Text>
                    <Card.Actions>
                        <Button
                            onPress={() => {
                                hideModal2();
                                navigation.navigate("Class", {
                                    lesson: lesson,
                                    type: "waiting",
                                });
                            }}
                        >
                            Wating Room
                        </Button>
                        <Button
                            onPress={() => {
                                hideModal2();
                                navigation.navigate("Class", {
                                    lesson: lesson,
                                    type: "meeting",
                                });
                            }}
                        >
                            Meeting Room
                        </Button>
                    </Card.Actions>
                </Modal>
            </Portal>
            <Card.Title
                title={
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        {lesson.scheduleDetailInfo.scheduleInfo.tutorInfo.name}
                    </Text>
                }
                subtitle={
                    <View>
                        <Text>{day}</Text>
                        <Text>{time}</Text>
                    </View>
                }
                style={{ paddingBottom: 10 }}
                left={() => (
                    <Avatar.Image
                        source={
                            lesson.scheduleDetailInfo.scheduleInfo.tutorInfo
                                ?.avatar !== null &&
                            lesson.scheduleDetailInfo.scheduleInfo.tutorInfo
                                ?.avatar !==
                                "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png"
                                ? {
                                      uri: lesson.scheduleDetailInfo
                                          .scheduleInfo.tutorInfo?.avatar,
                                  }
                                : { uri: "https://picsum.photos/200" }
                        }
                    />
                )}
                leftStyle={{ marginRight: 40 }}
                right={() => (
                    <Button mode="text" onPress={() => {}}>
                        Edit request
                    </Button>
                )}
            />

            <Card.Actions>
                <Button
                    onPress={() => {
                        showModal();
                    }}
                >
                    Cancel
                </Button>
                <Button
                    onPress={() => {
                        showModal2();
                    }}
                >
                    Go to meeting
                </Button>
            </Card.Actions>
        </Card>
    );
};

export default UpcomingCard;
