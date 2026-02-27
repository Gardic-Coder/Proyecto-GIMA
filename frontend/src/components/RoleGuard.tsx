'use client';
import { useAuth } from '@/context/AuthContext';

interface RoleGuardProps {
    children: React.ReactNode;
    allowedRoles: string[]; 
}

export default function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
    const { user } = useAuth();

    // 1. ESCÁNER UNIVERSAL DE ROLES (Idioma Laravel/Spatie)
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

    const normalizedAllowed = allowedRoles.map(r => r.toLowerCase());

    // 2. Verificación blindada
    const hasPermission = userRoles.some(role => normalizedAllowed.includes(role));

    if (!hasPermission) return null;

    return <>{children}</>;
}