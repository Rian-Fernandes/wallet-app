import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 15px;
`;

export const BalanceImage = styled.ImageBackground`
    width: 100%;
    height: 215px;

    margin-top: -20px;
`;

export const AmoutValue = styled.Text`
    font-size: 11px;
    position: absolute;
    top: 60px;
    left: 132px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const ViewContent = styled.View`
    /* padding: 30px; */
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const TitleAmount = styled.Text`
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ValorTotal = styled.Text`
    font-size: 30px;
    line-height: 42px;
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
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
