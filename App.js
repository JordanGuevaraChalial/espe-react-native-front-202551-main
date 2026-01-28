import { StyleSheet } from 'react-native';
import { HomeScreen } from './src/screens/home/home';
import { AutorScreen } from './src/screens/autor/autor';
import { LibroScreen } from './src/screens/libro/libro';
import { AutorFormScreen } from './src/screens/autor/autor-form';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/screens/login/login';
import { RegisterScreen } from './src/screens/register/register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Login">
        <Stack.Navigator>
            <Stack.Screen name='Register' component={RegisterScreen} options={{title:"Register"}}/>
            <Stack.Screen name='Login' component={LoginScreen} options={{title:"Login"}}/>
            <Stack.Screen name='Home' component={HomeScreen} options={{title:"Inicio"}}/>
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
