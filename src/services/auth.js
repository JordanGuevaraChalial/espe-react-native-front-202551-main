import AsyncStorage from "@react-native-async-storage/async-storage";
import { EDPOINTS } from "../config/api";
const key ="auth_token";

export const getToken = async () => {
    return await AsyncStorage.getItem(key);
}
export const saveToken = async (token) => {
    await AsyncStorage.setItem(key, token);
}
export const removeToken = async () => {
    await AsyncStorage.removeItem(key);
}

const loginRequest = async ({username, password}) =>{
    try {
        const response = await fetch(`${EDPOINTS.AUTH}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username:username, password:password})

    });
    if(!response.ok){
        throw new Error("Error en la autenticacion");
    }
    const json = await response.json();
    const token = json.token;
    saveToken(token);
    return token;
    } catch (error) {
        console.error(error);
    }
    
    
} 


