import { Alert, StyleSheet } from 'react-native';
import { HomeScreen } from '../screens/home/home';
import { AutorScreen } from '../screens/autor/autor';
import { LibroScreen } from '../screens/libro/libro';
import { AutorFormScreen } from '../screens/autor/autor-form';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from "../context/AuthContext"
import { useContext } from 'react';
const Stack = createStackNavigator();

export const AppStack=()=> {
  const {signOut}=useContext(AuthContext);
  return (
    <NavigationContainer >
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}
            options={{title:"Inicio", headerRight:()=>(<Button title="Cerrar Sesión" 
            onPress={()=>Alert.alert("Alerta", "¿Estás seguro de que quieres cerrar sesión?", 
            [
              {text:"Cancelar"}, 
              {text:"Cerrar", onPress:signOut}
            ] 
              )}/>
            )}}/>
            <Stack.Screen name='Autor' component={AutorScreen} />
            <Stack.Screen name='Libro' component={LibroScreen}/>
            <Stack.Screen name='AutorForm' component={AutorFormScreen} options={{title:"Crear Autor"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
