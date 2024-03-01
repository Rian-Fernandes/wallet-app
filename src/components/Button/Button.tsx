import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { variants } from "./Variante";
import { Container, Title, Content } from "./styles";

interface IButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disable?: boolean;
    variant?: "primary" | "outline" | "black";
    style?: TouchableOpacityProps["style"];
}

export const Button: React.FC<IButtonProps> = ({
    title,
    onPress = () => {},
    isLoading,
    iconName,
    disable,
    variant = "primary",
    style,
}) => {
    const { COLORS } = useTheme();
    const buttonVariant = variants[variant];
    const buttonStyle = disable
        ? buttonVariant.desabled
        : buttonVariant.enabled;

    return (
        <Container
            disabled={isLoading || disable}
            onPress={onPress}
            style={[buttonStyle.button, style]}
        >
            {isLoading ? (
                <ActivityIndicator color={COLORS.GRAY1} />
            ) : (
                <Content>
                    {iconName && (
                        <AntDesign
                            name={iconName}
                            size={25}
                            color={buttonStyle.icon.color}
                            style={{
                                margin: 15,
                            }}
                        />
                    )}
                    <Title>{title}</Title>
                </Content>
            )}
        </Container>
    );
};
