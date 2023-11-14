import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import AuthStack from "./src/Stack/AuthStack";
import BottomTabStack from "./src/Stack/TabStack";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import COLORS from "./src/constants/Colors";
import { store } from "./store";
import { Provider } from "react-redux";
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
    const user = null;
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <StatusBar style="auto" />
                <NavigationContainer>
                    {!user ? (
                        <AuthStack></AuthStack>
                    ) : (
                        <BottomTabStack></BottomTabStack>
                    )}
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({});
