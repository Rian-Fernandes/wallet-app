import theme from "@src/styles/theme";

theme.COLORS;

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

export interface ButtonVariant {
    enabled: ButtonStyle;
    desabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.PURPLE1,
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

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutLine,
    black: buttonBlack,
};
