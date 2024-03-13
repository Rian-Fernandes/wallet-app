import { useState } from "react";
import {
    Text,
    KeyboardAvoidingView,
    Modal,
    TouchableOpacity,
    View,
} from "react-native";
import Input from "@src/components/Input/Input";
import { useTheme } from "styled-components/native";
import { Button } from "@src/components/Button";
import { useNavigation } from "@react-navigation/native";

import {
    Container,
    ContentHeader,
    Title,
    Description,
    ContentBody,
    ContentFooter,
    ButtonGoBack,
    Title1,
} from "./styles";

export const RecuperarSenha = () => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleVoltarLogin = () => {
        navigation.navigate("Login");
    };

    const handleEnviar = () => {
        if (email.trim() !== "") {
            // Lógica para enviar e-mail ou qualquer ação desejada
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo{"\n"} ao seu app </Title>
                    <Description>Recuperar senha</Description>
                </ContentHeader>
                <ContentBody>
                    <Input
                        placeholder="Digite seu e-mail"
                        leftIcon
                        iconSize={23}
                        iconColor={COLORS.GRAY4}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={false}
                        keyboardType="email-address"
                        iconName="mail-outline"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </ContentBody>
                <Button
                    title="Enviar"
                    onPress={handleEnviar}
                    style={{
                        marginTop: 40,
                    }}
                />

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={handleCloseModal}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "white",
                                padding: 20,
                                borderRadius: 10,
                                elevation: 5,
                            }}
                        >
                            <Text style={{ textAlign: "center" }}>
                                Enviamos um e-mail para sua caixa de entrada
                            </Text>
                            <TouchableOpacity onPress={handleCloseModal}>
                                <Text
                                    style={{
                                        color: COLORS.BLUE,
                                        marginTop: 10,
                                        textAlign: "center",
                                    }}
                                >
                                    Fechar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <ContentFooter>
                    <ButtonGoBack onPress={handleVoltarLogin}>
                        <Title1>Voltar</Title1>
                    </ButtonGoBack>
                </ContentFooter>
            </Container>
        </KeyboardAvoidingView>
    );
};
