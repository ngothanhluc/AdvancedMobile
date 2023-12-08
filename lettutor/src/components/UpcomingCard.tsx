import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Avatar, IconButton } from "react-native-paper";
import tutorAvatar from "../assets/tutor/keegan-avatar.png";
import type { Booking } from "../types/booking";
const UpcomingCard = ({ lesson }: { lesson: Booking }) => {
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
    return (
        <Card style={{ padding: 10, backgroundColor: "#fff" }}>
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
                <Button>Cancel</Button>
                <Button>Go to meeting</Button>
            </Card.Actions>
        </Card>
    );
};

export default UpcomingCard;
