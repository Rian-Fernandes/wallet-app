import React from "react";

import { Container, ContentHeader, Avatar, AppName, Status } from "./styles";

interface IHeader {
    appName: string;
    textLeft?: boolean;
    avatarRight?: boolean;
}

export const Header = ({ appName, textLeft, avatarRight }: IHeader) => {
    return (
        <Container>
            <ContentHeader>
                <AppName>{appName}</AppName>
                {textLeft && <Status>Ativo</Status>}
            </ContentHeader>
            {avatarRight && (
                <Avatar
                    source={{ uri: "https://github.com/Rian-Fernandes.png" }}
                />
            )}
        </Container>
    );
};
