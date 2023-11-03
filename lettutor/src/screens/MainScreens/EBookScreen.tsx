import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import CourseCard from "../../components/CourseCard";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/Colors";
import { Menu, Searchbar } from "react-native-paper";

const EBookScreen = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ gap: 10 }}>
                    <Searchbar
                        style={{
                            backgroundColor: COLORS.primaryContainer,
                        }}
                        placeholder="Search Ebook"
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
                        <Text>Ebook per page</Text>
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
                                    <Text style={{ color: "#fff" }}>1</Text>
                                </Pressable>
                            }
                        >
                            <Menu.Item onPress={() => {}} title="1"></Menu.Item>
                            <Menu.Item onPress={() => {}} title="2" />
                            <Menu.Item onPress={() => {}} title="3" />
                        </Menu>
                    </View>
                    <View style={{ padding: 10, gap: 20 }}>
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EBookScreen;
