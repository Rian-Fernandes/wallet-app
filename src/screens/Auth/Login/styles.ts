import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

export const Container = styled.View`
    padding: ${RFValue(20)}px;
    background-color: #d9efe8;
    height: 100%;
`;

export const ContentHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(20)}px;
`;

export const ContentBody = styled.View``;

export const ViewButton = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const Title = styled.Text`
    margin-top: ${RFValue(40)}px;
    text-align: center;
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }: any) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    margin-bottom: ${RFValue(10)}px;
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }: any) => theme.FONTS.POPPINSLIGHT};
`;

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
    /* position: absolute;
    left: 0;
    right: 0;
    bottom: 5px; */
`;

export const ButtonSignUp = styled(Pressable)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TitleButtonSignUp = styled.Text`
    font-size: 14px;
    color: ${({ theme }: any) => theme.COLORS.GRAY4};
    font-family: ${({ theme }: any) => theme.FONTS.POPPINSMEDIUM};
`;

export const TitleButtonSignup2 = styled.Text`
    font-size: 17px;
    margin-left: 2px;
    font-family: ${({ theme }: any) => theme.FONTS.POPPINSBOLD};
    color: ${({ theme }: any) => theme.COLORS.BLUE};
`;

export const ContentForgotPassword = styled.View`
    padding: 20px 0;
    align-items: center;
`;

export const ContenButtonForgotPassword = styled(Pressable)`
    align-items: center;
`;

export const ContenTitleForgotPassword = styled.Text`
    font-family: ${({ theme }: any) => theme.FONTS.POPPINSLIGHT};
    color: ${({ theme }: any) => theme.COLORS.GRAY1};
`;
