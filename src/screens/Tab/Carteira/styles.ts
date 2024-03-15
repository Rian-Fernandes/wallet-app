import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const ViewContainer = styled.View`
    padding: 0 20px;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    width: 100%;
    height: 160px;
    border-radius: 50px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.PURPLECARD};
`;

export const ViewBalanceLeft = styled.View``;

export const ViewBalanceRight = styled.View``;

export const TitleValor = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const TitleValorConta = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;
export const TitleCartao = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const TitleNomeCartao = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const Body = styled.View`
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const IconPayment = styled.Image`
    width: 70px;
    height: 70px;
`;

export const IconTransfer = styled.Image`
    width: 70px;
    height: 70px;
`;

export const IconPayOut = styled.Image`
    width: 70px;
    height: 70px;
`;

export const IconTopUp = styled.Image`
    width: 70px;
    height: 70px;
`;

export const TitleTransfer = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.COLORS.PURPLECARD};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const TitlePayments = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.COLORS.PURPLECARD};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const TitlePayOut = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.COLORS.PURPLECARD};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const TitleTopUp = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.COLORS.PURPLECARD};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;
