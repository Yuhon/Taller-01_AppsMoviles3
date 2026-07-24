import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function LoginScreen({ navigation }: any) {

  const [correo, setcorreo] = useState("")
  const [contrasenia, setcontrasenia] = useState("")

  function login() {

    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigation.navigate("Top")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Alert.alert(errorCode, errorMessage)
        console.log(errorCode);

        switch (errorCode) {
          case "auth/missing-password":
            Alert.alert("Error", "Revisar el campo de la contraseña")
            break;
          case "auth/invalid-email":
            Alert.alert("Error", "Revisar el campo de correo")
            break;
          case "auth/invalid-credential":
            Alert.alert("Error", "Revisar las credenciales")
            break;
        }
      });
  }

  return (
    <View>
      <Text>Menú de inicio de sesión</Text>

      <TextInput
        placeholder='Ingresa el correo'
        onChangeText={setcorreo}
        value={correo}
      />
      <TextInput
        placeholder='Ingresa la contraseña'
        onChangeText={setcontrasenia}
        value={contrasenia}
      />
      <TouchableOpacity
        onPress={login}
      >
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Registro")}
      >
        <Text>No tienes cuenta? Registrate aquí</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})