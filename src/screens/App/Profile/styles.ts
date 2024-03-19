import styled from "styled-components/native";

export const Container = styled.View`
    padding: 5px;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;
export const Content = styled.View`
    margin-top: 20px;
`;

export const Footer = styled.View`
    margin-top: 10px;
`;

export const Avatar = styled.Image`
    width: 96px;
    height: 96px;
    border-radius: 48px;
`;
export const ViewHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`;
export const HeaderName = styled.Text`
    font-size: 20px;
    margin-right: 15px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const IconButton = styled.TouchableOpacity``;

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
