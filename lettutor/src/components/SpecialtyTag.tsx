import React from "react";
import { View, Text } from "react-native";
import COLORS from "../constants/Colors";
const SpecialtyTag = (props) => {
    const specialty = props.specialty.replaceAll("-", " ");

    return (
        <View
            style={{
                alignSelf: "flex-start",
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderWidth: 1,
                backgroundColor: "#fff",
                borderRadius: 6,
                borderColor: COLORS.primary,
            }}
        >
            <Text
                style={{
                    fontSize: 14,
                    color: COLORS.primary,
                    fontWeight: "bold",
                }}
            >
                {specialty}
            </Text>
        </View>
    );
};

export default SpecialtyTag;
