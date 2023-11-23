import React, { useEffect } from "react";
import AuthStack from "./AuthStack";
import BottomTabStack from "./TabStack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
const MainStack = () => {
    const isLogin = useSelector(
        (state: any) => state.appReducers.auth.isAuthenticated
    );
    return (
        <NavigationContainer>
            {!isLogin ? (
                <AuthStack></AuthStack>
            ) : (
                <BottomTabStack></BottomTabStack>
            )}
        </NavigationContainer>
    );
};

export default MainStack;
