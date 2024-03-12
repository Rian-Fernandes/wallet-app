import { Pressable } from "react-native";
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
    font-size: 24px;
    margin-top: 40px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;
export const Description = styled.Text`
    font-size: 30px;
    margin-top: 40px;
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ContentBody = styled.View`
    margin-top: 30px;
`;

export const ContentFooter = styled.View`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`;
export const ButtonFooter = styled(Pressable)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
export const Title1 = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;
export const Title2 = styled.Text`
    font-size: 14px;
    margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;
