import React from "react";
import { View, Text, TextInput } from "react-native";
import { Chip, RadioButton, Button, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
const TutorSearchScreen = () => {
    const navigator = useNavigation();
    const [selected, setSelected] = React.useState(false);
    const [nationality, setNationality] = React.useState("");
    const [selectedChip, setSelectedChip] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);
    const handleButtonSearchPress = () => {
        navigator.navigate("Tutor Search Result");
    };
    const chips = [];
    for (let i = 0; i < 10; i++) {
        chips.push(
            <Chip
                key={i}
                showSelectedCheck={true}
                onPress={() => setSelectedChip(i)}
                selected={selectedChip === i}
            >
                <Text>All</Text>
            </Chip>
        );
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <View style={{ flexDirection: "column", padding: 10, gap: 20 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Find a tutor
                    </Text>
                    <Searchbar
                        style={{
                            marginVertical: 10,
                            backgroundColor: COLORS.primaryContainer,
                        }}
                        placeholder="Search"
                        value={searchQuery}
                        onChangeText={onChangeSearch}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Nationality
                    </Text>
                    <RadioButton.Group
                        onValueChange={(newValue) => setNationality(newValue)}
                        value={nationality}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <RadioButton value="first" />
                            <Text>First</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <RadioButton value="second" />
                            <Text>Second</Text>
                        </View>
                    </RadioButton.Group>
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Specialties
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 10,
                        }}
                    >
                        {chips}
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
