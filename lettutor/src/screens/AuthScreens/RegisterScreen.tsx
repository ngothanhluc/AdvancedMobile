import React, { useState } from "react";
import { View, Text, Button, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import Input from "../../components/Input";
import lettutor2 from "../../assets/logo/lettutor2.png";
import facebookLogo from "../../assets/logo/facebook.png";
import googleLogo from "../../assets/logo/google.png";
import COLORS from "../../constants/Colors";
const RegisterScreen = () => {
    const [open, setOpen] = useState(false);
    const [languageValue, setLanguageValue] = useState("vi");
    const [chooseLanguage, setChooseLanguage] = useState([
        { label: "Tiếng Việt", value: "vi" },
        { label: "English", value: "en" },
    ]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigation = useNavigation();
    const handleRegisterButtonClick = () => {
        navigation.navigate("Register");
    };

    const handleFacebookLogin = () => {
        console.log("Facebook Login");
    };
    const handleGoogleLogin = () => {
        console.log("Google Login");
    };
    const handleLoginClick = () => {
        navigation.navigate("Login");
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
                <Input
                    label="Confirm Password"
                    placeholder={"********"}
                    secureTextEntry={true}
                    onChangeText={(value) => {
                        setConfirmPassword(value);
                    }}
                />
                <Pressable
                    disabled={false}
                    onPress={handleRegisterButtonClick}
                    style={styles.buttonRegister}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "700",
                            color: "#fff",
                        }}
                    >
                        Register
                    </Text>
                </Pressable>
                <Text>Or continue with</Text>
                <View style={{ flexDirection: "row", gap: 40 }}>
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
                    <Text>Already have a account?</Text>
                    <Pressable onPress={handleLoginClick}>
                        <Text
                            style={{
                                color: COLORS.secondary,
                                fontWeight: "600",
                                fontSize: 16,
                            }}
                        >
                            Login
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
    buttonRegister: {
        backgroundColor: COLORS.primary,
        padding: 10,
        width: "100%",
        alignItems: "center",
        borderRadius: 12,
    },
});
export default RegisterScreen;
