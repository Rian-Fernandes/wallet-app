import { View, Text, FlatList } from "react-native";
import React from "react";
import { transaction } from "@src/utils/transaction";
import { Header } from "@src/components/Header/Header";
import {
    Container,
    BalanceImage,
    AmoutValue,
    ViewContent,
    TitleAmount,
    ValorTotal,
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
import BalancePng from "@src/assets/estatistica.png";

export const Relatorio = () => {
    return (
        <>
            <Header appName="Relatório" />
            <Container>
                <BalanceImage source={BalancePng} resizeMode="contain">
                    <AmoutValue>R$2100,00</AmoutValue>
                </BalanceImage>
                <ViewContent>
                    <TitleAmount>Valor Total</TitleAmount>
                    <ValorTotal>R$12.425,00</ValorTotal>
                </ViewContent>
                <Footer>
                    <FlatList
                        data={transaction}
                        renderItem={({ item }) => (
                            <ContentFlat>
                                <IconTransaction source={item.icon} />

                                <DetailsTransaction>
                                    <NameTransaction>
                                        {item.title}
                                    </NameTransaction>
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
                                    <ButtonTitleVerTodos>
                                        Mais recentes
                                    </ButtonTitleVerTodos>
                                </ButtonVerTodos>
                            </ContentFlatHeader>
                        }
                        showsVerticalScrollIndicator={false}
                    />
                </Footer>
            </Container>
        </>
    );
};
