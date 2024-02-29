import styled from "styled-components/native";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.Pressable`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
    background-color: ${({ theme }: any) => theme.COLORS.PURPLE1};
    border-radius: ${RFValue(8)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }: any) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }: any) => theme.COLORS.WHITE_100};
`;
