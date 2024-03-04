import React from "react";
import { RectButtonProps } from "react-native-gesture-handler"; //Usado para as propriedades de botões retangulares
import { Fontisto } from "@expo/vector-icons"; //Importando o Fontisto da sua respectiva biblioteca.
import { Button, IconFacebook, Title } from "./styles"; //Importando os componentes estilizados do styles.ts referente a esse código.

interface Props extends RectButtonProps {
    //Criando interface e extendendo propriedades da bibliotec RectButtonProps.
    title: string; //Title será uma propriedade obrigatória, ee terá que ser uma string.
    iconName: React.ComponentProps<typeof Fontisto>["name"]; //IconName será uma propriedade obrigatória na interface Props. Sua tipagem é derivada de "React.ComponentProps<typeof Fontisto>["name"]". Ou seja, O react component pega todos os tipos de propriedades aceitas pelo componente fontisto, e então, pega especificamente o tipo da propriedade name. Portanto, o iconname deve ser um nome de icone reconhecido pela lib fontisto.
}

const ButtonSocialFacebook: React.FC<Props> = ({
    //Declarando o botão do facebook, o "React.FC" diz que ele é um componente funcional que aceita as propriedades definidas na interface props.
    title, //Desestruturando as propriedades.
    iconName,
    ...rest //Pegando o resto das propriedades da lib rectbuttonprops que estão sendo utilizadas por de trás dos panos.
}) => {
    return (
        //renderizando o botão. O rest é usado para passar todas as outras propriedades que foream recebidas pelo buttonsocialfacook para o button. Garantindo assim, que caso outras propriedades sejam adicionados futuramente na interface props, elas serão automaticamente repassadas para o componente button, sem necessidade de modificação manual.
        <Button {...rest}>
            <IconFacebook name={iconName} />
            <Title>{title}</Title>
        </Button>
    );
};

export { ButtonSocialFacebook };
