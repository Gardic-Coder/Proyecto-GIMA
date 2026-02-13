'use client';
import { useAuth } from '@/context/AuthContext';

interface RoleGuardProps {
    children: React.ReactNode;
    allowedRoles: string[]; // Lista de roles que pueden ver esto
}

export default function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
    const { user } = useAuth();

    // Si el usuario tiene alguno de los roles permitidos, mostramos el contenido
    const hasPermission = user?.roles.some(role => allowedRoles.includes(role));

    if (!hasPermission) return null;

    return <>{children}</>;
}