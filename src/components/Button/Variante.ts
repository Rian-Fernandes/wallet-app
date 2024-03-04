import theme from "@src/styles/theme";

theme.COLORS; //Apenas acessando a propriedade COLORS do objeto theme.

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    };

    title: {
        color: string;
    };
    icon: {
        color: string;
    };
}

//Criando as interfaces de cima e de baixo, permite que eu tenha uma abordagem mais limpa e reutilizavel para definir
//os estilos e variações dos botoões. Facilita a manutenção.

export interface ButtonVariant {
    enabled: ButtonStyle; //Criando interface para a variação dos botões e reaproveitando as propriedades de estilo criadas na interface anterior.
    desabled: ButtonStyle;
}

//Ao definir variações mais especificas para diferentes estilos de botão, me facilita não só a manutenção, mas também a compreensão do código. Caso haja necessidade de ajustar a cor ou um estilo especifico futuramente isso pode ser feito de maneira fácil e agil.

const buttonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.BLUESTRONG,
        },
        title: {
            color: theme.COLORS.WHITE_100,
        },
        icon: {
            color: theme.COLORS.WHITE_100,
        },
    },
    desabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY3,
        },
        title: {
            color: theme.COLORS.WHITE_100,
        },
        icon: {
            color: theme.COLORS.WHITE_100,
        },
    },
};

const buttonOutLine: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: theme.COLORS.PURPLE1,
        },
        title: {
            color: theme.COLORS.TEXTDARK,
        },
        icon: {
            color: theme.COLORS.GRAY1,
        },
    },
    desabled: {
        button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: theme.COLORS.GRAY3,
        },
        title: {
            color: theme.COLORS.TEXTDARK,
        },
        icon: {
            color: theme.COLORS.GRAY1,
        },
    },
};

const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.BLACK,
        },
        title: {
            color: "#FBB605",
        },
        icon: {
            color: "#FBB605",
        },
    },
    desabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY6,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
};

const ButtonTransparent: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: "transparent",
        },
        title: {
            color: theme.COLORS.GRAY2,
        },
        icon: {
            color: theme.COLORS.GRAY2,
        },
    },
    desabled: {
        button: {
            backgroundColor: "transparent",
        },
        title: {
            color: theme.COLORS.GRAY2,
        },
        icon: {
            color: theme.COLORS.GRAY2,
        },
    },
};

//Estou exportando um objeto pois ele contém todas as variações que eu necessito, é mais prático, e limpo fazer dessa maneira além de também facilitar uma futura manutenção.
export const variants = {
    primary: buttonPrimary,
    outline: buttonOutLine,
    black: buttonBlack,
    transparente: ButtonTransparent,
};
