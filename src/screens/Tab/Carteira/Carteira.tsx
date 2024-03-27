import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Transfer from "@src/assets/convert.png";
import Payments from "@src/assets/export.png";
import Payout from "@src/assets/money-send.png";
import TopUp from "@src/assets/add-circle.png";
import { Header } from "@src/components/Header/Header";
import { transaction } from "@src/utils/transaction";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    Content,
    ViewContainer,
    ViewBalanceLeft,
    ViewBalanceRight,
    TitleValor,
    TitleValorConta,
    TitleCartao,
    TitleNomeCartao,
    Body,
    IconPayment,
    IconTransfer,
    IconPayOut,
    IconTopUp,
    TitleTransfer,
    TitlePayments,
    TitlePayOut,
    TitleTopUp,
    Footer,
    ContentFlat,
    ContentFlatHeader,
    Title,
    ButtonVerTodos,
    ButtonTitleVerTodos,
    IconTransaction,
    DetailsTransaction,
    NameTransaction,
    SubTitleTransaction,
    PrieceTransaction,
} from "./styles";

export const Carteira = () => {
    const navigation = useNavigation();
    const handleGoTransaction = () => {
        navigation.navigate("Transaction");
    };

    return (
        <Container>
            <Header avatarRight textLeft appName="Wallet" />
            <ViewContainer>
                <Content>
                    <ViewBalanceLeft>
                        <TitleValor>Valor Total</TitleValor>
                        <TitleValorConta>R$ 1750,00</TitleValorConta>
                    </ViewBalanceLeft>

                    <ViewBalanceRight>
                        <TitleCartao>Cartão</TitleCartao>
                        <TitleNomeCartao>Wallet</TitleNomeCartao>
                    </ViewBalanceRight>
                </Content>

                <Body>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconTransfer source={Transfer} />
                        <TitleTransfer>Transfer</TitleTransfer>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconPayment source={Payments} />
                        <TitlePayments>Payment</TitlePayments>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconPayOut source={Payout} />
                        <TitlePayOut>Payout</TitlePayOut>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AddCartao")}
                        style={{ alignItems: "center" }}
                    >
                        <IconTopUp source={TopUp} />
                        <TitleTopUp>TopUp</TitleTopUp>
                    </TouchableOpacity>
                </Body>
            </ViewContainer>
            <Footer>
                <FlatList
                    data={transaction}
                    renderItem={({ item }) => (
                        <ContentFlat>
                            <IconTransaction source={item.icon} />

                            <DetailsTransaction>
                                <NameTransaction>{item.title}</NameTransaction>
                                <SubTitleTransaction>
                                    {item.subtitle}
                                </SubTitleTransaction>
                            </DetailsTransaction>

                            <PrieceTransaction>
                                R$ {item.price}
                            </PrieceTransaction>
                        </ContentFlat>
                    )}
                    ListHeaderComponent={
                        <ContentFlatHeader>
                            <Title>Minhas transações</Title>
                            <ButtonVerTodos>
                                <ButtonTitleVerTodos
                                    onPress={handleGoTransaction}
                                >
                                    Ver Todos
                                </ButtonTitleVerTodos>
                            </ButtonVerTodos>
                        </ContentFlatHeader>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </Footer>
        </Container>
    );
};
