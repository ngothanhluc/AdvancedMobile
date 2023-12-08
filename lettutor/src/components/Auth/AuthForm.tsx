import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constants/Colors";
import Input from "./Input";
function AuthForm({ isLogin, isForgotPassword, onSubmit, credentialsInvalid }) {
    const navigation = useNavigation();
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

    const {
        email: emailIsInvalid,
        confirmEmail: emailsDontMatch,
        password: passwordIsInvalid,
        confirmPassword: passwordsDontMatch,
    } = credentialsInvalid;

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case "email":
                setEnteredEmail(enteredValue);
                break;
            case "confirmEmail":
                setEnteredConfirmEmail(enteredValue);
                break;
            case "password":
                setEnteredPassword(enteredValue);
                break;
            case "confirmPassword":
                setEnteredConfirmPassword(enteredValue);
                break;
        }
    }

    function submitHandler() {
        onSubmit({
            email: enteredEmail,
            confirmEmail: enteredConfirmEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
        });
    }

    return (
        <View style={{ width: "100%" }}>
            <Input
                label="Email Address"
                placeholder={"abc@example.com"}
                onUpdateValue={updateInputValueHandler.bind(this, "email")}
                value={enteredEmail}
                keyboardType="email-address"
                isInvalid={emailIsInvalid}
            />
            {!isForgotPassword && !isLogin && (
                <Input
                    label="Confirm Email Address"
                    placeholder={"abc@example.com"}
                    onUpdateValue={updateInputValueHandler.bind(
                        this,
                        "confirmEmail"
                    )}
                    value={enteredConfirmEmail}
                    keyboardType="email-address"
                    isInvalid={emailsDontMatch}
                />
            )}
            {!isForgotPassword && (
                <Input
                    label="Password"
                    placeholder={"********"}
                    onUpdateValue={updateInputValueHandler.bind(
                        this,
                        "password"
                    )}
                    secure
                    value={enteredPassword}
                    isInvalid={passwordIsInvalid}
                />
            )}

            {!isLogin && !isForgotPassword && (
                <Input
                    label="Confirm Password"
                    placeholder={"********"}
                    onUpdateValue={updateInputValueHandler.bind(
                        this,
                        "confirmPassword"
                    )}
                    secure
                    value={enteredConfirmPassword}
                    isInvalid={passwordsDontMatch}
                />
            )}
            <Pressable
                disabled={false}
                onPress={submitHandler}
                style={styles.buttonLogin}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "700",
                        color: "#fff",
                    }}
                >
                    {isForgotPassword
                        ? "Send Recovery Email"
                        : isLogin
                        ? "Log In"
                        : "Sign Up"}
                </Text>
            </Pressable>
            {isForgotPassword && (
                <Pressable
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                    style={{ width: "100%", alignItems: "center" }}
                >
                    <Text
                        style={{
                            color: COLORS.secondary,
                            fontWeight: "600",
                            fontSize: 16,
                        }}
                    >
                        Back to Login
                    </Text>
                </Pressable>
            )}
        </View>
    );
}

export default AuthForm;

const styles = StyleSheet.create({
    input: {
        width: "100%",
    },
    buttonLogin: {
        marginVertical: 8,
        backgroundColor: COLORS.primary,
        padding: 10,
        width: "100%",
        alignItems: "center",
        borderRadius: 12,
    },
});
