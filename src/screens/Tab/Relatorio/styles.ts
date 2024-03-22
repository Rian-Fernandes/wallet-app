import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 15px;
`;

export const BalanceImage = styled.ImageBackground`
    width: 100%;
    height: 215px;
`;

export const AmoutValue = styled.Text`
    font-size: 11px;
    position: absolute;
    top: 60px;
    left: 132px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;
