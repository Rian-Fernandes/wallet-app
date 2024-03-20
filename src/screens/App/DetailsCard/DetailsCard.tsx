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
                    <Name>Rian</Name>
                    <Bank>Bank</Bank>
                    <Conta>567874</Conta>
                    <Status>Ativo</Status>
                    <Validade>08-2059</Validade>
                </ViewDetails>
                <Button
                    variant="transparente"
                    title="Deletar"
                    onPress={() => {}}
                    style={{
                        marginTop: 100,
                    }}
                />
            </Container>
        </>
    );
};
