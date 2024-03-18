import styled from "styled-components/native";

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
    height: 140px;
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
    margin-top: 10px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const IconPayment = styled.Image`
    width: 60px;
    height: 60px;
`;

export const IconTransfer = styled.Image`
    width: 60px;
    height: 60px;
`;

export const IconPayOut = styled.Image`
    width: 60px;
    height: 60px;
`;

export const IconTopUp = styled.Image`
    width: 60px;
    height: 60px;
`;

export const TitleTransfer = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.COLORS.PINKTEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const TitlePayments = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.COLORS.PINKTEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const TitlePayOut = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.COLORS.PINKTEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const TitleTopUp = styled.Text`
    font-size: 13px;
    color: ${({ theme }) => theme.COLORS.PINKTEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const Footer = styled.View`
    flex: 1;
    /* background-color: tomato; */
`;

export const ContentFlat = styled.View`
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentFlatHeader = styled.View`
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    margin-left: 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;
export const ButtonVerTodos = styled.TouchableOpacity``;

export const ButtonTitleVerTodos = styled.Text`
    margin-right: 10px;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.PINKTEXT};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const IconTransaction = styled.Image`
    width: 60px;
    height: 60px;
`;

export const DetailsTransaction = styled.View`
    flex: 1;
`;

export const NameTransaction = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const SubTitleTransaction = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
export const PrieceTransaction = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;
