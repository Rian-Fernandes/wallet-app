import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect,
} from "react";

import { useTheme } from "styled-components";
import { useField } from "@unform/core";
import { Ionicons } from "@expo/vector-icons";
import { Container, IConContainer, InputText } from "./styles";
import { Text, TextInputProps } from "react-native";

interface InputRef {
    focus: () => void;
}

interface InputProps extends TextInputProps {
    name: string;
    value?: string;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    containerStyle?: { [key: string]: string | number };
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { iconName, name, value, containerStyle, ...rest },
    ref
) => {
    const theme = useTheme();

    const [hasError, setHasError] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    return (
        <Container>
            <IConContainer
                isFilled={isFilled}
                hasError={hasError}
                isFocused={isFocused}
            >
                <Ionicons
                    name={iconName}
                    size={25}
                    color={
                        isFocused || hasError || isFilled
                            ? theme.COLORS.BLUE1
                            : theme.COLORS.GRAY1
                    }
                />
            </IConContainer>

            <InputText
                isFilled={isFilled}
                hasError={hasError}
                isFocused={isFocused}
                placeholderTextColor={theme.COLORS.GRAY1}
            />
        </Container>
    );
};

export { Input };
