import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    Container,
    ViewProfile,
    ProfileName,
    ViewRight,
    ViewIcon,
} from "./styles";

interface IProfile {
    name: string;
    iconRight?: boolean;
    iconLeft?: boolean;
    typeUser?: boolean;
    typeNotification?: boolean;
    typeWallet?: boolean;
    typeLogin?: boolean;
    typeCall?: boolean;
    onPress: () => void;
}

export const Configs = ({
    name,
    iconRight,
    iconLeft,
    typeUser,
    typeNotification,
    typeWallet,
    typeLogin,
    typeCall,
    onPress,
}: IProfile) => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    return (
        <Container>
            <ViewProfile>
                {iconLeft && (
                    <>
                        {typeUser && (
                            <ViewIcon>
                                <Ionicons
                                    name="person"
                                    size={24}
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}
                        {typeNotification && (
                            <ViewIcon>
                                <MaterialCommunityIcons
                                    name="bell"
                                    size={24}
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}
                        {typeWallet && (
                            <ViewIcon>
                                <Entypo
                                    name="wallet"
                                    size={24}
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}
                        {typeLogin && (
                            <ViewIcon>
                                <MaterialIcons
                                    name="admin-panel-settings"
                                    size={24}
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}
                        {typeCall && (
                            <ViewIcon>
                                <MaterialIcons
                                    name="phone-in-talk"
                                    size={24}
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}
                    </>
                )}

                <ViewRight>
                    <ProfileName>{name}</ProfileName>
                    <TouchableOpacity onPress={onPress}>
                        <MaterialIcons
                            name="navigate-next"
                            size={24}
                            color={COLORS.BLACK}
                        />
                    </TouchableOpacity>
                </ViewRight>
            </ViewProfile>
        </Container>
    );
};
