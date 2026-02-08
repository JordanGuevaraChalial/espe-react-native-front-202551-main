import { getToken, removeToken } from "./auth";

export async function apiFetch(url, options = {}) {
  const token = await getToken();
  console.log("Token encontrado para la petición:", token || "NO HAY TOKEN");

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    ...(token ? { authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    await  removeToken();

    throw new Error("Sesión expirada. Inicia sesión nuevamente.");
  }

  return res;
}
