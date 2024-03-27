import { View, Text } from "react-native";
import React from "react";
import { Header } from "@src/components/Header/Header";
import { Container } from "./styles";

export const Transaction = () => {
    return (
        <>
            <Header appName="Transaction" />
            <Container>
                <Text>Transaction</Text>
            </Container>
        </>
    );
};
