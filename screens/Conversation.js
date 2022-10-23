import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Conversation({ route, navigation }) {
  const [msgSentListe, setMsgSentListe] = useState([
    {
      msg: "Salut",
    },
    {
      msg: "Sa va?",
    },
    {
      msg: "Oui quoi de neuf?",
    },
  ]);
  const [msgRecuListe, setMsgRecuListe] = useState([
    {
      msg: "Salut",
    },
    {
      msg: "Oui toi?",
    },
  ]);
  const renderUserMsg = ({ item }) => {
    return (
      <View style={styles.message}>
        <Text>{item.msg}</Text>
      </View>
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
            keyExtractor={(item) => item.msg}
          />
          <FlatList
            data={msgRecuListe}
            renderItem={renderUserMsg}
            keyExtractor={(item) => item.msg}
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
    backgroundColor: "lightgray",
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
  },
});
