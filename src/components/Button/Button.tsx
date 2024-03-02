import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { variants } from "./Variante";
import { Container, Title, Content } from "./styles";

interface IButtonProps {
    title: string; //Define que o title seja uma string. Será usado para o texto do botão.
    onPress: () => void; //OnPress é uma função que não recebe argumentos nem retorna nada. Será chamada quando o botão for pressionado.
    iconName?: keyof typeof AntDesign.glyphMap; //Definindo que o iconName seja opcional, e pode ser uma chave válida do tipo "AntDesign.glypMap". Isso permite que eu forneça um nome de ícone para ser exibido no botão.
    isLoading?: boolean; //Definindo que a propriedade isLoading é opcional, e deve ser do tipo booleano. Indica se o botão está em tempo de carregamento.
    disable?: boolean; //Define que o disable é opcional e deve ser do tipo boolean. Indica se o botão estiver desativado.
    variant?: "primary" | "outline" | "black"; //Variant deve ser uma das três strings especificadas. Ela permite alterar a variante visual do botão.
    style?: TouchableOpacityProps["style"]; //Permitindo que sejam fornecidos estilos personalizados para o TouchableOpacity, que envolve o botão.
}

export const Button: React.FC<IButtonProps> = ({
    //Exportando o bottão que por sua vez aceita as propriedades definidas pela interface IButtonProps criada acima.
    title, //Desestruturando as propriedadesS
    onPress = () => {},
    isLoading,
    iconName,
    disable,
    variant = "primary",
    style,
}) => {
    const { COLORS } = useTheme(); //Usando hook 'useTheme' para acessar o tema do app. Desestruturei o objeto retornado para obter a propriedade COLORS.
    const buttonVariant = variants[variant]; //Obtém dinamicamente o conjunto de estilos associado à variante do botão especificada. Isso permite que o Button, adapte o estilo com base na variante escolhida, nesse caso, a primary, proporciona flexibilidade e reutilização de estilos.
    const buttonStyle = disable //Este ternario determina o estilo do botão com base no estado de ativação e na variante do botão. Se o botão estiver desativado, usa o estilo da variante desativa, ou vice versa.
        ? buttonVariant.desabled
        : buttonVariant.enabled;

    return (
        <Container
            disabled={isLoading || disable} //Container que envolve o conteúdo do botão. O atributo disabled é configurado com base nas condições isLoading ou disable.
            onPress={onPress} //Configura a função OnPress forneceida como ação a ser executada quando o botão é pressionado.
            style={[buttonStyle.button, style]} //Aplicando estilos ao Container incluindo os especificos da variante, e qualquer outro personalizade como a Style.
        >
            {isLoading ? ( //Criando uma renderização condicional com base na propriedade isLoading. Se o botão estiver num estado de carregamento ('Isloadin' é true), o componente ActivityIndicator é renderizado, indicando que o botão está processando alguma ação. Caso contrário, o conteúdo do botão é renderizado.
                <ActivityIndicator color={COLORS.GRAY1} />
            ) : (
                <Content>
                    {iconName && ( //Renderizando também, condicionalmente. Se iconName estiver presente (não nulo e não indefinido), um icone do antdesign é renderizado,. Isso permite exibiir um icone no botão, dependendo da propriedade iconName.
                        <AntDesign
                            name={iconName}
                            size={25}
                            color={buttonStyle.icon.color}
                            style={{
                                margin: 15,
                            }}
                        />
                    )}
                    <Title>{title}</Title>
                </Content>
            )}
        </Container>
    );
};
