import AsyncStorage from "@react-native-async-storage/async-storage";
import { EDPOINTS } from "../config/api";

export const apiRequest = async (endpoint, method, body = null) => {
  try {
    const token = await getToken();
    
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const config = {
      method: method,
      headers: headers,
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(endpoint, config);
    
    if (response.status === 401) {
       console.error("Sesión expirada");
    }
    return await response.json();
  } catch (error) {
    console.error("Error en la petición API:", error);
  }
};