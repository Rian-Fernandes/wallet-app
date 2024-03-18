import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "@src/components/Header/Header";
import { User } from "phosphor-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    ViewProfile,
    ProfileName,
    ViewRight,
    ViewIcon,
} from "./styles";

export const Settings = () => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    const handleGoProfile = () => {
        // navigation.navigate("")
        console.warn("Clicou aqui");
    };

    return (
        <>
            <Header appName="Configurações" />
            <Container>
                <ViewProfile>
                    <ViewIcon>
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color={COLORS.BLACK}
                        />
                    </ViewIcon>
                    <ViewRight>
                        <ProfileName>Rian Fernandes</ProfileName>
                        <TouchableOpacity onPress={handleGoProfile}>
                            <MaterialIcons
                                name="navigate-next"
                                size={24}
                                color={COLORS.BLACK}
                            />
                        </TouchableOpacity>
                    </ViewRight>
                </ViewProfile>

                <ViewProfile>
                    <ViewIcon>
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color={COLORS.BLACK}
                        />
                    </ViewIcon>
                    <ViewRight>
                        <ProfileName>Rian Fernandes</ProfileName>
                        <TouchableOpacity onPress={handleGoProfile}>
                            <MaterialIcons
                                name="navigate-next"
                                size={24}
                                color={COLORS.BLACK}
                            />
                        </TouchableOpacity>
                    </ViewRight>
                </ViewProfile>

                <ViewProfile>
                    <ViewIcon>
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color={COLORS.BLACK}
                        />
                    </ViewIcon>
                    <ViewRight>
                        <ProfileName>Rian Fernandes</ProfileName>
                        <TouchableOpacity onPress={handleGoProfile}>
                            <MaterialIcons
                                name="navigate-next"
                                size={24}
                                color={COLORS.BLACK}
                            />
                        </TouchableOpacity>
                    </ViewRight>
                </ViewProfile>

                <ViewProfile>
                    <ViewIcon>
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color={COLORS.BLACK}
                        />
                    </ViewIcon>
                    <ViewRight>
                        <ProfileName>Rian Fernandes</ProfileName>
                        <TouchableOpacity onPress={handleGoProfile}>
                            <MaterialIcons
                                name="navigate-next"
                                size={24}
                                color={COLORS.BLACK}
                            />
                        </TouchableOpacity>
                    </ViewRight>
                </ViewProfile>
            </Container>
        </>
    );
};
