import { View, TextInput,Text,Button,TouchableOpacity } from "react-native";
import {Container} from "../../components/container/container"
import { styles } from "./login.style";
import { useState } from "react";
export const LoginScreen = (navigation) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <Container style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            
            <TextInput 
                style={styles.input} 
                placeholder="Nombre de Usuario" 
            />
            
            <TextInput 
                style={styles.input} 
                placeholder="Contraseña" 
                secureTextEntry 
            />
            
            <Text style={styles.footerText}>
                Si no tiene una cuenta, 
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.linkText}> Registrese</Text>
                </TouchableOpacity>
            </Text>
            
            <Button title="Ingresar" color="#007BFF" />
        </Container>
    )
}