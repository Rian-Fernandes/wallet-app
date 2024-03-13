import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            initialRouteName="TabRoutes"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="TabRoutes" component={TabRoutes} />
        </Navigator>
    );
};
