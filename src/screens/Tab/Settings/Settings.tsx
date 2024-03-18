import { View, Text } from "react-native";
import React from "react";
import { Header } from "@src/components/Header/Header";

import { Container } from "./styles";

export const Settings = () => {
    return (
        <>
            <Header appName="Configurações" />
            <Container></Container>
        </>
    );
};
