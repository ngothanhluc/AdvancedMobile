import React from "react";
import { View, Text } from "react-native";
import { Card, Button, Avatar, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const CourseCard = () => {
    const navigator = useNavigation();
    return (
        <Card onPress={() => navigator.navigate("Course Details")}>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Content>
                <View style={{ gap: 20, marginVertical: 20 }}>
                    <Text>Card title</Text>
                    <Text>Card content</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text>Intermediate</Text>
                        <Text>9 lessons</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
};

export default CourseCard;
