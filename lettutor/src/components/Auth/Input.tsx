import { View, Text, TextInput, StyleSheet } from "react-native";

import COLORS from "../../constants/Colors";

function Input({
    label,
    keyboardType,
    secure,
    onUpdateValue,
    value,
    isInvalid,
    placeholder,
}) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
                {label}
            </Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
                placeholder={placeholder}
            />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: "black",
        marginBottom: 4,
        fontSize: 16,
        fontWeight: "600",
    },
    labelInvalid: {
        color: COLORS.error,
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: COLORS.primary,
        fontSize: 16,
    },
    inputInvalid: {
        borderColor: COLORS.error,
        borderWidth: 2,
    },
});
