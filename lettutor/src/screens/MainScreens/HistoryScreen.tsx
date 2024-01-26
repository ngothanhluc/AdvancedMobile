import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Button, Menu, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import HistoryCard from "../../components/HistoryCard";
import COLORS from "../../constants/Colors";
import UserAPI from "../../services/UserAPI";
import LoadingOverlay from "../../components/LoadingOverlay";
import type { Booking } from "../../types/booking";
const HistoryScreen = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const { data: historyLessons, isLoading } = useQuery<{
        count: number;
        rows: Booking[];
    }>({
        queryKey: ["historyLessons", page, perPage],
        queryFn: () =>
            UserAPI.getHistoryLessons({ page: page, perPage: perPage }),
    });
    const maxPage = historyLessons?.count
        ? Number(Math.ceil(historyLessons?.count / perPage))
        : 0;
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
                        }}
                    >
                        You have booked {historyLessons?.count} classes
                    </Text>
                    <View>
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
                    </View>
                    <View style={{ gap: 20 }}>
                        {historyLessons?.rows.map((lesson) => (
                            <HistoryCard key={lesson.id} lesson={lesson} />
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
                            onPress={() => {
                                if (page > 1) setPage(page - 1);
                            }}
                            disabled={page === 1}
                        >
                            <Icon
                                source="chevron-left"
                                color="#fff"
                                size={20}
                            ></Icon>
                        </Button>
                        <Text
                            style={{ alignSelf: "center" }}
                        >{`${page} / ${maxPage}`}</Text>
                        <Button
                            mode="contained"
                            onPress={() => {
                                if (page < maxPage) setPage(page + 1);
                            }}
                            disabled={page === maxPage}
                        >
                            <Icon
                                source="chevron-right"
                                color="#fff"
                                size={20}
                            ></Icon>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HistoryScreen;
