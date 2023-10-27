import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Avatar, IconButton } from "react-native-paper";
import tutorAvatar from "../assets/tutor/keegan-avatar.png";
const UpcomingCard = () => {
    return (
        <Card style={{ padding: 10 }}>
            <Card.Title
                title={
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Keegan
                    </Text>
                }
                subtitle={
                    <View>
                        <Text>Sat, Oct 28th, 2023</Text>
                        <Text>02:00 - 02:25</Text>
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

            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Go to meeting</Button>
            </Card.Actions>
        </Card>
    );
};

export default UpcomingCard;
