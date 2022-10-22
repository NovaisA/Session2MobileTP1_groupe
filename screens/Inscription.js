
import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity,Text } from "react-native";


export default function Register({navigation}) {
    const [nomComplet, setNomComplet] = useState("");
    const [courriel, setCourriel] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [telephone, setTelephone] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nom Complet"
                value={nomComplet}
                onChangeText={(text) => setNomComplet(text)}
            />
            <TextInput
                style={styles.input }
                placeholder="Email"
                value={courriel}
                onChangeText={(text) => setCourriel(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={motDePasse}
                onChangeText={(text) => setMotDePasse(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmation"
                value={confirmation}
                onChangeText={(text) => setConfirmation(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Cellulaire"
                keyboardType="numeric"
                value={telephone}
                onChangeText={(text) => setTelephone(text)}
            />
           <TouchableOpacity 
           title="Register"
           style={styles.touchables}
           onPress={() => navigation.navigate('Login')}>
           <Text style={styles.register}>Register</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
    },

    touchables: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 12,
        borderRadius: 10,
        backgroundColor:"blue",
    },

    register: {
            fontSize: 20,
            textAlign: 'center',
            fontWeight: "bold",
            color: "#fff",
    }

});

