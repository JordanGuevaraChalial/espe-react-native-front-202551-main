import { useEffect, useState, createContext, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./src/navigation/AuthStack";
import { AppStack } from "./src/navigation/app.Navigation";
import { getToken, saveToken, removeToken } from "./src/services/auth";

const AuthContext = createContext(null);

export default function App() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const t =  await getToken();
      setToken(t);
      setLoading(false);
    })();
  }, []);
  const auth=useMemo(() => ({
    token,
    signIn: async (nuevoToken) => {
      await saveToken(nuevoToken);
      setToken(nuevoToken);
    },
    signOut: async () => {
      await removeToken();
      setToken(null);
    },
  }), [token]);
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        {loading ? null : token ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


