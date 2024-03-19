import { TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "@src/components/Header/Header";
import { useTheme } from "styled-components";
import { Configs } from "@src/components/Configs";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, ViewFooter, TitleFooter, ViewIconButton } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Settings = () => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    const handleGoPerfilUser = () => {
        navigation.navigate("Profile");
    };

    return (
        <>
            <Header appName="Configurações" />
            <Container>
                <Configs
                    name="Perfil do Usuário"
                    iconLeft
                    typeUser
                    onPress={handleGoPerfilUser}
                />
                <Configs
                    name="Notificações"
                    iconLeft
                    typeNotification
                    onPress={() => {}}
                />
                <Configs
                    name="Minha Carteira"
                    iconLeft
                    typeWallet
                    onPress={() => {}}
                />
                <Configs
                    name="Configuração Login"
                    iconLeft
                    typeLogin
                    onPress={() => {}}
                />
                <Configs
                    name="Central de Serviços"
                    iconLeft
                    typeCall
                    onPress={() => {}}
                />
                <ViewFooter>
                    <TouchableOpacity>
                        <ViewIconButton>
                            <MaterialIcons
                                name="logout"
                                size={36}
                                color={COLORS.PURPLECARD}
                            />
                        </ViewIconButton>
                    </TouchableOpacity>

                    <TitleFooter>Log out</TitleFooter>
                </ViewFooter>
            </Container>
        </>
    );
};
