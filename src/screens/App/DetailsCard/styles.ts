import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-top: 20px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLE_TEXT};
`;

export const CardImage = styled.Image`
    width: 100%;
    height: 200px;
    border-radius: 50px;
    margin-top: 30px;
`;

export const ViewDetails = styled.View`
    width: 100%;
    background-color: tomato;
    margin-top: 30px;
    align-items: center;
`;
export const Name = styled.Text``;
export const Bank = styled.Text``;
export const Conta = styled.Text``;
export const Status = styled.Text``;
export const Validade = styled.Text``;
