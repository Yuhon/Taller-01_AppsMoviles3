import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Usuario } from '../types/tipos';
import { supabase } from '../config/supabase';

export default function PerfilScreen() {

  const [usuario, setusuario] = useState<Usuario[]>([])

  //Trae un usuario
  async function leerUsuario(uid: string) {
    const { data, error } = await supabase
      .from('usuario')
      .select()
      //para traer solo un usuario 
      .eq("uid", uid)

    //console.log("Data: " + error);
    console.log(data);


    setusuario(data as Usuario[])

  }

  //Carga la sesión activa
  async function cargarSesion() {
    const { data, error } = await supabase.auth.getSession()
    leerUsuario(data.session?.user.id as string)

    console.log("Sesión: " + error);

  }

  //Ejecuta la funcion al abrir la ventana 
  useEffect(() => {
    cargarSesion()
  }, [])

  return (
    <View>
      <Text>PerfilScreen</Text>
      {
        usuario.length > 0
          ? <View>
            <Text style={{ fontSize: 25 }}>nick : {usuario[0].nick}</Text>
            <Text style={{ fontSize: 25 }}>edad : {usuario[0].edad}</Text>
            <Text style={styles.foto}>foto : {usuario[0].foto}</Text>
          </View>
          : <ActivityIndicator />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  foto:{
    height: 150,
    width: 150, 
  }
})