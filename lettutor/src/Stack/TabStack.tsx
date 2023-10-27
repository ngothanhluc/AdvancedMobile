import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryScreen from "../screens/MainScreens/HistoryScreen";
import HomeScreen from "../screens/MainScreens/HomeScreen";
import ProfileScreen from "../screens/MainScreens/ProfileScreen";
import TutorDetailScreen from "../screens/MainScreens/TutorDetailScreen";
import TutorSearchResultScreen from "../screens/MainScreens/TutorSearchResultScreen";
import TutorSearchScreen from "../screens/MainScreens/TutorSearchScreen";
import UpcomingScreen from "../screens/MainScreens/UpcomingScreen";
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Tutor Detail" component={TutorDetailScreen} />
        </Stack.Navigator>
    );
};
const TutorSearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerTitle: "Tutors" }}
                name="Tutors Search"
                component={TutorSearchScreen}
            />
            <Stack.Screen
                name="Tutor Search Result"
                component={TutorSearchResultScreen}
            />
        </Stack.Navigator>
    );
};
const ScheduleStack = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Upcoming" component={UpcomingScreen} />
            <TopTab.Screen name="History" component={HistoryScreen} />
        </TopTab.Navigator>
    );
};
export default function BottomTabStack() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="Home Tab" component={HomeStack} />
            <BottomTab.Screen name="Tutors Tab" component={TutorSearchStack} />
            <BottomTab.Screen
                name="Schedule Tab"
                options={{
                    headerTitle: "Schedule",
                    headerShown: true,
                }}
                component={ScheduleStack}
            />
            <BottomTab.Screen name="Profile Tab" component={ProfileScreen} />
        </BottomTab.Navigator>
    );
}
