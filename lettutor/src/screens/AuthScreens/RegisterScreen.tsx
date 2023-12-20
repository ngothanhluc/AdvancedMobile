import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from "../../components/LoadingOverlay";
import COLORS from "../../constants/Colors";
import AuthAPI from "../../services/AuthAPI";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
const RegisterScreen = () => {
    const navigation = useNavigation();
    const [isAuthenticating, setIsAuthenticating] = React.useState(false);
    const dispatch = useDispatch();
    const registerHandler = async ({ email, password }) => {
        setIsAuthenticating(true);
        try {
            const response = await AuthAPI.register(email, password);
            if (response) {
                Alert.alert(
                    "Success",
                    "Please check your email to verify your account"
                );
                navigation.navigate("Login");
            }
        } catch (error) {
            Alert.alert("Register failed", error.response.data.message);
        }
        setIsAuthenticating(false);
    };
    if (isAuthenticating) {
        return <LoadingOverlay message={"Creating user..."} />;
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <AuthContent
                    isForgotPassword={false}
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
