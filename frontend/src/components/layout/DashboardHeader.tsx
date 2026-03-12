"use client"

import { Bell, User, Search } from "lucide-react"
import { usePathname } from "next/navigation"
// 1. Importamos tu contexto de autenticación
import { useAuth } from "@/context/AuthContext"

interface DashboardHeaderProps {
  title?: string
  subtitle?: string
  showSearch?: boolean;
}

export function DashboardHeader({ title, subtitle = "Bienvenido al panel GIMA" , showSearch = true }: DashboardHeaderProps) {

  const pathname = usePathname()
  // 2. Extraemos el usuario de la sesión actual
  const { user } = useAuth() 
  

  const pathParts = pathname.split("/").filter((part) => part)
  const lastPart = pathParts.length > 0 ? pathParts[pathParts.length - 1] : "Dashboard"
  const autoTitle = lastPart.charAt(0).toUpperCase() + lastPart.slice(1).replace(/-/g, ' ')

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-4 md:px-8 md:py-6">
      <div className="flex items-center justify-between gap-4">
        
        {/* Contenedor de Texto: min-w-0 y flex-1 para que respete el espacio de los iconos */}
        <div className="min-w-0 flex-1">
          {/* Truncate pone "..." si el texto es muy largo en celular */}
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 truncate">{title || autoTitle}</h1>
          <p className="text-sm md:text-base text-gray-600 mt-1 truncate">{subtitle}</p>
        </div>

        {/* Header actions: shrink-0 protege a los iconos de ser aplastados */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          {/* Search */}
          {showSearch && (
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar activo..."
              className="pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none"
            />
          </div>
        )}

          {/* Notifications */}
          <button className="relative p-2 md:p-2.5 text-gray-600 hover:bg-gray-100 rounded-full transition">
            <Bell className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute top-1 right-1 md:top-1.5 md:right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile (AQUÍ ESTÁ LA CONEXIÓN CON LOS DATOS - INTACTA) */}
          <div className="flex items-center gap-3 ml-1 md:ml-2 border-l border-gray-200 pl-3 md:pl-4">
            <div className="text-right hidden md:block">
              {/* Leemos "name" y "roles_asignados" de Laravel */}
              <p className="text-sm font-bold text-gray-900">{user?.name || 'Cargando...'}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.roles_asignados?.[0] || 'Usuario'}</p>
            </div>
            <button className="p-2 md:p-2.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-full transition border border-blue-100">
              <User className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}