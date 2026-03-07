import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

// Interceptor: Se ejecuta ANTES de cada petición para inyectar el Token
api.interceptors.request.use((config) => {
  // Verificamos que estamos en el navegador para poder usar localStorage
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});