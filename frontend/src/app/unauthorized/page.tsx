'use client';
import Link from 'next/link';
import { ShieldAlert, ArrowLeft, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function UnauthorizedPage() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
        {/* Icono de advertencia */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <ShieldAlert className="w-12 h-12 text-red-600" />
          </div>
        </div>

        {/* Mensaje principal */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Acceso no autorizado
        </h1>
        <p className="text-gray-600 mb-8">
          No tienes los permisos necesarios para ver esta sección. Si crees que esto es un error, contacta con el administrador del sistema.
        </p>

        {/* Acciones */}
        <div className="space-y-3">
          <button
            onClick={() => router.back()}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver atrás
          </button>

          <Link
            href="/dashboard"
            className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition"
          >
            Ir al Dashboard principal
          </Link>

          <button
            onClick={() => logout()}
            className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-600 text-sm font-medium pt-4 transition"
          >
            <LogOut className="w-4 h-4" />
            Cerrar sesión e intentar con otra cuenta
          </button>
        </div>
      </div>
    </div>
  );
}