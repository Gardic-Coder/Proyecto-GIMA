'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthGuardProps {
    children: React.ReactNode;
    roleRequired?: string;
}

export default function AuthGuard({ children, roleRequired }: AuthGuardProps) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (!token || !userData) {
            router.push("auth/login");
            return;
        }

        if (roleRequired) {
            const user = JSON.parse(userData);
            // Ajusta 'roles' según cómo venga exactamente en tu JSON de respuesta
            if (!user.roles?.includes(roleRequired)) {
                router.push("/unauthorized");
            }
        }
    }, [router, roleRequired]);

    return <>{children}</>;
}