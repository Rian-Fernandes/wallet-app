import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const GoBack = () => {
    const navigation = useNavigation();
    return (
        <Container onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircleo" size={30} color="black" />
        </Container>
    );
};
