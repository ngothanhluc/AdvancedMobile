import React from "react";
import { View, Text } from "react-native";
import COLORS from "../constants/Colors";
const SpecialtyTag = (props) => {
    return (
        <View
            style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: COLORS.primary,
            }}
        >
            <Text>{props.specialty}</Text>
        </View>
    );
};

export default SpecialtyTag;
