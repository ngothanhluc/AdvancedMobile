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
import AllCourseScreen from "../screens/MainScreens/AllCourseScreen";
import EBookScreen from "../screens/MainScreens/EBookScreen";
import CourseDetailsScreen from "../screens/MainScreens/CourseDetailsScreen";
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeBottomTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Tutor Detail" component={TutorDetailScreen} />
        </Stack.Navigator>
    );
};
const TutorsBottomTab = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tutors Search" component={TutorSearchScreen} />
            <Stack.Screen
                name="Tutor Search Result"
                component={TutorSearchResultScreen}
            />
        </Stack.Navigator>
    );
};
const ScheduleBottomTab = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Upcoming" component={UpcomingScreen} />
            <TopTab.Screen name="History" component={HistoryScreen} />
        </TopTab.Navigator>
    );
};
const CoursesTopTab = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="All Course" component={AllCourseScreen} />
            <TopTab.Screen name="E-books" component={EBookScreen} />
        </TopTab.Navigator>
    );
};
const CourseBottomTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Courses"
                options={{ headerShown: false }}
                component={CoursesTopTab}
            />
            <Stack.Screen
                name="Course Details"
                component={CourseDetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default function BottomTabStack() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="HomeBottomTab" component={HomeBottomTab} />
            <BottomTab.Screen
                name="TutorsBottomTab"
                component={TutorsBottomTab}
                options={{
                    headerShown: false,
                }}
            />
            <BottomTab.Screen
                name="ScheduleBottomTab"
                options={{
                    headerShown: false,
                }}
                component={ScheduleBottomTab}
            />
            <BottomTab.Screen
                name="CoursesBottomTab"
                options={{
                    headerShown: false,
                }}
                component={CourseBottomTab}
            />
            <BottomTab.Screen
                name="ProfileBottomTab"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
        </BottomTab.Navigator>
    );
}
