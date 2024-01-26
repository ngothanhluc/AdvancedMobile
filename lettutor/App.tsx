import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import COLORS from "./src/constants/Colors";
import { store } from "./store";
import { Provider } from "react-redux";
import MainStack from "./src/Stack/MainStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./src/i18n/i18n.config";
const queryClient = new QueryClient();
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
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <PaperProvider theme={theme}>
                    <StatusBar style="auto" />
                    <MainStack />
                </PaperProvider>
            </QueryClientProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({});
