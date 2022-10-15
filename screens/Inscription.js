import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity ,Button} from "react-native";

export default function Inscription() {
    const [nomComplet, setNomComplet] = useState("");
    const [courriel, setCourriel] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [telephone, setTelephone] = useState([]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nom Complet"
                onChangeText={(text) => setNomComplet(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setCourriel(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                onChangeText={(text) => setMotDePasse(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmation"
                onChangeText={(text) => setConfirmation(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Cellulaire"
                keyboardType="numeric"
                onChangeText={(text) => setTelephone(text)}
            />

            <View style={styles.button}>
                <Button title="S'enregistrer"/>
            </View>

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

    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: " red",
        padding: 10,
        margin: 12,
        borderRadius: 6,
    },
});

