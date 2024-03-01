import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Container, InputContainer } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps, TouchableOpacity } from "react-native";

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
}

const Input: React.FC<InputProps & TextInputProps> = ({
    rightIcon,
    leftIcon,
    iconName,
    iconSize,
    iconColor,
    secureTextEntry,
    ...rest
}) => {
    const { COLORS } = useTheme();

    const [secury, setSecury] = useState(secureTextEntry);

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

            <InputContainer
                {...rest}
                secureTextEntry={secury}
                underLineColorAndroid="transparent"
                placeholderTextColor={COLORS.GRAY3}
            />

            {rightIcon && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <Ionicons
                        name={secury ? "eye-off" : "eye"}
                        size={iconSize}
                        color={iconColor || COLORS.TEXTDARK}
                        style={{ padding: 5, marginRight: 5 }}
                    />
                </TouchableOpacity>
            )}
        </Container>
    );
};

export default Input;
