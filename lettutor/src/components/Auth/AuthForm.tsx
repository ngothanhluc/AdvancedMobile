import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import { Button } from "react-native-paper";
import Input from "./Input";
import COLORS from "../../constants/Colors";
function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
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
            {!isLogin && (
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
            <Input
                label="Password"
                placeholder={"********"}
                onUpdateValue={updateInputValueHandler.bind(this, "password")}
                secure
                value={enteredPassword}
                isInvalid={passwordIsInvalid}
            />
            {!isLogin && (
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
            <View style={styles.buttons}>
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
                        {isLogin ? "Log In" : "Sign Up"}
                    </Text>
                </Pressable>
            </View>
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
