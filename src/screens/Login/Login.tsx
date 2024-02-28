import React from "react";
import { SafeAreaView } from "react-native";

import Input from "../../components/Input/Input";

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
                        <Input leftIcon />
                        <Input rightIcon />
                    </ContentBody>

                    <ContentFooter></ContentFooter>
                </Container>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export { Login };
