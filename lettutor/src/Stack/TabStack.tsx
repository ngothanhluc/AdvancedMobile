import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/MainScreens/HomeScreen";
import ProfileScreen from "../screens/MainScreens/ProfileScreen";
import TutorDetailScreen from "../screens/MainScreens/TutorDetailScreen";
import TutorSearchScreen from "../screens/MainScreens/TutorSearchScreen";
import TutorSearchResultScreen from "../screens/MainScreens/TutorSearchResultScreen";
const Tab = createBottomTabNavigator();
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
export default function TabStack() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home Tab" component={HomeStack} />
            <Tab.Screen name="Tutors Tab" component={TutorSearchStack} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
