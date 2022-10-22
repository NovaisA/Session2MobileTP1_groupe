
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Accueil from "../screens/Accueil";
import Login from "../screens/Login";
import Register from "../screens/Register";
import MainListe from "../screens/MainListe";


const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
      <Drawer.Screen options={{
        title: 'Accueil',
        headerStyle:{
          backgroundColor:"blue"
        },
        headerTintColor:'#fff',
      }}  name="Accueil" component={Accueil} /> 
      <Drawer.Screen options={{
        title: 'Register',
        headerStyle:{
          backgroundColor:"blue"
        },
        headerTintColor:'#fff',
      }} name="Register" component={Register} 
      />
        <Drawer.Screen options={{
        title: 'Login',
        headerStyle:{
          backgroundColor:"blue"
        },
        headerTintColor:'#fff',
      }} name="Login" component={Login} />
        <Drawer.Screen options={{
        title: 'Liste Contact',
        headerStyle:{
          backgroundColor:"blue"
        },
        headerTintColor:'#fff',
      }} name="Liste Contact" component={MainListe} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
