import React, { useState, useEffect } from 'react';
import {TextInput, Stack, Button } from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {View, StyleSheet, Text} from "react-native";
import {isAuthenticated, signUp,updateProfile,getCommonError} from '../services/userServices';

export default function Register({navigation}) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmation, setConfirmation] = useState();
  const [telephone, setTelephone] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    (async () => {
      const isUserAuthenticated = await isAuthenticated();
      if (isUserAuthenticated) {
        navigation.navigate('Login');
      }
    })();
  }, []);

  const createAccount = async () => {
    if (validateName() && validateEmail() && validatePassword()) {
      setErrorMessage('');
      var response = await signUp(email, password);

      if (response.success) {
        const displayName = `${firstName} ${lastName}`;
        await updateProfile(displayName, response.idToken);
        navigation.navigate('Login');
      } else {
        var message = getCommonError(response?.error?.message);
        setErrorMessage(message);
      }
    }
  };

  const validateName = () => {
    if (!firstName || firstName.length < 2) {
      setErrorMessage('Le prénom doit contenir au moins deux caractères.');
      return false;
    }

    if (!lastName || lastName.length < 2) {
      setErrorMessage('Le nom doit contenir au moins deux caractères.');
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!email || email.length < 1) {
      setErrorMessage('Courriel invalide');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password !== confirmation) {
      setErrorMessage('Les mots de passe ne sont pas identiques.');
      return false;
    }

    if (!password || password.length < 6) {
      setErrorMessage('Le mot de passe est trop court.');
      return false;
    }
    return true;
  };

  return (
    <Stack spacing={2} style={{margin: 14 }}>
    <View style={styles.container}>
    <View style={{ marginTop: 10 }}>
          <Text style={styles.errorRegister}>{errorMessage}</Text>
        </View>
      <TextInput
        placeholder="Prénom"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        leading={(props) => (
          <MaterialCommunityIcons name="account-plus-outline" size={24} color="blue" {...props} />
        )}
      />
       <TextInput
        placeholder="Nom"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        leading={(props) => (
          <MaterialCommunityIcons name="account-plus-outline" color="blue" {...props} />
        )}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        leading={(props) => (
          <MaterialCommunityIcons name="email-outline" color="blue" {...props} />
        )}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={(text) => setPassword(text)}
        leading={(props) => (
          <MaterialCommunityIcons name="onepassword" color="blue"{...props} />
        )}
      />
      <TextInput
        placeholder="Confirmation"
        value={confirmation}
        onChangeText={(text) => setConfirmation(text)}
        leading={(props) => (
          <MaterialCommunityIcons name="onepassword" color="blue"{...props} />
        )}
      />
      <TextInput
        placeholder="Cellulaire"
        keyboardType="numeric"
        value={telephone}
        onChangeText={(text) => setTelephone(text)}
        leading={(props) => (
          <MaterialCommunityIcons name="cellphone" color="blue"{...props} />
        )}
      />
  
      <View style={styles.btn}>
        <Button style={styles.button}  
        title="Register"
        onPress={() => createAccount()}
        />
      </View>
    </View>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: { 
    margin: 8,
  },


  button: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "blue",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    
  },

  btn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 12,
    borderRadius: 6,
  },

  errorRegister:{
    margin:10,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 20,
    
  }
});
