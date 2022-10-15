import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppNavigation from "./navigation/AppNavigation";
import Constants from "./constants";
import Header from "./components/Header";

export default function App() {
  return <AppNavigation />;
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
