import React from "react";
import { Login } from "@src/screens/Auth/Login/Login";
import { Cadastro } from "@src/screens/Auth/Cadastro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecuperarSenha } from "@src/screens/Auth/RecuperarSenha/RecuperarSenha";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Login" component={Login} />
            <Screen name="Cadastro" component={Cadastro} />
            <Screen name="RecuperarSenha" component={RecuperarSenha} />
        </Navigator>
    );
};
