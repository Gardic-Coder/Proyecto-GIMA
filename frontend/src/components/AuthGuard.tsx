'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface AuthGuardProps {
    children: React.ReactNode;
    // MEJORA: Ahora acepta un texto ("admin") o un arreglo (["admin", "supervisor"])
    roleRequired?: string | string[];
}

export default function AuthGuard({ children, roleRequired }: AuthGuardProps) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    // 1. ESCÁNER UNIVERSAL DE ROLES
    let rawRoles: any[] = [];
    if (Array.isArray(user?.roles_asignados)) rawRoles = user.roles_asignados;
    else if (Array.isArray(user?.roles)) rawRoles = user.roles;
    else if (Array.isArray(user?.data?.roles)) rawRoles = user.data.roles;

    const userRoles = rawRoles
        .map((rol: any) => {
            if (typeof rol === 'string') return rol;
            if (rol && typeof rol === 'object' && rol.name) return rol.name;
            return "";
        })
        .filter((rol: string) => rol.trim() !== "")
        .map((rol: string) => rol.toLowerCase());

    // 2. LÓGICA DE AUTORIZACIÓN FLEXIBLE
    const checkPermission = () => {
        if (!roleRequired) return true; // Si no pide rol, pasa directo
        
        // Convertimos a arreglo por si mandaron un string simple
        const requiredRoles = Array.isArray(roleRequired) ? roleRequired : [roleRequired];
        const normalizedRequired = requiredRoles.map(r => r.toLowerCase());
        
        // Verificamos si el usuario tiene al menos uno de los roles requeridos
        return normalizedRequired.some(r => userRoles.includes(r));
    };

    const hasPermission = checkPermission();

    useEffect(() => {
        if (!isLoading) {
            if (!user) {
                router.push("/auth/login");
            } else if (roleRequired && !hasPermission) {
                router.push("/unauthorized"); // Redirige si no tiene permiso
            }
        }
    }, [user, isLoading, roleRequired, hasPermission, router]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!user || (roleRequired && !hasPermission)) {
        return null;
    }

    return <>{children}</>;
}