import { View, Text } from "react-native";
import React from "react";
import { Header } from "@src/components/Header/Header";
import { Container, BalanceImage, AmoutValue } from "./styles";
import BalancePng from "@src/assets/estatistica.png";

export const Relatorio = () => {
    return (
        <>
            <Header appName="Relatório" />
            <Container>
                <BalanceImage source={BalancePng} resizeMode="contain">
                    <AmoutValue>R$2100,00</AmoutValue>
                </BalanceImage>
            </Container>
        </>
    );
};
