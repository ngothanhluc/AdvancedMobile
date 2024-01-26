import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    View,
    RefreshControl,
} from "react-native";
import { Button, Menu, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingOverlay from "../../components/LoadingOverlay";
import UpcomingCard from "../../components/UpcomingCard";
import COLORS from "../../constants/Colors";
import UserAPI from "../../services/UserAPI";
import type { Booking } from "../../types/booking";
import { useQueryClient } from "@tanstack/react-query";
const UpcomingScreen = () => {
    const queryClient = useQueryClient();
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        queryClient.invalidateQueries("allUpcomingLessons");
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    const { data: allUpcomingLessons, isLoading } = useQuery<{
        count: number;
        rows: Booking[];
    }>({
        queryKey: ["allUpcomingLessons", page, perPage],
        queryFn: () =>
            UserAPI.getAllUpcomingLesson({ page: page, perPage: perPage }),
    });
    const maxPage = allUpcomingLessons?.count
        ? Number(Math.ceil(allUpcomingLessons?.count / perPage))
        : 0;
    if (isLoading) {
        return <LoadingOverlay message={"Loading..."} />;
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView
                style={{ padding: 20 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
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
                    {allUpcomingLessons?.count != 0 ? (
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
                                                {perPage}
                                            </Text>
                                        </Pressable>
                                    }
                                >
                                    <Menu.Item
                                        onPress={() => {
                                            setPage(1);
                                            setPerPage(5);
                                        }}
                                        title="5"
                                    ></Menu.Item>
                                    <Menu.Item
                                        onPress={() => {
                                            setPage(1);
                                            setPerPage(10);
                                        }}
                                        title="10"
                                    />
                                    <Menu.Item
                                        onPress={() => {
                                            setPage(1);
                                            setPerPage(15);
                                        }}
                                        title="15"
                                    />
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
                                <Button
                                    mode="contained"
                                    disabled={page == 1 ? true : false}
                                    onPress={() => {
                                        setPage(page - 1);
                                    }}
                                >
                                    <Icon
                                        source="chevron-left"
                                        color="#fff"
                                        size={20}
                                    ></Icon>
                                </Button>
                                <Text style={{ alignSelf: "center" }}>
                                    {`${page} / ${maxPage}`}
                                </Text>
                                <Button
                                    mode="contained"
                                    disabled={page == maxPage ? true : false}
                                    onPress={() => {
                                        setPage(page + 1);
                                    }}
                                >
                                    <Icon
                                        source="chevron-right"
                                        color="#fff"
                                        size={20}
                                    ></Icon>
                                </Button>
                            </View>
                        </>
                    ) : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default UpcomingScreen;
