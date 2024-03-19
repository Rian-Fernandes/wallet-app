import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";
import { GoBack } from "@src/components/GoBack";

export const Profile = () => {
    return (
        <>
            <GoBack />
            <Container>
                <Text>Profile</Text>
            </Container>
        </>
    );
};
