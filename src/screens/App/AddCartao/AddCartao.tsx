import React from "react";
import { GoBack } from "@src/components/GoBack";
import BgPng from "@src/assets/addcard.png";
import ChipPng from "@src/assets/chipcard.png";
import VisaPng from "@src/assets/visa.png";
import {
    Container,
    Title,
    Content,
    Subtitle,
    ContentChip,
    ContentVisa,
} from "./styles";
import { Pressable } from "react-native";

export const AddCartao = () => {
    const handleCartao = () => {
        console.warn("Detalhes do cartão");
    };

    return (
        <>
            <GoBack />
            <Container>
                <Title>Add Card</Title>
                <Pressable onPress={handleCartao}>
                    <Content source={BgPng}>
                        <ContentChip source={ChipPng} />
                        <ContentVisa source={VisaPng} />
                    </Content>
                </Pressable>

                <Subtitle>
                    Add a new card {"\n"}
                    on your wallet for easy life
                </Subtitle>
            </Container>
        </>
    );
};
