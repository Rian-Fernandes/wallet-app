import { View, Text } from "react-native";
import React from "react";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
    return <AuthRoutes />;
};
