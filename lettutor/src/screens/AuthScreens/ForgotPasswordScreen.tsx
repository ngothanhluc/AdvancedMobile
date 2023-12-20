import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContent from "../../components/Auth/AuthContent";
import AuthAPI from "../../services/AuthAPI";
import { useNavigation } from "@react-navigation/native";
const ForgotPasswordScreen = () => {
    const forgotPasswordHandler = async ({ email }) => {
        try {
            const response = await AuthAPI.forgotPassword(email);
            if (response) {
                Alert.alert(
                    "Success",
                    `${response.data.message} Please check your email to reset your password`
                );
                navigation.navigate("Login");
            }
        } catch (error) {
            Alert.alert("Forgot password failed", error.response.data.message);
        }
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <AuthContent
                    isForgotPassword={true}
                    isLogin={false}
                    onAuthenticate={forgotPasswordHandler}
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
});
export default ForgotPasswordScreen;
