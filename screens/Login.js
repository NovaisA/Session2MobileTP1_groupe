import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function seConnecter(paramNavigation) {
    //connect and authenticate into firebase
    navigation.navigate(paramNavigation);
  }

  return (
    <View>
      <View style={styles.logoApp}>
        <Image source={require("../assets/logoApp.png")} />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => seConnecter("Liste Contact")}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Accueil")}
        >
          <Text style={styles.login}>Accueil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  logoApp: {
    margin: 20,
    width: 150,
    height: 200,
    alignSelf: "center",
  },
  login: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  input: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 18,
    padding: 10,
    margin: 10,
  },
  button: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 19,
    marginTop: 20,
    borderColor: "blue",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
