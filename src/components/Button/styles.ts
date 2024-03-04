import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: ${RFValue(193)}px;
    height: 63px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(-5)}px;
    margin-left: ${RFValue(63)}px;
    background-color: ${({ theme }: any) => theme.COLORS.PURPLENEW};
    border-radius: ${RFValue(15)}px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }: any) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }: any) => theme.COLORS.WHITE_100};
`;
