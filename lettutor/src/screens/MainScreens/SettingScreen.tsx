import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Avatar, Button, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../../constants/Colors";
import { logout } from "../../redux/reducers/authSlice";
import { useNavigation } from "@react-navigation/native";
const SettingScreen = () => {
    const user = useSelector((state: any) => state.appReducers.auth.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };

    const navigator = useNavigation();
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
                        source={{ uri: user?.avatar }}
                    ></Avatar.Image>
                    <Text style={{ fontSize: 20 }}>{user?.name}</Text>
                    <Button
                        onPress={() => {
                            navigator.navigate("Profile");
                        }}
                    >
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
                    <Pressable
                        onPress={() => {
                            navigator.navigate("Become Tutor");
                        }}
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
                                source="book-alphabet"
                                size={32}
                                color={COLORS.secondary}
                            />
                            <Text>Become A Tutor</Text>
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
                                source="police-badge"
                                size={32}
                                color={COLORS.secondary}
                            />
                            <Text>Privacy Policy</Text>
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
                                source="watermark"
                                size={32}
                                color={COLORS.secondary}
                            />
                            <Text>Terms & Conditions</Text>
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
                                source="contacts"
                                size={32}
                                color={COLORS.secondary}
                            />
                            <Text>Contact</Text>
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
                                source="progress-question"
                                size={32}
                                color={COLORS.secondary}
                            />
                            <Text>Guide</Text>
                        </View>
                    </Pressable>
                </View>
                <Button
                    style={{ marginVertical: 40 }}
                    mode="elevated"
                    buttonColor={COLORS.errorContainer}
                    textColor={COLORS.error}
                    onPress={handleLogout}
                >
                    Logout
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SettingScreen;
