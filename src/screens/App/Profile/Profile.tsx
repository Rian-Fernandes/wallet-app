import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Configs } from "@src/components/Configs";
import { Octicons } from "@expo/vector-icons";
import {
    Container,
    Header,
    Content,
    Footer,
    Avatar,
    ViewHeader,
    HeaderName,
    IconButton,
    ViewFooter,
    ViewIconButton,
    TitleFooter,
} from "./styles";
import { GoBack } from "@src/components/GoBack";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "styled-components";

export const Profile = () => {
    const { COLORS } = useTheme();
    return (
        <>
            <GoBack />
            <Container>
                <Header>
                    <Avatar
                        source={{
                            uri: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
                        }}
                    />
                    <ViewHeader>
                        <HeaderName>Rian F.</HeaderName>
                        <IconButton>
                            <FontAwesome5
                                name="edit"
                                size={20}
                                color={COLORS.GRAY2}
                            />
                        </IconButton>
                    </ViewHeader>
                </Header>
                <Content>
                    <Configs name="Conta Conectada" onPress={() => {}} />
                    <Configs
                        name="Privacidade e Segurança"
                        onPress={() => {}}
                    />
                    <Configs name="Configuração de Login" onPress={() => {}} />
                    <Configs name="Centro de Serviço" onPress={() => {}} />
                </Content>
                <Footer>
                    <ViewFooter>
                        <TouchableOpacity>
                            <ViewIconButton>
                                <Octicons
                                    name="trash"
                                    size={36}
                                    color={COLORS.PURPLECARD}
                                />
                            </ViewIconButton>
                        </TouchableOpacity>

                        <TitleFooter>Deletar conta</TitleFooter>
                    </ViewFooter>
                </Footer>
            </Container>
        </>
    );
};
