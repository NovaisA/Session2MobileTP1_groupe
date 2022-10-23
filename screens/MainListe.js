import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../database/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";

export default function MainListe() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const renderUsers = ({ item }) => {
    return (
      <View style={styles.listeContainer}>
        <View style={{ marginRight: 15 }}>
          <TouchableOpacity onPress={() => beforeConversation()}>
            <Text style={{ marginBottom: 10 }}>Email: {item._id}</Text>
            <Text>Nom: {item.nom}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => beforeDelete(item.id)}>
          <Image
            style={styles.removeIcon}
            source={require("../assets/remove.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const beforeDelete = (id) => {
    Alert.alert("Delete", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        style: "ok",
        onPress: () => {},
      },
    ]);
  };

  const beforeConversation = () => {
    Alert.alert("Will go to conversation", "Placeholder", [
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const getUsers = async () => {
    const userList = [];
    const querySnapshot = await getDocs(collection(db, "usagers"));
    querySnapshot.forEach((doc) => {
      const user = {
        id: doc.id,
        ...doc.data(),
      };
      userList.push(user);
    });
    setUsers(userList);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderUsers}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white" }}>Phone contacts</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  listeContainer: {
    marginTop: 20,
    backgroundColor: "#F2F2F2",
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 280,
  },
  removeIcon: {
    width: 30,
    height: 35,
  },
  button: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 19,
    borderColor: "blue",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
