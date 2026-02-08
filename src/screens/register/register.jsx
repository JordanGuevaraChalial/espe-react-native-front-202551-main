import { useState, useContext } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Container } from "../../components/container/container";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./register.styles";
import { ENDPOINTS } from "../../config/api"; 

// Si tienes AuthContext y un método register, puedes usarlo después
// import { AuthContext } from "../../context/AuthContext";

export const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  // const { register } = useContext(AuthContext); // opcional si lo tienes

  const visiblePassword = () => {
    setVisible(!visible);
  };

  const onRegister = async () => {
    setErrorMessage(""); // limpia error previo

    if (!username.trim() || !password.trim()) {
      setErrorMessage("Completa todos los campos");
      return;
    }

    setLoading(true);

    try {
      console.log("Intentando registro a:", `${ENDPOINTS.AUTH}/register`);
      console.log("Datos enviados:", { username, password });

      const response = await fetch(`${ENDPOINTS.AUTH}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), 
      });

      console.log("Respuesta status:", response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            errorData.error ||
            `Error ${response.status}: No se pudo registrar`
        );
      }

      const data = await response.json();

      Alert.alert("Cuenta creada", "¡Registro exitoso! Ahora inicia sesión.", [
        {
          text: "OK",
          onPress: () => navigation.goBack(), 
        },
      ]);

    } catch (error) {
      console.error("Error completo en registro:", error);
      const msg = error.message || "No se pudo conectar con el servidor";
      setErrorMessage(msg);
      // Alert.alert("Error", msg); // opcional popup
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Crear Cuenta</Text>
          <Text style={styles.subtitle}>
            Completa los datos para registrarte
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Username Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre de usuario</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Contraseña"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!visible}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={visiblePassword}
                style={styles.eyeButton}
              >
                <AntDesign
                  name={!visible ? "eye" : "eye-invisible"}
                  size={18}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Mensaje de error visible (igual que en login) */}
          {errorMessage ? (
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginVertical: 10,
                fontSize: 14,
              }}
            >
              {errorMessage}
            </Text>
          ) : null}

          {/* Register Button */}
          <TouchableOpacity
            style={styles.registerButton}
            onPress={onRegister}
            disabled={loading}
          >
            <Text style={styles.registerButtonText}>
              {loading ? "Creando cuenta..." : "Crear Cuenta"}
            </Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>¿Ya tienes cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.loginLink}>Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};