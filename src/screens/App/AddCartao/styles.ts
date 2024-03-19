import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 30px;
    width: 100%;
    margin-top: 20px;
    color: ${({ theme }) => theme.COLORS.PURPLE_TEXT};
    text-align: center;
`;

export const Content = styled.ImageBackground.attrs({
    shadowColor: "purple",
    shadowOffset: {
        width: 40,
        height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
})`
    width: 240px;
    height: 340px;
    align-items: center;
    margin-top: 50px;
    border-radius: 50px;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.PURPLECARD};
`;

export const Subtitle = styled.Text`
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
    margin-top: 60px;
`;

export const ContentChip = styled.Image`
    width: 35px;
    height: 40px;
    position: absolute;
    top: 72px;
    left: 50px;
`;

export const ContentVisa = styled.Image`
    width: 66px;
    height: 20px;
    position: absolute;
    bottom: 40px;
    right: 27px;
`;
