import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Profile } from "@src/screens/App/Profile";
import { TabRoutes } from "./tab.routes";
import { AddCartao } from "@src/screens/App/AddCartao";
import { DetailsCard } from "@src/screens/App/DetailsCard";

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
            <Screen name="Profile" component={Profile} />
            <Screen name="AddCartao" component={AddCartao} />
            <Screen name="DetailsCard" component={DetailsCard} />
        </Navigator>
    );
};
