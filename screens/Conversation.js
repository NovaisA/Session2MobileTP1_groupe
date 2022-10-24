import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Conversation({ route, navigation }) {
  const [msgInput, setMsgInput] = useState("");
  const [msgSentListe, setMsgSentListe] = useState([
    {
      _id: "1",
      msgSent: "Salut",
      msgReceived: "Hello",
    },
    {
      _id: "2",
      msgSent: "Sa va?",
      msgReceived: "Oui toi",
    },
    {
      _id: "3",
      msgSent: "Oui quoi de neuf?",
      msgReceived: "Rien toi?",
    },
  ]);

  const renderUserMsg = ({ item }) => {
    return (
      <>
        <Text style={{ marginLeft: 20 }}>Vous</Text>
        <View style={styles.message}>
          <Text style={styles.textMsg}>{item.msgSent}</Text>
        </View>
        <Text style={{ marginLeft: 300 }}>{route.params.nom}</Text>
        <View style={styles.message2}>
          <Text style={styles.textMsg}>{item.msgReceived}</Text>
        </View>
      </>
    );
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <Text style={styles.title}>
        Conversation avec {route.params.nom} ({route.params.email})
      </Text>
      <View style={styles.container}>
        <View style={styles.convoContainer}>
          <FlatList
            data={msgSentListe}
            renderItem={renderUserMsg}
            keyExtractor={(item) => item._id}
          />
          <TextInput style={styles.input} placeholder="Entrez votre message" />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Liste Contact")}
        >
          <Text style={{ color: "white" }}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
  container: {
    minHeight: "100%",
  },
  convoContainer: {
    minHeight: 680,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "blue",
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  input: {
    minHeight: 50,
    borderTopWidth: 1,
    borderColor: "blue",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "lightyellow",
  },
  button: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 19,
    borderColor: "blue",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 130,
    marginTop: 20,
  },
  message: {
    borderWidth: 1,
    borderRadius: 25,
    maxWidth: 200,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "lightyellow",
  },
  message2: {
    borderWidth: 1,
    borderRadius: 25,
    maxWidth: 200,
    marginLeft: 150,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "lightblue",
  },
  textMsg: {
    textAlign: "center",
  },
});
