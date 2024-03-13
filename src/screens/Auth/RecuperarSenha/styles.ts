import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    margin-left: -10px;
    align-items: center;
    justify-content: space-between;
`;
export const Title = styled.Text`
    text-align: center;
    font-size: 25px;
    margin-top: 40px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: 60px;
    font-size: 20px;
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ContentBody = styled.View`
    margin-top: 40px;
`;

export const ContentFooter = styled.View`
    margin-top: 50px;
    align-items: center;
    justify-content: center;
`;

export const ButtonGoBack = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title1 = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.BLUE};
`;
