import React, { useState } from "react";
import { View, Text, Button, Pressable, Image, StyleSheet } from "react-native";
import tutorAvatar from "../assets/tutor/keegan-avatar.png";
import Rate from "./Rate";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import SpecialtyTag from "./SpecialtyTag";
const TutorCard = (props) => {
    const [rating, setRating] = useState(5);
    const navigator = useNavigation();
    const specialties =
        "business-english,conversational-english,english-for-kids,ielts,starters,movers,flyers,ket,pet,toefl,toeic";
    const specialtiesArray = specialties.split(",");
    const bio =
        "I am passionate about running and fitness, I often compete in trail/mountain running events and I love pushing myself. I am training to one day take part in ultra-endurance events. I also enjoy watching rugby on the weekends, reading and watching podcasts on Youtube. My most memorable life experience would be living in and traveling around Southeast Asia.";
    const handleRating = (rating) => {
        setRating(rating);
    };
    const handleBookClick = () => {
        navigator.navigate("Tutor Detail");
    };

    return (
        <View
            style={{
                padding: 20,
                gap: 20,
                borderWidth: 1,
                borderColor: COLORS.primary,
                borderRadius: 12,
                marginVertical: 20,
            }}
        >
            <View
                style={{
                    flexDirection: "row",

                    gap: 20,
                }}
            >
                <View
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100,
                        overflow: "hidden",
                    }}
                >
                    <Image
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 100,
                        }}
                        source={tutorAvatar}
                    ></Image>
                </View>

                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Text>Joan Gacer</Text>
                    <Text>Taiwan</Text>
                    <Rate
                        disabled={true}
                        rating={rating}
                        setRating={handleRating}
                    ></Rate>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: "flex-end",
                        justifyContent: "center",
                    }}
                >
                    <AntDesign name="hearto" size={24} color="black" />
                </View>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                {specialtiesArray.map((specialty, index) => {
                    return <SpecialtyTag specialty={specialty} key={index} />;
                })}
            </View>
            <Text>{bio}</Text>
            {props.bookAble && (
                <Pressable
                    onPress={handleBookClick}
                    style={{
                        alignSelf: "flex-end",
                        backgroundColor: COLORS.secondary,
                        borderRadius: 12,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                        }}
                    >
                        <AntDesign name="calendar" size={24} color="white" />
                        <Text style={{ color: "white" }}>Book</Text>
                    </View>
                </Pressable>
            )}
        </View>
    );
};

const styles = StyleSheet.create({});
export default TutorCard;
