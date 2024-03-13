import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "@src/styles/theme";
import { Carteira } from "@src/screens/Tab/Carteira";
import { Notificacao } from "@src/screens/Tab/Notificacao";
import { Relatorio } from "@src/screens/Tab/Relatorio";
import { Settings } from "@src/screens/Tab/Settings";
import { Fontisto } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName="Carteira"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarInactiveBackgroundColor: theme.COLORS.GRAY4,
                tabBarActiveTintColor: theme.COLORS.GRAY1,
                tabBarStyle: {
                    paddingBottom: 7,
                    backgroundColor: theme.COLORS.GRAY6,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    color: theme.COLORS.GRAY3,
                },
            }}
        >
            <Screen
                name="Carteira"
                component={Carteira}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: 3,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Entypo
                                name="wallet"
                                size={24}
                                color={
                                    focused
                                        ? theme.COLORS.BLACK
                                        : theme.COLORS.GRAY5
                                }
                            />
                        </View>
                    ),
                }}
            />
            <Screen
                name="Relatorio"
                component={Relatorio}
                options={{
                    tabBarLabel: "Relatório",
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: 3,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MaterialIcons
                                name="insert-chart"
                                size={24}
                                color={
                                    focused
                                        ? theme.COLORS.BLACK
                                        : theme.COLORS.GRAY5
                                }
                            />
                        </View>
                    ),
                }}
            />
            <Screen
                name="Notificacao"
                component={Notificacao}
                options={{
                    tabBarLabel: "Notificação",
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: 3,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="bell"
                                size={24}
                                color={
                                    focused
                                        ? theme.COLORS.BLACK
                                        : theme.COLORS.GRAY5
                                }
                            />
                        </View>
                    ),
                }}
            />
            <Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: "Configuração",
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: 3,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Fontisto
                                name="player-settings"
                                size={24}
                                color={
                                    focused
                                        ? theme.COLORS.BLACK
                                        : theme.COLORS.GRAY5
                                }
                            />
                        </View>
                    ),
                }}
            />
        </Navigator>
    );
};
