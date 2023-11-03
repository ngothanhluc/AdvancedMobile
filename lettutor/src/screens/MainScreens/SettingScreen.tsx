import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Avatar, Button, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/Colors";

const SettingScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ padding: 10, backgroundColor: "#fff" }}>
                <View style={{ alignSelf: "center", alignItems: "center" }}>
                    <Avatar.Image
                        source={{ uri: "https://picsum.photos/700" }}
                    ></Avatar.Image>
                    <Text>Ph Hai</Text>
                    <Button>Edit profile</Button>
                </View>
                <View style={{ gap: 20 }}>
                    <Pressable
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderRadius: 10,
                            backgroundColor: COLORS.background,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 20,
                            }}
                        >
                            <Icon source="account-settings" size={40} />
                            <Text>Account</Text>
                        </View>
                    </Pressable>
                    <Pressable
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderRadius: 10,
                            backgroundColor: COLORS.background,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 20,
                            }}
                        >
                            <Icon source="account-settings" size={40} />
                            <Text>Language</Text>
                        </View>
                    </Pressable>
                </View>
                <Button
                    mode="elevated"
                    buttonColor={COLORS.errorContainer}
                    textColor={COLORS.error}
                >
                    Logout
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SettingScreen;
