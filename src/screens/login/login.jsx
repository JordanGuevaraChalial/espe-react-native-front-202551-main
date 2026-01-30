import { View, TextInput,Text,Button,TouchableOpacity } from "react-native";
import {Container} from "../../components/container/container"
import { styles } from "./login.style";
import { useState } from "react";
import {AuthContext} from "../../../App"
import {loginRequest} from "../../services/auth"
export const LoginScreen = ({navigation}) => {
    const {signIn} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const onLogin = async () => {
        setLoading(true);
        try {
            const token = await loginRequest(username, password);
            await signIn(token);
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <Container style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            
            <TextInput 
                style={styles.input} 
                value={username}
                placeholder="Nombre de Usuario" 
                onChangeText={setUsername}
            />
            
            <TextInput 
                style={styles.input} 
                value={password}
                placeholder="Contraseña" 
                secureTextEntry 
                onChangeText={setPassword}
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