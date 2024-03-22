import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-top: 20px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLE_TEXT};
`;

export const CardImage = styled.Image`
    width: 100%;
    height: 200px;
    border-radius: 50px;
    margin-top: 30px;
`;

export const ViewDetails = styled.View`
    width: 100%;
    margin-top: 30px;
    align-items: center;
`;

export const InfoTitle = styled.Text`
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
`;

export const ViewInfo = styled.View`
    width: 80%;
    padding: 5px 0;
    flex-direction: row;
`;

export const Name = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    margin-left: 90px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const Bank = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const Conta = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    margin-left: 60px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const Status = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const Validade = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;
