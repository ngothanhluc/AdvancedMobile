import React, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    ScrollView,
} from "react-native";
import tutorAvatar from "../../assets/tutor/keegan-avatar.png";
import Rate from "../../components/Rate";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import COLORS from "../../constants/Colors";
import { Video, ResizeMode } from "expo-av";
import SpecialtyTag from "../../components/SpecialtyTag";
import { Button } from "react-native-paper";
const TutorDetailScreen = () => {
    const [rating, setRating] = useState(4);
    const specialties =
        "business-english,conversational-english,english-for-kids,ielts,starters,movers,flyers,ket,pet,toefl,toeic";
    const specialtiesArray = specialties.split(",");
    const bio =
        "I am passionate about running and fitness, I often compete in trail/mountain running events and I love pushing myself. I am training to one day take part in ultra-endurance events. I also enjoy watching rugby on the weekends, reading and watching podcasts on Youtube. My most memorable life experience would be living in and traveling around Southeast Asia.";
    const interests =
        " I loved the weather, the scenery and the laid-back lifestyle of the locals.";
    const experience =
        "I have more than 10 years of teaching english experience";
    const handleRating = (rating) => {
        setRating(rating);
    };
    const handleFavoritePress = () => {
        console.log("Favorite pressed");
    };
    const video = React.useRef(null);
    const [status, setStatus] = useState({});
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView
                style={{
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                }}
            >
                <View style={{ gap: 20, marginBottom: 20 }}>
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
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                Joan Gacer
                            </Text>
                            <Text>Taiwan</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    gap: 10,
                                    alignItems: "center",
                                }}
                            >
                                <Rate
                                    disabled={true}
                                    rating={rating}
                                    setRating={handleRating}
                                ></Rate>
                                <Text>( 20 )</Text>
                            </View>
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
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Pressable onPress={handleFavoritePress}>
                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Icon
                                    color={COLORS.primary}
                                    source="cards-heart-outline"
                                    size={30}
                                />
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        color: COLORS.primary,
                                    }}
                                >
                                    Favorite
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={handleFavoritePress}>
                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Icon
                                    color={COLORS.primary}
                                    source="message-star-outline"
                                    size={30}
                                />
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        color: COLORS.primary,
                                    }}
                                >
                                    Review
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={handleFavoritePress}>
                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Icon
                                    color={COLORS.primary}
                                    source="alert-octagon-outline"
                                    size={30}
                                />
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        color: COLORS.primary,
                                    }}
                                >
                                    Report
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                    <View
                        style={{
                            borderRadius: 12,
                            borderWidth: 3,
                            overflow: "hidden",
                            borderColor: COLORS.primary,
                        }}
                    >
                        <Video
                            ref={video}
                            isLooping
                            useNativeControls
                            style={{
                                width: "100%",
                                height: 300,
                            }}
                            source={{
                                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                            }}
                            onPlaybackStatusUpdate={(status) =>
                                setStatus(() => status)
                            }
                            resizeMode={ResizeMode.CONTAIN}
                        ></Video>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "bold" }}>Language</Text>
                        <SpecialtyTag specialty="English"></SpecialtyTag>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "bold" }}>Specialties</Text>

                        <View
                            style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                gap: 10,
                            }}
                        >
                            {specialtiesArray.map((specialty) => (
                                <SpecialtyTag
                                    key={specialty}
                                    specialty={specialty}
                                ></SpecialtyTag>
                            ))}
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "bold" }}>Interests</Text>
                        <Text>{interests}</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "bold" }}>
                            Teaching Experience
                        </Text>
                        <Text>{experience}</Text>
                    </View>
                    <Button
                        mode="outlined"
                        onPress={() => console.log("Book a lesson")}
                    >
                        Book a lesson
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
export default TutorDetailScreen;
