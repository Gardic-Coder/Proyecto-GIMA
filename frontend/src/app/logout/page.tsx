'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        // 1. Limpiamos los datos de sesión de la memoria del navegador
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // 2. Pequeña pausa opcional para que el usuario vea el mensaje y redirigimos
        const timer = setTimeout(() => {
            router.push("/auth/login");
        }, 1000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <h1 className="text-xl font-semibold text-gray-700">Cerrando sesión...</h1>
            <p className="text-gray-500">Limpiando credenciales del sistema GIMA</p>
        </div>
    );
}