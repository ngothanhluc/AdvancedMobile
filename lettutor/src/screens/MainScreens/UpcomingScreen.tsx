import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Menu, Button, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import UpcomingCard from "../../components/UpcomingCard";
import COLORS from "../../constants/Colors";
import { useQuery } from "@tanstack/react-query";
import UserAPI from "../../services/UserAPI";
import type { Booking } from "../../types/booking";
import LoadingOverlay from "../../components/LoadingOverlay";
const UpcomingScreen = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    const { data: allUpcomingLessons, isLoading } = useQuery<{
        count: number;
        rows: Booking[];
    }>({
        queryKey: ["allUpcomingLessons"],
        queryFn: () => UserAPI.getAllUpcomingLesson({ page: 1, perPage: 9 }),
    });
    if (isLoading) {
        return <LoadingOverlay message={"Loading..."} />;
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ gap: 20 }}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            marginBottom: 10,
                        }}
                    >
                        You have {allUpcomingLessons?.count} upcoming class
                    </Text>
                    {allUpcomingLessons?.count && (
                        <>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    alignSelf: "flex-end",
                                }}
                            >
                                <Text>Classes per page</Text>
                                <Menu
                                    visible={visible}
                                    onDismiss={closeMenu}
                                    anchor={
                                        <Pressable
                                            style={{
                                                paddingVertical: 5,
                                                paddingHorizontal: 20,
                                                marginLeft: 10,
                                                backgroundColor: COLORS.primary,
                                                borderRadius: 10,
                                            }}
                                            onPress={openMenu}
                                        >
                                            <Text style={{ color: "#fff" }}>
                                                1
                                            </Text>
                                        </Pressable>
                                    }
                                >
                                    <Menu.Item
                                        onPress={() => {}}
                                        title="1"
                                    ></Menu.Item>
                                    <Menu.Item onPress={() => {}} title="2" />
                                    <Menu.Item onPress={() => {}} title="3" />
                                </Menu>
                            </View>
                            <View style={{ gap: 20 }}>
                                {allUpcomingLessons?.rows.map((lesson) => (
                                    <UpcomingCard
                                        key={lesson.id}
                                        lesson={lesson}
                                    ></UpcomingCard>
                                ))}
                            </View>
                            <View
                                style={{
                                    marginBottom: 20,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignContent: "center",
                                }}
                            >
                                <Button mode="contained" disabled={true}>
                                    <Icon
                                        source="chevron-left"
                                        color="#fff"
                                        size={20}
                                    ></Icon>
                                </Button>
                                <Text style={{ alignSelf: "center" }}>
                                    Page 1 / 2
                                </Text>
                                <Button mode="contained">
                                    <Icon
                                        source="chevron-right"
                                        color="#fff"
                                        size={20}
                                    ></Icon>
                                </Button>
                            </View>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default UpcomingScreen;
