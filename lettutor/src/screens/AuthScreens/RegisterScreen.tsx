import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContent from "../../components/Auth/AuthContent";
import COLORS from "../../constants/Colors";
import AuthAPI from "../../services/AuthAPI";

import { useQuery } from "@tanstack/react-query";
import LoadingOverlay from "../../components/LoadingOverlay";
const RegisterScreen = () => {
    const [isAuthenticating, setIsAuthenticating] = React.useState(false);
    const registerHandler = async ({ email, password }) => {
        setIsAuthenticating(true);
        const response = await AuthAPI.register(email, password);
        setIsAuthenticating(false);
    };
    if (isAuthenticating) {
        return <LoadingOverlay message={"Creating user..."} />;
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <AuthContent
                    isLogin={false}
                    onAuthenticate={registerHandler}
                ></AuthContent>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    chooseLanguage: {
        borderWidth: 0,
        width: 150,
        alignSelf: "flex-end",
    },
    buttonRegister: {
        backgroundColor: COLORS.primary,
        padding: 10,
        width: "100%",
        alignItems: "center",
        borderRadius: 12,
    },
});
export default RegisterScreen;
