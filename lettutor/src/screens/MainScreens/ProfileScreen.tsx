import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import UserAPI from "../../services/UserAPI";
import type { User } from "../../types/user";
import { countryList } from "../../constants/Country_List";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { userLevels } from "../../constants/User_Level";
import { Chip } from "react-native-paper";
import COLORS from "../../constants/Colors";

const ProfileScreen = () => {
    const { data: rawUserInfo, isLoading } = useQuery<{ user: User }>({
        queryKey: ["user"],
        queryFn: () => UserAPI.getUserInfo(),
        staleTime: 0,
    });
    const [show, setShow] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState<User | null>(null);
    const [topics, setTopics] = React.useState<number[]>([]);
    const [myTestPreparations, setMyTestPreparations] = React.useState<
        number[]
    >([]);
    const { data: learnTopics } = useQuery<
        {
            id: number;
            key: string;
            name: string;
        }[]
    >({
        queryKey: ["learnTopics"],
        queryFn: () => UserAPI.getLearnTopics(),
    });
    const { data: testPreparation } = useQuery<
        {
            id: number;
            key: string;
            name: string;
        }[]
    >({
        queryKey: ["testPreparation"],
        queryFn: () => UserAPI.getTestPreparation(),
    });
    React.useEffect(() => {
        if (rawUserInfo) {
            setUserInfo(rawUserInfo.user);
            setTopics(rawUserInfo.user.learnTopics.map((topic) => topic.id));
            setMyTestPreparations(
                rawUserInfo.user.testPreparations.map((tag) => tag.id)
            );
        }
    }, [rawUserInfo]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ padding: 20, backgroundColor: "#fff" }}>
                <View
                    style={{
                        flex: 1,
                        gap: 10,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {rawUserInfo?.user?.avatar && (
                        <Avatar.Image
                            size={100}
                            source={{ uri: rawUserInfo?.user?.avatar }}
                        ></Avatar.Image>
                    )}

                    <TextInput
                        label="Name"
                        value={userInfo?.name}
                        onChangeText={(text) => {
                            setUserInfo((prev) => ({ ...prev, name: text }));
                        }}
                        style={{
                            width: "100%",
                            backgroundColor: "#fff",
                        }}
                    />
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Email Address
                        </Text>
                        <Text>{rawUserInfo?.user.email}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Phone Number
                        </Text>
                        <Text>{rawUserInfo?.user.phone}</Text>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Country
                        </Text>
                        <Picker
                            style={{ width: "100%" }}
                            selectedValue={userInfo?.country}
                            onValueChange={(itemValue, itemIndex) =>
                                setUserInfo((prev) => ({
                                    ...prev,
                                    country: itemValue,
                                }))
                            }
                        >
                            {Object.entries(countryList).map(([code, name]) => (
                                <Picker.Item
                                    key={code}
                                    label={name}
                                    value={code}
                                />
                            ))}
                        </Picker>
                    </View>
                    {show && (
                        <DateTimePicker
                            value={new Date(userInfo?.birthday)}
                            onChange={(event, date) => {
                                setShow(false);
                                setUserInfo((prev) => ({
                                    ...prev,
                                    birthday: date?.toISOString().split("T")[0],
                                }));
                            }}
                            mode="date"
                        />
                    )}
                    <View style={{ width: "100%", gap: 4 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Birthday
                        </Text>
                        <Button
                            style={{ width: "100%" }}
                            mode="outlined"
                            onPress={() => {
                                setShow(true);
                            }}
                        >
                            {userInfo?.birthday}
                        </Button>
                    </View>
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Level
                        </Text>
                        <Picker
                            style={{ width: "100%" }}
                            selectedValue={userInfo?.level}
                            onValueChange={(itemValue, itemIndex) =>
                                setUserInfo((prev) => ({
                                    ...prev,
                                    level: itemValue,
                                }))
                            }
                        >
                            {Object.entries(userLevels).map(([code, name]) => (
                                <Picker.Item
                                    key={code}
                                    label={name}
                                    value={code}
                                />
                            ))}
                        </Picker>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Topics
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                gap: 14,
                            }}
                        >
                            {learnTopics?.map((topic) => (
                                <Chip
                                    style={{
                                        paddingVertical: 6,
                                        paddingHorizontal: 10,
                                    }}
                                    showSelectedCheck={true}
                                    key={topic.id}
                                    onPress={() => {
                                        if (topics.includes(topic.id)) {
                                            setTopics((prev) =>
                                                prev.filter(
                                                    (id) => id !== topic.id
                                                )
                                            );
                                        } else {
                                            setTopics((prev) => [
                                                ...prev,
                                                topic.id,
                                            ]);
                                        }
                                    }}
                                    selected={topics.includes(topic.id)}
                                >
                                    <Text>{topic.name}</Text>
                                </Chip>
                            ))}
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Test Preparations
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                gap: 14,
                            }}
                        >
                            {testPreparation?.map((tag) => (
                                <Chip
                                    style={{
                                        paddingVertical: 6,
                                        paddingHorizontal: 10,
                                    }}
                                    showSelectedCheck={true}
                                    key={tag.id}
                                    onPress={() => {
                                        if (
                                            myTestPreparations.includes(tag.id)
                                        ) {
                                            setMyTestPreparations((prev) =>
                                                prev.filter(
                                                    (id) => id !== tag.id
                                                )
                                            );
                                        } else {
                                            setMyTestPreparations((prev) => [
                                                ...prev,
                                                tag.id,
                                            ]);
                                        }
                                    }}
                                    selected={myTestPreparations.includes(
                                        tag.id
                                    )}
                                >
                                    <Text>{tag.name}</Text>
                                </Chip>
                            ))}
                        </View>
                    </View>
                    <View style={{ width: "100%", gap: 4 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Study Schedule
                        </Text>
                        <Text>{userInfo?.studySchedule}</Text>
                    </View>
                    <Pressable
                        style={{
                            width: "100%",
                            backgroundColor: COLORS.primary,
                            padding: 10,
                            borderRadius: 10,
                            elevation: 2,
                            marginTop: 20,
                            marginBottom: 100,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            UserAPI.updateUserInfo({
                                name: userInfo?.name,
                                country: userInfo?.country,
                                birthday: userInfo?.birthday,
                                level: userInfo?.level,
                                learnTopics: topics,
                                testPreparations: myTestPreparations,
                            });
                        }}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 16,
                                fontWeight: "bold",
                            }}
                        >
                            Save
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
export default ProfileScreen;
