import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ref, set } from "firebase/database";
import { db } from "../config/firebase";
import { styles } from "../styles/styles";
import React from "react";


export default function RegistroScreen() {
    const [usuario, setUsuario] = useState("");
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [confirmarContrasenia, setConfirmarContrasenia] = useState("");

    const registrarUsuario = async () => {
        if (
            usuario.trim() === "" ||
            nombre.trim() === "" ||
            correo.trim() === "" ||
            contrasenia.trim() === "" ||
            confirmarContrasenia.trim() === ""
        ) {
            Alert.alert("Error", "Por favor completa todos los campos");
            return;
        }

        // Validaciones
        if (usuario.length < 3) {
            Alert.alert("Error", "El nombre de usuario debe tener al menos 3 caracteres");
            return;
        }

        if (contrasenia.length < 6) {
            Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
            return;
        }

        if (contrasenia !== confirmarContrasenia) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            return;
        }

        if (!correo.includes("@")) {
            Alert.alert("Error", "Por favor ingresa un correo válido");
            return;
        }

        try {
            await set(ref(db, `usuarios/${usuario}`), {
                usuario,
                nombre,
                correo: correo.toLowerCase(),
                fechaRegistro: new Date().toISOString(),
            });

            Alert.alert("¡Éxito!", "Usuario registrado correctamente 🎮");

            // Limpiar campos
            setUsuario("");
            setNombre("");
            setCorreo("");
            setContrasenia("");
            setConfirmarContrasenia("");
        } catch (error) {
            Alert.alert("Error", "No se pudo registrar el usuario");
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Jugador</Text>

            <TextInput
                placeholder="Usuario (único)"
                style={styles.input}
                value={usuario}
                onChangeText={setUsuario}
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Nombre completo"
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                placeholder="Correo electrónico"
                keyboardType="email-address"
                style={styles.input}
                value={correo}
                onChangeText={setCorreo}
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                style={styles.input}
                value={contrasenia}
                onChangeText={setContrasenia}
            />

            <TextInput
                placeholder="Confirmar Contraseña"
                secureTextEntry
                style={styles.input}
                value={confirmarContrasenia}
                onChangeText={setConfirmarContrasenia}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={registrarUsuario}
            >
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}