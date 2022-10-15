import React from "react";
import { View, StyleSheet, Button,Image } from "react-native";
import Header from "../components/Header";
import Constants from "../constants";

export default function Accueil() {

    return (<View>
        <Header/>
        <Image require={("./assets/logoApp.png")}/>
        <View style={styles.btn}>
            <Button title="Login" color={Constants.primary}  />
        </View>
        <View style={styles.btn}>
            <Button title="Register" color={Constants.primary} />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 12,
        borderRadius: 6,
        color: Constants.primary,
    },

    logoApp: {width: 20,
        height: 20,},
});

