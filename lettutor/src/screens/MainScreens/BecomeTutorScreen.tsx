import React, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const BecomeTutorScreen = () => {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState({
        tutoringName: "",
        country: "",
        dateOfBirth: "",
        interests: "",
        education: "",
        experience: "",
        profession: "",
        languages: "",
        introduction: "",
        bestAtTeaching: "",
        specialties: "",
        videoUrl: "",
    });
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            Basic Info
                        </Text>
                    </View>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                            }}
                            source={require("../../assets/user/empty-avatar.jpg")}
                        />
                        <Button icon="camera" mode="contained">
                            Upload Avatar
                        </Button>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Tutoring name
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, tutoringName: text })
                            }
                            value={userInfo.tutoringName}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Country
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, country: text })
                            }
                            value={userInfo.country}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Date of birth
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, dateOfBirth: text })
                            }
                            value={userInfo.dateOfBirth}
                        />
                    </View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            marginTop: 20,
                        }}
                    >
                        CV
                    </Text>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Interests
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, interests: text })
                            }
                            value={userInfo.interests}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Education
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, education: text })
                            }
                            value={userInfo.education}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Experience
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, experience: text })
                            }
                            value={userInfo.experience}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Current or previous profession
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, profession: text })
                            }
                            value={userInfo.profession}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Certificate
                        </Text>
                        <Button
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                marginVertical: 10,
                            }}
                            icon="camera"
                            mode="contained"
                        >
                            Upload Certificate
                        </Button>
                    </View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            marginTop: 20,
                        }}
                    >
                        Languages I Speak
                    </Text>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Languages
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, languages: text })
                            }
                            value={userInfo.languages}
                        />
                    </View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            marginTop: 20,
                        }}
                    >
                        Who I Teach
                    </Text>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Introduction
                        </Text>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            style={{
                                height: 100,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, introduction: text })
                            }
                            value={userInfo.introduction}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Iam best at teaching students who are
                        </Text>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            style={{
                                height: 100,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({
                                    ...userInfo,
                                    bestAtTeaching: text,
                                })
                            }
                            value={userInfo.bestAtTeaching}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            My Specialties are
                        </Text>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            style={{
                                height: 100,
                                borderColor: "gray",
                                borderWidth: 1,
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                            }}
                            onChangeText={(text) =>
                                setUserInfo({ ...userInfo, specialties: text })
                            }
                            value={userInfo.specialties}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            Introduction Video
                        </Text>
                        <Button
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1,
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                marginVertical: 10,
                            }}
                            icon="camera"
                            mode="contained"
                        >
                            Upload Introduction Video
                        </Button>
                    </View>
                    <Button
                        mode="contained"
                        style={{
                            marginTop: 40,
                            marginBottom: 20,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{ color: "#fff", fontSize: 18 }}>
                            Submit
                        </Text>
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
export default BecomeTutorScreen;
