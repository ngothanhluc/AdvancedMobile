import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import TutorCard from "../../components/TutorCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Menu, Button, IconButton, Divider, Icon } from "react-native-paper";
import COLORS from "../../constants/Colors";
import MenuItem from "react-native-paper/lib/typescript/components/Menu/MenuItem";
import TutorAPI from "../../services/TutorAPI";
import { useQuery } from "@tanstack/react-query";
import type Tutor from "../../types/tutor";
import LoadingOverlay from "../../components/LoadingOverlay";
interface ResponseInterface {
    count: number;
    rows: Tutor[];
}
const TutorSearchResultScreen = ({ route }) => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const { data: rawResponse, isLoading } = useQuery<ResponseInterface>({
        queryKey: ["tutorsSearchResult", page, perPage, route.params],
        queryFn: () =>
            TutorAPI.searchTutors({ page, perPage, ...route.params }),
        staleTime: 0,
    });
    if (isLoading) {
        return <LoadingOverlay message={"Loading..."} />;
    }
    const tutors = rawResponse?.rows;
    const maxPage = rawResponse?.count
        ? Number(Math.ceil(rawResponse?.count / perPage))
        : 0;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ flexDirection: "column", padding: 10 }}>
                {rawResponse?.count === 0 ? (
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        No tutor founded
                    </Text>
                ) : (
                    <>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Found {rawResponse?.count} Results
                        </Text>
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    alignSelf: "flex-end",
                                }}
                            >
                                <Text>Tutors per page</Text>
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
                                            closeMenu();
                                            setPage(1);
                                            setPerPage(5);
                                        }}
                                        title="5"
                                    ></Menu.Item>
                                    <Menu.Item
                                        onPress={() => {
                                            closeMenu();
                                            setPage(1);
                                            setPerPage(10);
                                        }}
                                        title="10"
                                    />
                                    <Menu.Item
                                        onPress={() => {
                                            closeMenu();
                                            setPage(1);
                                            setPerPage(15);
                                        }}
                                        title="15"
                                    />
                                </Menu>
                            </View>
                        </View>
                        <View>
                            {tutors?.map((tutor) => {
                                return (
                                    <TutorCard
                                        tutor={tutor}
                                        key={tutor.id}
                                        bookAble={true}
                                    ></TutorCard>
                                );
                            })}
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
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default TutorSearchResultScreen;
