import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Menu, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseCard from "../../components/CourseCard";
import COLORS from "../../constants/Colors";
import CourseAPI from "../../services/CourseAPI";
import type { Course } from "../../types/course";
import { Button, Icon } from "react-native-paper";
import LoadingOverlay from "../../components/LoadingOverlay";
const AllCourseScreen = () => {
    const [visible, setVisible] = React.useState(false);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const [searchQuery, setSearchQuery] = React.useState("");

    const { data: rawCoursesList, isLoading } = useQuery<{
        count: number;
        rows: Course[];
    }>({
        queryKey: ["courses", page, perPage],
        queryFn: () => CourseAPI.getCourses({ page, perPage }),
    });
    const onChangeSearch = (query) => setSearchQuery(query);
    const maxPage = rawCoursesList?.count
        ? Number(Math.ceil(rawCoursesList?.count / perPage))
        : 0;
    if (isLoading) return <LoadingOverlay message="Loading..." />;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ gap: 10 }}>
                    <Searchbar
                        style={{
                            backgroundColor: COLORS.primaryContainer,
                        }}
                        placeholder="Search Course"
                        value={searchQuery}
                        onChangeText={onChangeSearch}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "flex-end",
                        }}
                    >
                        <Text>Courses per page</Text>
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
                    <View style={{ padding: 10, gap: 20 }}>
                        {rawCoursesList?.rows.map((course) => (
                            <CourseCard key={course.id} course={course} />
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

export default AllCourseScreen;
