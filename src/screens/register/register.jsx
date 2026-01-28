import { Text, TextInput, TouchableOpacity, View ,Button} from "react-native";
import { Container } from "../../components/container/container";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { styles } from "./register.style";

export const RegisterScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    
    const visiblePassword = () => {
        setVisible(!visible);
    };

    return (
        <Container style={styles.mainContainer}>
            <Text style={styles.title}>Registro de Usuario</Text>
            
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nombre de Usuario" />
                <TextInput style={styles.input} placeholder="Correo Electrónico" keyboardType="email-address" />
                
                <View style={styles.passwordWrapper}>
                    <TextInput 
                        style={styles.inputPassword} 
                        placeholder="Contraseña" 
                        secureTextEntry={!visible} 
                    />
                    <TouchableOpacity onPress={visiblePassword} style={styles.iconContainer}>
                        <AntDesign 
                            name={visible ? "eye" : "eye-invisible"} 
                            size={24} 
                            color="gray" 
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.footerText}>
                                ¿?Ya tiene una cuenta?, 
                                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                    <Text style={styles.linkText}> Iniciar Sesión</Text>
                                </TouchableOpacity>
                </Text>
                <Button title="Crear Cuenta" color="#00ff00ff" />
            </View>
        </Container>
    );
};