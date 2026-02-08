// HomeScreen.jsx
import React from "react";
import { Text, Button, Image, View, ScrollView } from "react-native";
import { styles } from "./home.styles";
import { Container } from "../../components/container/container";

export const HomeScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image
          source={require("../../../assets/6982814.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Bienvenido a la Biblioteca</Text>
        <Text style={styles.subtitle}>Gestiona autores, géneros y libros</Text>

        <Text style={styles.texto}>Hola desde Home</Text>

        <View style={styles.button}>
          <Button
            title="Ir a Autores"
            color="#ba5656"
            onPress={() => navigation.navigate("Autor")}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Ir a Libros"
            color="#ba5656"
            onPress={() => navigation.navigate("Libro")}
          />
        </View>

        {/* Botones adicionales si quieres */}
        <View style={styles.button}>
          <Button
            title="Ver Géneros"
            color="#4a90e2"
            onPress={() => navigation.navigate("Genero")}
          />
        </View>
      </ScrollView>
    </Container>
  );
};