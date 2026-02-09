'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface AuthGuardProps {
    children: React.ReactNode;
    roleRequired?: string;
}

export default function AuthGuard({ children, roleRequired }: AuthGuardProps) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Solo actuamos cuando el contexto ha terminado de cargar la sesión del localStorage
        if (!isLoading) {
            if (!user) {
                // Si no hay usuario en el contexto, al login
                router.push("/auth/login");
            } else if (roleRequired && !user.roles?.includes(roleRequired)) {
                // Si hay usuario pero no tiene el rol necesario
                router.push("/unauthorized");
            }
        }
    }, [user, isLoading, roleRequired, router]);

    // Mientras el contexto verifica la sesión, mostramos un estado de carga
    // Esto evita que se vea contenido protegido por un milisegundo
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    // Si no hay usuario y no está cargando, no renderizamos nada (el useEffect redirigirá)
    if (!user) {
        return null;
    }

    // Si el rol es requerido y no lo cumple, tampoco renderizamos los hijos
    if (roleRequired && !user.roles?.includes(roleRequired)) {
        return null;
    }

    // Si todo está bien, mostramos el contenido protegido
    return <>{children}</>;
}