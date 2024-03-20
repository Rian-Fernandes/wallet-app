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
import { useNavigation } from "@react-navigation/native";

export const AddCartao = () => {
    const navigation = useNavigation();

    const handleAddCartao = () => {
        navigation.navigate("DetailsCard");
    };

    return (
        <>
            <GoBack />
            <Container>
                <Title>Add Card</Title>
                <Pressable onPress={handleAddCartao}>
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
