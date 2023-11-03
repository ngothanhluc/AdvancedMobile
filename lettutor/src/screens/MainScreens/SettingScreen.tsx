import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Avatar, Button, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/Colors";

const SettingScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ padding: 20, backgroundColor: "#fff" }}>
                <View
                    style={{
                        alignSelf: "center",
                        alignItems: "center",
                        marginTop: 20,
                        gap: 10,
                    }}
                >
                    <Avatar.Image
                        size={100}
                        source={{ uri: "https://picsum.photos/700" }}
                    ></Avatar.Image>
                    <Text style={{ fontSize: 20 }}>Ph Hai</Text>
                    <Button>
                        <Text
                            style={{
                                fontSize: 20,
                                padding: 10,
                                color: COLORS.secondary,
                            }}
                        >
                            Edit profile
                        </Text>
                    </Button>
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
                            <Icon
                                source="account-settings"
                                size={32}
                                color={COLORS.secondary}
                            />
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
                            <Icon
                                source="earth"
                                size={32}
                                color={COLORS.secondary}
                            />
                            <Text>Language</Text>
                        </View>
                    </Pressable>
                </View>
                <Button
                    style={{ marginVertical: 40 }}
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
