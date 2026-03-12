"use client"

import { User, Search } from "lucide-react"
import { usePathname } from "next/navigation"

interface DashboardHeaderProps {
  title?: string
  subtitle?: string
  showSearch?: boolean;
}

export function DashboardHeader({ title, subtitle = "Bienvenido al panel GIMA" , showSearch = true }: DashboardHeaderProps) {

  const pathname = usePathname()


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
          {/* Search 
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
        */}

        </div>
      </div>
    </div>
  )
}