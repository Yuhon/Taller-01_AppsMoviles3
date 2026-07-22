import { Alert, StyleSheet, Text, View } from 'react-native'
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


        switch(errorCode){
        case"auth/missing-passwor" : 
          Alert.alert("Error", "Razon")
        break;
        case"" : 

        break
        };
      });


  }

  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})