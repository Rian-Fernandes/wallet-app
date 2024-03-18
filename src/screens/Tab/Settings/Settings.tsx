import { TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "@src/components/Header/Header";
import { useTheme } from "styled-components";
import { Configs } from "@src/components/Configs";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, ViewFooter, TitleFooter, ViewIconButton } from "./styles";

export const Settings = () => {
    const { COLORS } = useTheme();

    return (
        <>
            <Header appName="Configurações" />
            <Container>
                <Configs name="Perfil" iconLeft typeUser />
                <Configs name="Notificação" iconLeft typeNotification />
                <Configs name="Minha Carteira" iconLeft typeWallet />
                <Configs name="Configuração Login" iconLeft typeLogin />
                <Configs name="Central de Serviços" iconLeft typeCall />
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
