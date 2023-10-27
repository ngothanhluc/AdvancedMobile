import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    Pressable,
    Image,
    StyleSheet,
    ScrollView,
} from "react-native";
import tutorAvatar from "../../assets/tutor/keegan-avatar.png";
import Rate from "../../components/Rate";
import { SafeAreaView } from "react-native-safe-area-context";

const TutorDetailScreen = () => {
    const [rating, setRating] = useState(5);
    const specialties =
        "business-english,conversational-english,english-for-kids,ielts,starters,movers,flyers,ket,pet,toefl,toeic";
    const specialtiesArray = specialties.split(",");
    const bio =
        "I am passionate about running and fitness, I often compete in trail/mountain running events and I love pushing myself. I am training to one day take part in ultra-endurance events. I also enjoy watching rugby on the weekends, reading and watching podcasts on Youtube. My most memorable life experience would be living in and traveling around Southeast Asia.";
    const handleRating = (rating) => {
        setRating(rating);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ padding: 10 }}>
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
                    ></View>
                </View>

                <Text>{bio}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
export default TutorDetailScreen;
