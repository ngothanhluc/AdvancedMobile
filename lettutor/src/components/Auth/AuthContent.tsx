import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import facebookLogo from "../../assets/logo/facebook.png";
import googleLogo from "../../assets/logo/google.png";
import lettutor2 from "../../assets/logo/lettutor2.png";
import COLORS from "../../constants/Colors";
import AuthForm from "./AuthForm";
const AuthContent = ({ isLogin, isForgotPassword, onAuthenticate }) => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [languageValue, setLanguageValue] = useState("vi");
    const [chooseLanguage, setChooseLanguage] = useState([
        { label: "Tiếng Việt", value: "vi" },
        { label: "English", value: "en" },
    ]);
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false,
    });

    function switchAuthModeHandler() {
        if (isLogin) {
            navigation.navigate("Register");
        } else {
            navigation.navigate("Login");
        }
    }
    function submitHandler(credentials) {
        let { email, confirmEmail, password, confirmPassword } = credentials;
        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes("@");
        const passwordIsValid = password.length > 5;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;
        if (isForgotPassword) {
            if (!emailIsValid) {
                Alert.alert(
                    "Invalid input",
                    "Please check your entered credentials."
                );
                setCredentialsInvalid({
                    email: !emailIsValid,
                    confirmEmail: !emailIsValid || !emailsAreEqual,
                    password: false,
                    confirmPassword: false,
                });
                return;
            }
            onAuthenticate({ email });
            return;
        }
        if (
            !emailIsValid ||
            !passwordIsValid ||
            (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
        ) {
            Alert.alert(
                "Invalid input",
                "Please check your entered credentials."
            );
            setCredentialsInvalid({
                email: !emailIsValid,
                confirmEmail: !emailIsValid || !emailsAreEqual,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            });
            return;
        }
        onAuthenticate({ email, password });
    }
    const handleFacebookLogin = () => {
        console.log("Facebook Login");
    };
    const handleGoogleLogin = () => {
        console.log("Google Login");
    };
    return (
        <View style={styles.authContent}>
            <DropDownPicker
                dropDownContainerStyle={{
                    borderWidth: 0,
                    width: 150,
                    alignSelf: "flex-end",
                }}
                style={styles.chooseLanguage}
                open={open}
                value={languageValue}
                items={chooseLanguage}
                setOpen={setOpen}
                setValue={setLanguageValue}
                setItems={setChooseLanguage}
            ></DropDownPicker>
            <Image source={lettutor2}></Image>
            <AuthForm
                isForgotPassword={isForgotPassword}
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
            />
            {isLogin && (
                <Pressable
                    onPress={() => navigation.navigate("ForgotPassword")}
                >
                    <Text
                        style={{
                            color: COLORS.secondary,
                            fontWeight: "600",
                            fontSize: 16,
                        }}
                    >
                        Forgot Password
                    </Text>
                </Pressable>
            )}
            {!isForgotPassword && (
                <>
                    <Text>Or continue with</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Pressable onPress={handleFacebookLogin}>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={facebookLogo}
                            />
                        </Pressable>
                        <Pressable onPress={handleGoogleLogin}>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={googleLogo}
                            ></Image>
                        </Pressable>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 20,
                        }}
                    >
                        <Text>
                            {isLogin
                                ? "Not a member yet?"
                                : "Already a member?"}
                        </Text>
                        <Pressable onPress={switchAuthModeHandler}>
                            <Text
                                style={{
                                    color: COLORS.secondary,
                                    fontWeight: "600",
                                    fontSize: 16,
                                }}
                            >
                                {isLogin ? "Register" : "Login"}
                            </Text>
                        </Pressable>
                    </View>
                </>
            )}
        </View>
    );
};

export default AuthContent;
const styles = StyleSheet.create({
    authContent: {
        alignItems: "center",
        flex: 1,
        gap: 20,
        padding: 16,
        borderRadius: 8,
        width: "100%",
    },
    chooseLanguage: {
        borderWidth: 0,
        width: 150,
        alignSelf: "flex-end",
    },
    buttons: {
        marginTop: 8,
    },
});
