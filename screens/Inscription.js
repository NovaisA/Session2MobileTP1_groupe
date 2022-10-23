import { Button } from "@react-native-material/core";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
//import {db} from "../database/firebase";


export default function Register() {
    const [nomComplet, setNomComplet] = useState("");
    const [courriel, setCourriel] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [telephone, setTelephone] = useState("");


    //ajouter l'usager sur la bd
    const addUser = async () => {
            const newUser ={
                nom: nomComplet,
                courriel,
                motDePasse,
                confirmation,
                telephone
            };
            console.log(newUser);
        try {
            const docRef = await addDoc(collection(db, "users"), newUser);
            newUser.id = docRef.id;
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      
        };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nom Complet"
                value={nomComplet}
                onChangeText={setNomComplet}
                
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={courriel}
                onChangeText={setCourriel}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={motDePasse}
                onChangeText={setMotDePasse}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmation"
                value={confirmation}
                onChangeText={setConfirmation}
            />
            <TextInput
                style={styles.input}
                placeholder="Cellulaire"
                keyboardType="numeric"
                value={telephone}
                onChangeText={setTelephone}
            />
           <TouchableOpacity style={styles.touchables} onPress={addUser}>
           <Button title="S'enregistrer" />
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
