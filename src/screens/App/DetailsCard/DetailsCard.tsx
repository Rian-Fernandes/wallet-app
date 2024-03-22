import { View, Text } from "react-native";
import React from "react";
import {
    Container,
    Title,
    CardImage,
    Name,
    Bank,
    Conta,
    Status,
    Validade,
    ViewDetails,
    ViewInfo,
    InfoTitle,
} from "./styles";
import { GoBack } from "@src/components/GoBack";
import detailsCardPng from "@src/assets/carddetails.png";
import { Button } from "@src/components/Button";

export const DetailsCard = () => {
    return (
        <>
            <GoBack />
            <Container>
                <Title>Details Card</Title>
                <CardImage source={detailsCardPng} />
                <ViewDetails>
                    <ViewInfo>
                        <InfoTitle>Nome</InfoTitle>
                        <Name>Rian Fernandes</Name>
                    </ViewInfo>
                    <ViewInfo>
                        <InfoTitle>Banco</InfoTitle>
                        <Bank>Bank</Bank>
                    </ViewInfo>
                    <ViewInfo>
                        <InfoTitle>Conta</InfoTitle>
                        <Conta>.... .... .... 2495</Conta>
                    </ViewInfo>
                    <ViewInfo>
                        <InfoTitle>Status</InfoTitle>
                        <Status>Ativo</Status>
                    </ViewInfo>
                    <ViewInfo>
                        <InfoTitle>Vencimento</InfoTitle>
                        <Validade>2025-2059</Validade>
                    </ViewInfo>
                </ViewDetails>

                {
                    <Button
                        variant="transparente"
                        title="Deletar cartão"
                        onPress={() => {}}
                        style={{
                            marginTop: 30,
                        }}
                    />
                }
            </Container>
        </>
    );
};
