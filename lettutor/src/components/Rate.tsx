import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Rate = (props) => {
    const [maxRating] = useState([1, 2, 3, 4, 5]);

    return (
        <View style={styles.container}>
            {maxRating.map((item, index) => {
                return (
                    <TouchableOpacity
                        disabled={props.disabled}
                        key={index}
                        onPress={() => props.setRating(item)}
                    >
                        <FontAwesome
                            name={props.rating >= item ? "star" : "star-o"}
                            size={20}
                            color={props.rating >= item ? "gold" : "grey"}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Rate;
