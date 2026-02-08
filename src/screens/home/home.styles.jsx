// home.styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9", // fondo suave (opcional)
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 12,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
    width: "80%",
  },
  texto: {
    color: "#ba5656",
    fontSize: 20,
    marginVertical: 15,
  },
});