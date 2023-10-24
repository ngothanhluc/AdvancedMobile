import React, { useState } from "react";
import { View, Text, Button, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import Input from "../../components/Input";
import lettutor2 from "../../assets/logo/lettutor2.png";
import facebookLogo from "../../assets/logo/facebook.png";
import googleLogo from "../../assets/logo/google.png";
const LoginScreen = () => {
    const [open, setOpen] = useState(false);
    const [languageValue, setLanguageValue] = useState("vi");
    const [chooseLanguage, setChooseLanguage] = useState([
        { label: "Tiếng Việt", value: "vi" },
        { label: "English", value: "en" },
    ]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const handleLoginButtonClick = () => {
        navigation.navigate("Register");
    };
    const handleForgotPasswordClick = () => {
        console.log("Forgot Password");
    };
    const handleRegisterClick = () => {
        navigation.navigate("Register");
    };
    const handleFacebookLogin = () => {
        console.log("Facebook Login");
    };
    const handleGoogleLogin = () => {
        console.log("Google Login");
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
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
                <Input
                    label="Email"
                    placeholder={"abc@example.com"}
                    onChangeText={(value) => {
                        setUsername(value);
                    }}
                    wrongInput={false}
                    value={username}
                />
                <Input
                    label="Password"
                    placeholder={"********"}
                    secureTextEntry={true}
                    onChangeText={(value) => {
                        setPassword(value);
                    }}
                />
                <Pressable
                    disabled={false}
                    onPress={handleLoginButtonClick}
                    style={styles.buttonLogin}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "700",
                            color: "#fff",
                        }}
                    >
                        Login
                    </Text>
                </Pressable>
                <Pressable onPress={handleForgotPasswordClick}>
                    <Text
                        style={{
                            color: "blue",
                            fontWeight: "600",
                            fontSize: 16,
                        }}
                    >
                        Forgot Password
                    </Text>
                </Pressable>
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
                        gap: 10,
                    }}
                >
                    <Text>Not a member yet?</Text>
                    <Pressable onPress={handleRegisterClick}>
                        <Text
                            style={{
                                color: "blue",
                                fontWeight: "600",
                                fontSize: 16,
                            }}
                        >
                            Register
                        </Text>
                    </Pressable>
                </View>
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
    buttonLogin: {
        backgroundColor: "#f1c40f",
        padding: 10,
        width: "100%",
        alignItems: "center",
        borderRadius: 12,
    },
});
export default LoginScreen;
