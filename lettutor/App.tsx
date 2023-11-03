import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import AuthStack from "./src/Stack/AuthStack";
import BottomTabStack from "./src/Stack/TabStack";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import COLORS from "./src/constants/Colors";
const theme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: COLORS.primary,
        primaryContainer: COLORS.primaryContainer,
        secondary: COLORS.secondary,
        secondaryContainer: COLORS.secondaryContainer,
        surface: COLORS.surface,
        background: COLORS.background,
    },
};
export default function App() {
    const user = "null";
    return (
        <PaperProvider theme={theme}>
            <StatusBar hidden={true} />
            <NavigationContainer>
                {!user ? (
                    <AuthStack></AuthStack>
                ) : (
                    <BottomTabStack></BottomTabStack>
                )}
            </NavigationContainer>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({});
