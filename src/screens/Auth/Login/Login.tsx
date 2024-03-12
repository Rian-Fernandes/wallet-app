import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { useTheme } from "styled-components";
import Input from "@src/components/Input/Input";
import { Button } from "@src/components/Button";
import { useNavigation } from "@react-navigation/native";
import { ButtonSocialGoogle } from "@src/components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "@src/components/ButtonSocialFacebook/ButtonSocialFacebook";

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
    ButtonSignUp,
    TitleButtonSignUp,
    TitleButtonSignup2,
    ContentForgotPassword,
    ContenButtonForgotPassword,
    ContenTitleForgotPassword,
} from "./styles";

export const Login = () => {
    const { COLORS } = useTheme();

    const navigation = useNavigation();

    const handleCadastro = () => {
        navigation.navigate("Cadastro");
    };

    return (
        <KeyboardAvoidingView behavior="position" enabled>
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
                        secureTextEntry={false}
                        autoCorrect={false}
                        iconColor={COLORS.GRAY4}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        placeholder="Digite seu e-mail"
                    />
                    <Input
                        leftIcon
                        rightIcon
                        iconSize={25}
                        iconName="password"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                        placeholder="Digite sua senha"
                        secureTextEntry
                    />

                    <ContentForgotPassword>
                        <ContenButtonForgotPassword onPress={() => {}}>
                            <ContenTitleForgotPassword>
                                Esqueceu sua senha?
                            </ContenTitleForgotPassword>
                        </ContenButtonForgotPassword>
                    </ContentForgotPassword>
                    <Button
                        title="Entrar"
                        variant="primary"
                        onPress={() => {}}
                        style={{ marginBottom: 20 }}
                    />
                </ContentBody>

                <ContentFooter>
                    <ButtonSignUp onPress={handleCadastro}>
                        <TitleButtonSignUp>
                            Não tem cadastro ainda?{" "}
                        </TitleButtonSignUp>
                        <TitleButtonSignup2>Cadastre-se</TitleButtonSignup2>
                    </ButtonSignUp>
                </ContentFooter>
            </Container>
        </KeyboardAvoidingView>
    );
};
