import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    Pressable,
    Image,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from "react-native";
const BecomeTutorScreen = () => {
    const [userInfo, setUserInfo] = useState({
        tutoringName: "",
        country: "",
        dateOfBirth: "",
        interests: "",
        education: "",
        experience: "",
        profession: "",
        languages: "",
        introduction: "",
        bestAtTeaching: "",
        specialties: "",
        videoUrl: "",
    });
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        Basic Info
                    </Text>
                </View>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require("../../assets/user/empty-avatar.jpg")}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
export default BecomeTutorScreen;
