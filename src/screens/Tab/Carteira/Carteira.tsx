import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Transfer from "@src/assets/convert.png";
import Payments from "@src/assets/export.png";
import Payout from "@src/assets/money-send.png";
import TopUp from "@src/assets/add-circle.png";
import { Header } from "@src/components/Header/Header";
import {
    Container,
    Content,
    ViewContainer,
    ViewBalanceLeft,
    ViewBalanceRight,
    TitleValor,
    TitleValorConta,
    TitleCartao,
    TitleNomeCartao,
    Body,
    IconPayment,
    IconTransfer,
    IconPayOut,
    IconTopUp,
    TitleTransfer,
    TitlePayments,
    TitlePayOut,
    TitleTopUp,
} from "./styles";

export const Carteira = () => {
    return (
        <Container>
            <Header />
            <ViewContainer>
                <Content>
                    <ViewBalanceLeft>
                        <TitleValor>Valor Total</TitleValor>
                        <TitleValorConta>R$ 1750,00</TitleValorConta>
                    </ViewBalanceLeft>

                    <ViewBalanceRight>
                        <TitleCartao>Cartão</TitleCartao>
                        <TitleNomeCartao>Wallet</TitleNomeCartao>
                    </ViewBalanceRight>
                </Content>

                <Body>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconTransfer source={Transfer} />
                        <TitleTransfer>Transfer</TitleTransfer>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconPayment source={Payments} />
                        <TitlePayments>Payment</TitlePayments>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconPayOut source={Payout} />
                        <TitlePayOut>Payout</TitlePayOut>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconTopUp source={TopUp} />
                        <TitleTopUp>TopUp</TitleTopUp>
                    </TouchableOpacity>
                </Body>
            </ViewContainer>
        </Container>
    );
};
