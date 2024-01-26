import React from "react";
import { StyleSheet, View, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContent from "../../components/Auth/AuthContent";
import AuthAPI from "../../services/AuthAPI";
import LoadingOverlay from "../../components/LoadingOverlay";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/reducers/authSlice";
const LoginScreen = () => {
    const [isAuthenticating, setIsAuthenticating] = React.useState(false);
    const dispatch = useDispatch();
    const loginHandler = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        setIsAuthenticating(true);
        try {
            const response = await AuthAPI.login(email, password);
            if (response) dispatch(loginSuccess(response));
        } catch (error: any) {
            Alert.alert("Login failed", error.response.data.message);
        }
        setIsAuthenticating(false);
    };
    if (isAuthenticating) {
        return <LoadingOverlay message={"Logging In..."} />;
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <AuthContent
                    isForgotPassword={false}
                    isLogin={true}
                    onAuthenticate={loginHandler}
                ></AuthContent>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
});
export default LoginScreen;
