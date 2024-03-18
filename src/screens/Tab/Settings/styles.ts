import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 10px 15px;
`;

export const ViewFooter = styled.View`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const TitleFooter = styled.Text`
    font-size: 17px;
    color: ${({ theme }) => theme.COLORS.PURPLECARD};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    margin-top: 5px;
`;

export const ViewIconButton = styled.View`
    padding: 10px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY5};
    border-radius: 30px;
`;
