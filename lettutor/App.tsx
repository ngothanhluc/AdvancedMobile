import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TutorDetailScreen from "./src/screens/MainScreens/TutorDetailScreen";
import AuthStack from "./src/Stack/AuthStack";
import TabStack from "./src/Stack/TabStack";
const Stack = createStackNavigator();

export default function App() {
    const user = null;
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                {user ? <AuthStack></AuthStack> : <TabStack></TabStack>}
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});
