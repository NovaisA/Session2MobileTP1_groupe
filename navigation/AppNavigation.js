import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../screens/Login";
import MainListe from "../screens/MainListe";
import Inscription from "../screens/Inscription";
import Accueil from "../screens/Accueil";
import Conversation from "../screens/Conversation";

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Accueil" component={Accueil} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Inscription" component={Inscription} />
        <Drawer.Screen name="Liste Contact" component={MainListe} />
        <Drawer.Screen name="Conversation" component={Conversation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
