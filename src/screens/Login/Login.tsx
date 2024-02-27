import React from "react";
import { SafeAreaView } from "react-native";

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from "./styles";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>
                        {" "}
                        Seja bem vindo(a) {"\n"} à sua carteira digital
                    </Title>

                    <Description>Faça login com</Description>

                    <ViewButton></ViewButton>
                </ContentHeader>

                <ContentBody></ContentBody>

                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export { Login };
