import React from "react";
import { Text, View } from "react-native";
import { Card, Avatar } from "react-native-paper";
import { Feedback } from "../types/tutor";
import Rate from "./Rate";
import { formatDateDifference } from "../utils/timeToNow";
const FeedbackCard = ({ feedback }: { feedback: Feedback }) => {
    return (
        <Card style={{ padding: 10, backgroundColor: "#fff" }}>
            <Card.Title
                title={
                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                            {feedback?.firstInfo?.name}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                            {formatDateDifference(feedback?.updatedAt)}
                        </Text>
                    </View>
                }
                subtitle={
                    <View style={{ gap: 10 }}>
                        <Text>{feedback.content}</Text>
                        <Rate rating={feedback.rating} disabled={true} />
                    </View>
                }
                style={{ paddingBottom: 10 }}
                left={() => (
                    <Avatar.Image
                        source={
                            feedback?.firstInfo?.avatar !== null &&
                            feedback?.firstInfo?.avatar !==
                                "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png"
                                ? {
                                      uri: feedback?.firstInfo?.avatar,
                                  }
                                : { uri: "https://picsum.photos/200" }
                        }
                    />
                )}
                leftStyle={{ marginRight: 40 }}
            />
        </Card>
    );
};

export default FeedbackCard;
