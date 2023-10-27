import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import TutorCard from "../../components/TutorCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Menu, Button, IconButton, Divider, Icon } from "react-native-paper";
import COLORS from "../../constants/Colors";
import MenuItem from "react-native-paper/lib/typescript/components/Menu/MenuItem";
const TutorSearchResultScreen = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ flexDirection: "column", padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Found 54 Results
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
                                    <Text style={{ color: "#fff" }}>1</Text>
                                </Pressable>
                            }
                        >
                            <Menu.Item onPress={() => {}} title="1"></Menu.Item>
                            <Menu.Item onPress={() => {}} title="2" />
                            <Menu.Item onPress={() => {}} title="3" />
                        </Menu>
                    </View>
                </View>
                <View>
                    <TutorCard></TutorCard>
                    <TutorCard></TutorCard>
                    <TutorCard></TutorCard>
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
                    <Text style={{ alignSelf: "center" }}>Page 1 / 11</Text>
                    <Button mode="contained">
                        <Icon
                            source="chevron-right"
                            color="#fff"
                            size={20}
                        ></Icon>
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TutorSearchResultScreen;
