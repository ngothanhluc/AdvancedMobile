import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { ResizeMode, Video } from "expo-av";
import React, { useEffect, useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Alert,
} from "react-native";
import {
    Button,
    Modal,
    Portal,
    PaperProvider,
    Icon,
    Card,
    Checkbox,
    TextInput,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingOverlay from "../../components/LoadingOverlay";
import Rate from "../../components/Rate";
import SpecialtyTag from "../../components/SpecialtyTag";
import COLORS from "../../constants/Colors";
import TutorAPI from "../../services/TutorAPI";
import type TutorDetails from "../../types/tutorDetails";
import { useQueryClient } from "@tanstack/react-query";
const TutorDetailScreen = ({ route }: any) => {
    const queryClient = useQueryClient();
    const { tutorID } = route.params;
    const navigator = useNavigation();
    const { data: tutor, isLoading } = useQuery<TutorDetails>({
        queryKey: ["tutorDetail", tutorID],
        queryFn: () => TutorAPI.getTutorByID(tutorID),
    });
    const [isFavorite, setIsFavorite] = useState(tutor?.isFavorite); // TODO: get from API
    const [rating, setRating] = useState(4);
    const [visible, setVisible] = React.useState(false);
    const [checkedValue, setCheckedValue] = useState({
        annoying: false,
        fake: false,
        inappropriate: false,
        other: "",
    });
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const specialties =
        "business-english,conversational-english,english-for-kids,ielts,starters,movers,flyers,ket,pet,toefl,toeic";
    const specialtiesArray = specialties.split(",");
    const handleRating = (rating) => {
        setRating(rating);
    };
    const handleFavoritePress = async () => {
        try {
            const response = await TutorAPI.addFavoriteTutor(tutorID);
            queryClient.invalidateQueries("tutorDetail");
            if (response.result === 1) {
                setIsFavorite(false);
            } else {
                setIsFavorite(true);
            }
        } catch (error) {
            Alert.alert("Error", error.response.data.message);
        }
    };
    const video = React.useRef(null);
    const [status, setStatus] = useState({});
    const [submittable, setSubmittable] = useState(false);
    const handleReviewButtonPress = () => {
        navigator.navigate("Tutor Feedbacks", { tutorID: tutorID });
    };
    const transformValue = () => {
        const result = [];
        if (checkedValue.annoying) {
            result.push("annoying");
        }
        if (checkedValue.fake) {
            result.push("fake");
        }
        if (checkedValue.inappropriate) {
            result.push("inappropriate");
        }
        if (checkedValue.other !== "") {
            result.push(checkedValue.other);
        }
        return result.join(",");
    };
    const handleSubmit = async () => {
        try {
            const response = await TutorAPI.reportTutor({
                tutorId: tutorID,
                content: transformValue(),
            });
        } catch (error) {
            Alert.alert("Error", error.response.data.message);
        }
        hideModal();
    };
    useEffect(() => {
        if (
            checkedValue.annoying ||
            checkedValue.fake ||
            checkedValue.inappropriate ||
            checkedValue.other !== ""
        ) {
            setSubmittable(true);
        } else {
            setSubmittable(false);
        }
    }, [checkedValue]);
    if (isLoading) {
        return <LoadingOverlay message={"Loading Tutor Details..."} />;
    }
    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <ScrollView
                    style={{
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                    }}
                >
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal}>
                            <Card>
                                <Card.Title
                                    title={
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: 20,
                                            }}
                                        >
                                            {`Report ${tutor?.User.name}`}
                                        </Text>
                                    }
                                    subtitle="Help us understand what's happening"
                                />
                                <Card.Content>
                                    <Checkbox.Item
                                        label="This tutor is annoying me"
                                        status={
                                            checkedValue.annoying
                                                ? "checked"
                                                : "unchecked"
                                        }
                                        onPress={() => {
                                            setCheckedValue({
                                                ...checkedValue,
                                                annoying:
                                                    !checkedValue.annoying,
                                            });
                                        }}
                                    />
                                    <Checkbox.Item
                                        label="This profile is pretending be someone or is fake"
                                        status={
                                            checkedValue.fake
                                                ? "checked"
                                                : "unchecked"
                                        }
                                        onPress={() => {
                                            setCheckedValue({
                                                ...checkedValue,
                                                fake: !checkedValue.fake,
                                            });
                                        }}
                                    />
                                    <Checkbox.Item
                                        label="Inappropriate profile photo"
                                        status={
                                            checkedValue.inappropriate
                                                ? "checked"
                                                : "unchecked"
                                        }
                                        onPress={() => {
                                            setCheckedValue({
                                                ...checkedValue,
                                                inappropriate:
                                                    !checkedValue.inappropriate,
                                            });
                                        }}
                                    />
                                    <TextInput
                                        label="Other"
                                        value={checkedValue.other}
                                        onChangeText={(text) => {
                                            setCheckedValue({
                                                ...checkedValue,
                                                other: text,
                                            });
                                        }}
                                    />
                                </Card.Content>
                                <Card.Actions>
                                    <Button onPress={hideModal}>Cancel</Button>
                                    <Button
                                        disabled={!submittable}
                                        onPress={handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                </Card.Actions>
                            </Card>
                        </Modal>
                    </Portal>
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
                                    source={
                                        tutor?.User?.avatar !== null &&
                                        tutor?.User?.avatar !==
                                            "https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png"
                                            ? { uri: tutor?.User.avatar }
                                            : {
                                                  uri: "https://picsum.photos/200",
                                              }
                                    }
                                ></Image>
                            </View>

                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text
                                    style={{ fontSize: 20, fontWeight: "bold" }}
                                >
                                    {tutor?.User?.name || "Keegan"}
                                </Text>
                                <Text>{tutor?.User?.language}</Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <Rate
                                        disabled={true}
                                        rating={tutor?.rating}
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

                        <Text>{tutor?.bio}</Text>
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
                                    {isFavorite ? (
                                        <AntDesign
                                            name="heart"
                                            size={30}
                                            color="red"
                                        />
                                    ) : (
                                        <AntDesign
                                            name="hearto"
                                            size={30}
                                            color={COLORS.primary}
                                        />
                                    )}

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
                            <Pressable onPress={handleReviewButtonPress}>
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
                            <Pressable onPress={showModal}>
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
                                source={
                                    tutor?.video
                                        ? { uri: tutor.video }
                                        : {
                                              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                                          }
                                }
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
                            <Text style={{ fontWeight: "bold" }}>
                                Specialties
                            </Text>

                            <View
                                style={{
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    gap: 10,
                                }}
                            >
                                {tutor?.specialties
                                    ?.split(",")
                                    .map((specialty) => (
                                        <SpecialtyTag
                                            key={specialty}
                                            specialty={specialty}
                                        ></SpecialtyTag>
                                    ))}
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontWeight: "bold" }}>
                                Interests
                            </Text>
                            <Text>{tutor?.interests}</Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: "bold" }}>
                                Teaching Experience
                            </Text>
                            <Text>{tutor?.experience}</Text>
                        </View>
                        <Button
                            mode="outlined"
                            onPress={() =>
                                navigator.navigate("Choose Learning Date", {
                                    tutorId: tutorID,
                                })
                            }
                        >
                            Book a lesson
                        </Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({});
export default TutorDetailScreen;
