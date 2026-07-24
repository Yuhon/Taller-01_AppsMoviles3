import { StyleSheet } from "react-native";

const colors = {
    background: "#0F0A1F",     
    card: "#1A1433",           
    purple: "#8B5CF6",         
    purpleLight: "#A78BFA",
    green: "#22C55E",          
    greenDark: "#16A34A",
    text: "#E0E7FF",
    textLight: "#C4D0FF",
    inputBg: "#221C45",
    border: "#6D28D9",
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
        justifyContent: "center",
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: colors.purpleLight,
        textAlign: "center",
        marginBottom: 40,
        textShadowColor: colors.purple,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },

    input: {
        backgroundColor: colors.inputBg,
        borderWidth: 2,
        borderColor: colors.border,
        borderRadius: 12,
        padding: 15,
        marginBottom: 18,
        color: colors.text,
        fontSize: 16,
    },

    button: {
        backgroundColor: colors.green,
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20,
        shadowColor: colors.green,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 8,
    },

    buttonText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
    },

    subtitle: {
        fontSize: 18,
        color: colors.textLight,
        textAlign: "center",
        marginBottom: 30,
    },

    errorText: {
        color: "#EF4444",
        textAlign: "center",
        marginBottom: 10,
    }
});