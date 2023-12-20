import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    Pressable,
    Image,
    StyleSheet,
    Alert,
} from "react-native";
import Rate from "./Rate";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import SpecialtyTag from "./SpecialtyTag";
import type Tutor from "../types/tutor";
import TutorAPI from "../services/TutorAPI";
import { useQuery } from "@tanstack/react-query";
interface Props {
    bookAble?: boolean;
    tutor: Tutor;
}
const TutorCard = ({ bookAble, tutor }: Props) => {
    const [rating, setRating] = useState(5);
    const [isFavoriteTutor, setIsFavoriteTutor] = useState(
        tutor.isFavoriteTutor
    );
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
        navigator.navigate("Tutor Detail", { tutorID: tutor.userId });
    };
    const handleFavorite = () => {
        try {
            const response = TutorAPI.addFavoriteTutor(tutor.userId);
            if (response.result === 1) {
                setIsFavoriteTutor(false);
            } else {
                setIsFavoriteTutor(true);
            }
        } catch (error) {
            Alert.alert("Error", error.response.data.message);
        }
    };
    return (
        <View
            style={{
                padding: 20,
                gap: 20,
                backgroundColor: COLORS.background,
                borderWidth: 1,
                borderColor: COLORS.primary,
                borderRadius: 12,
                marginVertical: 20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
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
                        source={
                            tutor?.avatar !== null &&
                            tutor?.avatar !==
                                "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png"
                                ? { uri: tutor.avatar }
                                : { uri: "https://picsum.photos/200" }
                        }
                    ></Image>
                </View>

                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {tutor.name}
                    </Text>
                    <Text style={{ fontSize: 16 }}>{tutor.language}</Text>
                    <Rate
                        disabled={true}
                        rating={tutor.rating}
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
                    {isFavoriteTutor ? (
                        <AntDesign
                            name="heart"
                            size={24}
                            color="red"
                            onPress={handleFavorite}
                        />
                    ) : (
                        <AntDesign
                            name="hearto"
                            size={24}
                            color={COLORS.primary}
                            onPress={handleFavorite}
                        />
                    )}
                </View>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                {tutor.specialties.split(",").map((specialty, index) => {
                    return <SpecialtyTag specialty={specialty} key={index} />;
                })}
            </View>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{bio}</Text>
            {bookAble && (
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
