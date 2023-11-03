import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Avatar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const CourseCard = () => {
    const navigator = useNavigation();
    return (
        <Card
            style={{ backgroundColor: "white" }}
            onPress={() => navigator.navigate("Course Details")}
        >
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Content>
                <View style={{ gap: 20, marginVertical: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Life in the internet Age
                    </Text>
                    <Text>
                        Let's discuss how technology is changing the way we live
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 18, color: "grey" }}>
                            Intermediate
                        </Text>
                        <Text style={{ fontSize: 18, color: "grey" }}>
                            9 lessons
                        </Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
};

export default CourseCard;
