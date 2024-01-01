import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Button, Icon, Menu } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/Colors";
import { useQuery } from "@tanstack/react-query";
import TutorAPI from "../../services/TutorAPI";
import { Feedback } from "../../types/tutor";
import LoadingOverlay from "../../components/LoadingOverlay";
import FeedbackCard from "../../components/FeedbackCard";
const TutorFeedbacksScreen = ({ route }) => {
    const { tutorID } = route.params;
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    const { data: rawData, isLoading } = useQuery<{
        count: number;
        rows: Feedback[];
    }>({
        queryKey: ["feedbacks", tutorID, page, perPage],
        queryFn: () =>
            TutorAPI.getFeedbacks({
                tutorId: tutorID,
                page: page,
                perPage: perPage,
            }),
    });
    if (isLoading) return <LoadingOverlay message="Loading..." />;
    const maxPage = rawData?.count
        ? Number(Math.ceil(rawData?.count / perPage))
        : 0;
    const feedbacks = rawData?.rows;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ gap: 10 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "flex-end",
                        }}
                    >
                        <Text>Feedbacks per page</Text>
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
                                    setPerPage(10);
                                    setPage(1);
                                }}
                                title="10"
                            ></Menu.Item>
                            <Menu.Item
                                onPress={() => {
                                    setPerPage(20);
                                    setPage(1);
                                }}
                                title="20"
                            />
                            <Menu.Item
                                onPress={() => {
                                    setPerPage(30);
                                    setPage(1);
                                }}
                                title="30"
                            />
                        </Menu>
                    </View>
                    <View style={{ padding: 10, gap: 20 }}>
                        {feedbacks?.map((feedback) => (
                            <FeedbackCard
                                key={feedback.id}
                                feedback={feedback}
                            />
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
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TutorFeedbacksScreen;
