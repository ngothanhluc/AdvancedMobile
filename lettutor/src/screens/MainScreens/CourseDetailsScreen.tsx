import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import COLORS from "../../constants/Colors";
const CourseDetailsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView>
                <Image
                    style={{
                        width: "100%",
                        height: 250,
                        objectFit: "cover",
                        marginBottom: 10,
                    }}
                    source={{ uri: "https://picsum.photos/700" }}
                ></Image>
                <View style={{ padding: 10, gap: 20 }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                marginBottom: 10,
                            }}
                        >
                            Life in the internet Age
                        </Text>
                        <Text>
                            Let's discuss how technology is changing the way we
                            live
                        </Text>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "bold",
                            }}
                        >
                            Overview
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                paddingHorizontal: 10,
                            }}
                        >
                            <Icon
                                source="crosshairs-question"
                                size={30}
                                color={COLORS.secondary}
                            ></Icon>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        marginBottom: 10,
                                    }}
                                >
                                    Why take this course?
                                </Text>
                                <Text style={{ lineHeight: 20 }}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iusto vel nesciunt neque
                                    ea, saepe incidunt asperiores sunt minus
                                    quos voluptas a facere. Voluptate velit iure
                                    repudiandae cum praesentium ullam quidem.
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}
                    >
                        <Icon
                            source="crosshairs-question"
                            size={30}
                            color={COLORS.secondary}
                        ></Icon>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    marginBottom: 10,
                                }}
                            >
                                What will you be able to do?
                            </Text>
                            <Text style={{ lineHeight: 20 }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Iusto vel nesciunt neque ea,
                                saepe incidunt asperiores sunt minus quos
                                voluptas a facere. Voluptate velit iure
                                repudiandae cum praesentium ullam quidem.
                            </Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Experience Level
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingHorizontal: 10,
                            }}
                        >
                            <Icon
                                source="human-handsup"
                                size={24}
                                color={COLORS.secondary}
                            ></Icon>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    paddingHorizontal: 10,
                                }}
                            >
                                Intermediate
                            </Text>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Course Length
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingHorizontal: 10,
                            }}
                        >
                            <Icon
                                source="timeline-outline"
                                size={24}
                                color={COLORS.secondary}
                            ></Icon>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    paddingHorizontal: 10,
                                }}
                            >
                                9 Topics
                            </Text>
                        </View>
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                marginBottom: 10,
                            }}
                        >
                            List of Topics
                        </Text>
                        <View style={{ gap: 16 }}>
                            <Pressable
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    backgroundColor: COLORS.background,
                                    borderRadius: 10,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 2,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 2,
                                }}
                                onPress={() => {}}
                            >
                                <Text style={{ fontSize: 16 }}>
                                    1. The Internet
                                </Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    backgroundColor: COLORS.background,
                                    borderRadius: 10,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 2,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 2,
                                }}
                                onPress={() => {}}
                            >
                                <Text style={{ fontSize: 16 }}>
                                    1. The Internet
                                </Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    backgroundColor: COLORS.background,
                                    borderRadius: 10,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 2,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 2,
                                }}
                                onPress={() => {}}
                            >
                                <Text style={{ fontSize: 16 }}>
                                    1. The Internet
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CourseDetailsScreen;
