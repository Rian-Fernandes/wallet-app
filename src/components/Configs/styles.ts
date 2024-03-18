import styled from "styled-components/native";

export const Container = styled.View``;

export const ViewProfile = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 5px 15px;
    margin-top: 15px;
`;

export const ProfileName = styled.Text`
    justify-content: space-between;
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ViewRight = styled.View`
    flex: 1;
    margin-left: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ViewIcon = styled.View.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
})`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 30px;
`;
