'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id?: number;
  name: string;
  email?: string;
  roles_asignados: string[];
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Recuperar sesión al cargar la página
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify(userData));
    router.push("/dashboard");
  };

  const logout = async () => {
    const token = localStorage.getItem("token");

    // 1. Intentamos invalidar el token en el backend primero
    if (token) {
        try {
            await fetch("http://localhost:8000/api/autenticacion/cerrar-sesion", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json",
                    // No necesitamos body para esta petición
                },
            });
        } catch (error) {
            console.error("Error al invalidar el token en el servidor:", error);
            // No bloqueamos el flujo. Si falla la red, igual queremos limpiar el frontend.
        }
    }

    // 2. Limpieza garantizada del frontend (pase lo que pase arriba)
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};