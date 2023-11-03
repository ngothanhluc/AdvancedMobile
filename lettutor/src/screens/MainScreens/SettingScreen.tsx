import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Text>Setting</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SettingScreen;
