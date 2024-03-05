import { View, Text } from "react-native";
import React from "react";

import { Cadastro } from "@src/screens/Auth/Cadastro";
import { Login } from "@src/screens/Auth/Login/Login";
import { RecuperarSenha } from "@src/screens/Auth/RecuperarSenha/RecuperarSenha";

import { TabRoutes } from "./tab.routes";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
    return <AuthRoutes />;
};
