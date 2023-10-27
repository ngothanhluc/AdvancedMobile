import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Menu } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import HistoryCard from "../../components/HistoryCard";
import COLORS from "../../constants/Colors";
const HistoryScreen = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ padding: 10 }}>
                <View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            marginBottom: 10,
                        }}
                    >
                        You have 1 booked 1299 classes
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
                                        <Text style={{ color: "#fff" }}>1</Text>
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
                    </View>
                    <View style={{ gap: 20 }}>
                        <HistoryCard />
                        <HistoryCard />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HistoryScreen;
