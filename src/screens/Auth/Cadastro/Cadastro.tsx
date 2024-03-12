import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "styled-components";
import { Button } from "@src/components/Button";
import { KeyboardAvoidingView } from "react-native";
import Input from "@src/components/Input/Input";
import { useNavigation } from "@react-navigation/native";

import {
    Container,
    ContentHeader,
    Title,
    Description,
    ContentBody,
    ContentFooter,
    ButtonFooter,
    Title1,
    Title2,
} from "./styles";

export const Cadastro = () => {
    const { COLORS } = useTheme();

    const navigation = useNavigation();
    const handleVoltarLogin = () => {
        navigation.navigate("Login");
    };
    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <Container>
                <ContentHeader>
                    <Title>
                        Sinta imediatamente a {"\n"} facilidade de transação
                        apenas reginstrando-se
                    </Title>
                    <Description>Cadastro</Description>
                </ContentHeader>

                <ContentBody>
                    <Input
                        placeholder="Digite seu nome"
                        leftIcon
                        iconSize={23}
                        iconColor={COLORS.GRAY4}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={false}
                        keyboardType="default"
                        iconName="person-outline"
                    />
                    <Input
                        placeholder="Digite seu e-mail"
                        leftIcon
                        iconSize={23}
                        iconColor={COLORS.GRAY4}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={false}
                        keyboardType="email-address"
                        iconName="mail-outline"
                    />
                    <Input
                        leftIcon
                        rightIcon
                        placeholder="Escolha uma senha"
                        iconSize={23}
                        iconColor={COLORS.GRAY4}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry
                        keyboardType="default"
                        iconName="password"
                    />

                    <Button
                        title="Cadastrar"
                        onPress={() => {}}
                        style={{
                            marginTop: 50,
                        }}
                    />
                </ContentBody>

                <ContentFooter>
                    <ButtonFooter onPress={handleVoltarLogin}>
                        <Title1>Já tem conta?</Title1>
                        <Title2>Logar</Title2>
                    </ButtonFooter>
                </ContentFooter>
            </Container>
        </KeyboardAvoidingView>
    );
};
