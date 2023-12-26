import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Avatar, IconButton } from "react-native-paper";
import tutorAvatar from "../assets/tutor/keegan-avatar.png";
import { Booking } from "../types/booking";
const HistoryCard = ({ lesson }: { lesson: Booking }) => {
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
                        Keegan
                    </Text>
                }
                subtitle={
                    <View>
                        <Text>{day}</Text>
                        <Text>{time}</Text>
                    </View>
                }
                style={{ paddingBottom: 10 }}
                left={() => <Avatar.Image source={tutorAvatar} />}
                leftStyle={{ marginRight: 40 }}
                right={() => (
                    <Button mode="text" onPress={() => {}}>
                        Edit request
                    </Button>
                )}
            />
            <Card.Content style={{ padding: 20 }}>
                <Text>No requests for lesson</Text>
                <Text>Tutor haven't reviewed yet</Text>
            </Card.Content>
            <Card.Actions>
                <Button>Report</Button>
                <Button>Add a Rating</Button>
            </Card.Actions>
        </Card>
    );
};

export default HistoryCard;
