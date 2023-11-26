import React from "react";
import { View, Text, TextInput } from "react-native";
import { Chip, RadioButton, Button, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import type { Specialty } from "../../redux/reducers/specialtySlice";
const TutorSearchScreen = () => {
    const navigator = useNavigation();
    const [nationality, setNationality] = React.useState({
        isVietNamese: false,
    });
    const [selectedChip, setSelectedChip] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState("");
    const onChangeSearch = (query) => setSearchQuery(query);
    const handleButtonSearchPress = () => {
        const specialty = [
            selectedChip === 0 ? "" : specialties[selectedChip].key,
        ];
        navigator.navigate("Tutor Search Result", {
            search: searchQuery,
            filters: {
                specialties: specialty,
                nationality: nationality,
            },
        });
    };
    const specialties: Specialty[] = useSelector(
        (state: any) => state.appReducers.specialty.specialties
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <View style={{ flexDirection: "column", padding: 20, gap: 20 }}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                        Find a tutor
                    </Text>
                    <Searchbar
                        style={{
                            marginVertical: 10,
                            backgroundColor: COLORS.primaryContainer,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 1,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}
                        placeholder="Search"
                        value={searchQuery}
                        onChangeText={onChangeSearch}
                    />
                </View>

                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            marginBottom: 10,
                        }}
                    >
                        Nationality
                    </Text>
                    <RadioButton.Group
                        onValueChange={(newValue) => {
                            if (newValue === "vietnamese") {
                                setNationality({ isVietNamese: true });
                            } else {
                                setNationality({ isVietNamese: false });
                            }
                        }}
                        value={
                            nationality.isVietNamese ? "vietnamese" : "foreign"
                        }
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <RadioButton value="vietnamese" />
                            <Text style={{ fontSize: 16 }}>Vietnamese</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <RadioButton value="foreign" />
                            <Text style={{ fontSize: 16 }}>Foreign</Text>
                        </View>
                    </RadioButton.Group>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            marginBottom: 10,
                        }}
                    >
                        Specialties
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 14,
                        }}
                    >
                        {specialties.map(
                            (specialty: Specialty, index: number) => {
                                return (
                                    <Chip
                                        style={{
                                            paddingVertical: 6,
                                            paddingHorizontal: 10,
                                        }}
                                        key={specialty.key}
                                        showSelectedCheck={true}
                                        onPress={() => setSelectedChip(index)}
                                        selected={selectedChip === index}
                                    >
                                        <Text>{specialty.name}</Text>
                                    </Chip>
                                );
                            }
                        )}
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                    <Button mode="text">
                        <Text>Clear filters</Text>
                    </Button>
                    <Button mode="contained" onPress={handleButtonSearchPress}>
                        Search
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TutorSearchScreen;
