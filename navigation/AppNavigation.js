import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../screens/Login";
import MainListe from "../screens/mainListe";

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Liste Contact" component={MainListe} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
