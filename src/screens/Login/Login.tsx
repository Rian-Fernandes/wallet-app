import React from "react";
import { SafeAreaView } from "react-native";
import { useTheme } from "styled-components";
import Input from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "@src/components/ButtonSocialFacebook/ButtonSocialFacebook";

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from "./styles";

import { GestureHandlerRootView } from "react-native-gesture-handler";

const Login: React.FC = () => {
    const { COLORS } = useTheme();

    return (
        <GestureHandlerRootView>
            <SafeAreaView>
                <Container>
                    <ContentHeader>
                        <Title>
                            {" "}
                            Seja bem vindo(a) {"\n"} à sua carteira digital
                        </Title>

                        <Description>Faça login com:</Description>

                        <ViewButton>
                            <ButtonSocialGoogle title="Google" />
                            <ButtonSocialFacebook
                                iconName="facebook"
                                title="Facebook"
                            />
                        </ViewButton>
                    </ContentHeader>

                    <ContentBody>
                        <Input
                            leftIcon
                            iconSize={25}
                            iconName="mail-outline"
                            iconColor={COLORS.TEXTDARK}
                            placeholder="Digite seu e-mail"
                        />
                        <Input
                            leftIcon
                            iconName="remove-red-eye"
                            iconSize={25}
                            placeholder="Digite sua senha"
                        />
                        <Button title="Entrar" onPress={() => {}} />
                    </ContentBody>

                    <ContentFooter></ContentFooter>
                </Container>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export { Login };
