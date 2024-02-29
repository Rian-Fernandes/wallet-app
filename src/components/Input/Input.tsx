import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, InputContainer } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
}

const Input: React.FC<InputProps & TextInputProps> = ({
    rightIcon,
    leftIcon,
    iconName,
    iconSize,
    iconColor,
    ...rest
}) => {
    const { COLORS } = useTheme();

    return (
        <Container>
            {leftIcon && (
                <MaterialIcons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{ padding: 5 }}
                />
            )}

            <InputContainer {...rest} placeholderTextColor={COLORS.GRAY3} />
            {rightIcon && (
                <MaterialIcons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{ padding: 5, marginRight: 5 }}
                />
            )}
        </Container>
    );
};

export default Input;
