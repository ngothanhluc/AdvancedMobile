import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import RegisterScreen from "../screens/AuthScreens/RegisterScreen";
import ForgotPasswordScreen from "../screens/AuthScreens/ForgotPasswordScreen";
const AuthStackNavigator = createStackNavigator();

export default function AuthStack() {
    return (
        <AuthStackNavigator.Navigator initialRouteName="Login">
            <AuthStackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <AuthStackNavigator.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <AuthStackNavigator.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
            />
        </AuthStackNavigator.Navigator>
    );
}
