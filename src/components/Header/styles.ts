import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: 15px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin-top: ${Platform.OS == "ios" ? 0 : 27}px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    justify-content: center;
    margin-left: 20px;
    padding: 10px;
`;

export const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    margin-right: 20px;
    border-radius: 100px;
`;

export const AppName = styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Status = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
