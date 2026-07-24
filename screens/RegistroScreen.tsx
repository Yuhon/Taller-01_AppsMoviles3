import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { ref, set } from 'firebase/database';
import { supabase } from '../config/supabase';

export default function RegistroScreen({ navigation }: any) {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setedad] = useState(0);
  const [nick, setnick] = useState("");
  const [urlfoto, seturlfoto] = useState("")
  const [contrasenia, setContrasenia] = useState("");

  function registro() {
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        guardarUsuario(user.uid)
        navigation.navigate("Login")
      })
      .catch((error) => {
        if (error) {
          console.error("Error al guardar usuario:", error.message);
          Alert.alert("Error", "No se ha podido guarda el usuario");
        } else {
          console.log("Usuario guardado correctamente");
        }
      });
  }

  async function guardarUsuario(uid: string) {
    const { error } = await supabase
      .from('usuario')
      .insert({
        uid: uid,
        nombre: nombre,
        edad: edad,
        nick: nick,
        foto: urlfoto,
      })
    console.log("Guardar Usuario: " + error);
  }

  return (
    <View>
      <Text>RegistroScreen</Text>

      <TextInput
        placeholder="Ingrese el nombre"
        onChangeText={setNombre}
        value={nombre}
      />

      <TextInput
        placeholder="Ingrese su correo"
        keyboardType="email-address"
        onChangeText={setCorreo}
        value={correo}
      />

      <TextInput
        placeholder="Ingrese su edad"
        keyboardType="numeric"
        onChangeText={(text) => setedad(+text)}

      />
      <TextInput
        placeholder="Ingrese su nick"
        onChangeText={setnick}
        value={nick}
      />
      <TextInput
        placeholder="Ingrese una imganen (URL)"
        onChangeText={seturlfoto}
      />

      <TextInput
        placeholder="Ingrese su contraseña"
        onChangeText={setContrasenia}
        value={contrasenia}
      />

      <TouchableOpacity
        onPress={registro}
      >
        <Text>Registrarse</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})