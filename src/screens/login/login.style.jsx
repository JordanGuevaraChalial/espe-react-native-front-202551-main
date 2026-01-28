import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Estilo para el componente Container
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  // Estilo para el título "Iniciar Sesión"
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  // Estilo para los TextInput
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  // Estilo para el texto que contiene el enlace
  footerText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  // Estilo para el TouchableOpacity (texto "Regístrese")
  linkText: {
    color: '#007BFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});