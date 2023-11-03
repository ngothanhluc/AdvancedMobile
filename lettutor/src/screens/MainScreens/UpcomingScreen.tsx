import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Menu, Button, Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import UpcomingCard from "../../components/UpcomingCard";
import COLORS from "../../constants/Colors";
const UpcomingScreen = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
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
                        You have 2 upcoming class
                    </Text>
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
                            <Menu.Item onPress={() => {}} title="1"></Menu.Item>
                            <Menu.Item onPress={() => {}} title="2" />
                            <Menu.Item onPress={() => {}} title="3" />
                        </Menu>
                    </View>
                    <View style={{ gap: 20 }}>
                        <UpcomingCard />
                        <UpcomingCard />
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
                        <Text style={{ alignSelf: "center" }}>Page 1 / 2</Text>
                        <Button mode="contained">
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

export default UpcomingScreen;
