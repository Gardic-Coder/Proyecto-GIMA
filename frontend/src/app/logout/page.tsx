'use client';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext'; // Importamos el contexto

export default function LogoutPage() {
    const { logout } = useAuth(); // Usamos la función centralizada

    useEffect(() => {
        const timer = setTimeout(() => {
            logout(); // Esto limpia localStorage, limpia el estado y redirige
        }, 1000);

        return () => clearTimeout(timer);
    }, [logout]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <h1 className="text-xl font-semibold text-gray-700">Cerrando sesión...</h1>
            <p className="text-gray-500">Limpiando credenciales del sistema GIMA</p>
        </div>
    );
}