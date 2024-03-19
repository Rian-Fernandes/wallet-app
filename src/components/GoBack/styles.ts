import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    padding: 20px;
    width: 70px;
    height: 80px;
    align-items: center;
    margin-top: ${Platform.OS == "ios" ? 0 : 35}px;
    justify-content: center;
    margin-left: 10px;
`;
