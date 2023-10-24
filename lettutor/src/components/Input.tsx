import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.label}</Text>
            <TextInput
                secureTextEntry={
                    props.secureTextEntry ? props.secureTextEntry : false
                }
                style={[styles.input, props.wrongInput && styles.wrongInput]}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 16,
        width: "100%",
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: "100%",
    },
    wrongInput: {
        borderColor: "red",
    },
});
export default Input;
