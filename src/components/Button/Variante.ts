import { useTheme } from "styled-components";

const { COLORS } = useTheme();

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
            backgroundColor: COLORS.PURPLE1,
        },
        title: {
            color: COLORS.WHITE_100,
        },
        icon: {
            color: COLORS.WHITE_100,
        },
    },
    desabled: {
        button: {
            backgroundColor: COLORS.GRAY3,
        },
        title: {
            color: COLORS.WHITE_100,
        },
        icon: {
            color: COLORS.WHITE_100,
        },
    },
};

const buttonOutLine: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: COLORS.PURPLE1,
        },
        title: {
            color: COLORS.TEXTDARK,
        },
        icon: {
            color: COLORS.GRAY1,
        },
    },
    desabled: {
        button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: COLORS.GRAY3,
        },
        title: {
            color: COLORS.TEXTDARK,
        },
        icon: {
            color: COLORS.GRAY1,
        },
    },
};

const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: COLORS.BLACK,
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
            backgroundColor: COLORS.GRAY6,
        },
        title: {
            color: COLORS.WHITE,
        },
        icon: {
            color: COLORS.WHITE,
        },
    },
};

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutLine,
    black: buttonBlack,
};
