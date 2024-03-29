import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 55px;
    padding: 0 12px;
    border-radius: 15px;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
    flex-direction: row;
    background-color: ${({ theme }: any) => theme.COLORS.GRAY0};
`;

export const InputContainer = styled.TextInput`
    width: 100%;
    height: 50px;
    flex: 1;
    border: 0;
    border-radius: 8px;
    font-size: 14px;
    font-family: ${({ theme }: any) => theme.FONTS.POPPINSLIGHT};
`;
