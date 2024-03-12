import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routes";

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import theme from "../src/styles/theme";
import { Login } from "./screens/Auth/Login/Login";

export const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <StatusBar
                        style="dark"
                        translucent
                        backgroundColor="transparent"
                    />
                    <Routes />
                </NavigationContainer>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
};

export default App;
