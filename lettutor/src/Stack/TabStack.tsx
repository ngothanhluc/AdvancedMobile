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
import { Icon } from "react-native-paper";
import SettingScreen from "../screens/MainScreens/SettingScreen";
import PDFViewScreen from "../screens/MainScreens/PDFViewScreen";
import TutorFeedbacksScreen from "../screens/MainScreens/TutorFeedbacksScreen";
import BecomeTutorScreen from "../screens/MainScreens/BecomeTutorScreen";
import ChooseLearningDateScreen from "../screens/MainScreens/ChooseLearningDateScreen";
import ChooseLearningTimeScreen from "../screens/MainScreens/ChooseLearningTimeScreen";
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeBottomTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home Screen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Tutor Detail" component={TutorDetailScreen} />
            <Stack.Screen
                name="Choose Learning Date"
                component={ChooseLearningDateScreen}
            />
            <Stack.Screen
                name="Choose Learning Time"
                component={ChooseLearningTimeScreen}
            />
            <Stack.Screen
                name="Tutor Feedbacks"
                component={TutorFeedbacksScreen}
            />
        </Stack.Navigator>
    );
};
const TutorsBottomTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Tutors Search"
                component={TutorSearchScreen}
            />
            <Stack.Screen
                name="Tutor Search Result"
                component={TutorSearchResultScreen}
            />
            <Stack.Screen name="Tutor Detail" component={TutorDetailScreen} />
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
            <Stack.Screen name="PDF View" component={PDFViewScreen} />
        </Stack.Navigator>
    );
};

const SettingsBottomTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                options={{ headerShown: false }}
                component={SettingScreen}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Become Tutor" component={BecomeTutorScreen} />
        </Stack.Navigator>
    );
};
export default function BottomTabStack() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="HomeBottomTab"
                component={HomeBottomTab}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="home" color={color} size={size}></Icon>
                    ),
                }}
            />
            <BottomTab.Screen
                name="TutorsBottomTab"
                component={TutorsBottomTab}
                options={{
                    tabBarLabel: "Tutors",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            source="account-search"
                            color={color}
                            size={size}
                        ></Icon>
                    ),
                }}
            />
            <BottomTab.Screen
                name="ScheduleBottomTab"
                component={ScheduleBottomTab}
                options={{
                    tabBarLabel: "Schedule",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            source="calendar"
                            color={color}
                            size={size}
                        ></Icon>
                    ),
                }}
            />
            <BottomTab.Screen
                name="CoursesBottomTab"
                component={CourseBottomTab}
                options={{
                    tabBarLabel: "Courses",
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            source="book-open"
                            color={color}
                            size={size}
                        ></Icon>
                    ),
                }}
            />
            <BottomTab.Screen
                name="SettingsBottomTab"
                component={SettingsBottomTab}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="cog" color={color} size={size}></Icon>
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}
