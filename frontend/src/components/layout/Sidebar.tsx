"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; 
import {
  LayoutDashboard,
  Box,
  Wrench,
  ClipboardList,
  Settings,
  Menu,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  // --- ESCÁNER UNIVERSAL DE ROLES ---
  // 1. Buscamos el arreglo de roles en cualquier parte del objeto user
  let rawRoles: any[] = [];
  if (Array.isArray(user?.roles_asignados)) {
    rawRoles = user.roles_asignados;
  } else if (Array.isArray(user?.roles)) {
    rawRoles = user.roles;
  } else if (Array.isArray(user?.data?.roles)) {
    rawRoles = user.data.roles;
  }

  // 2. Traductor Spatie -> Texto plano
  const userRoles = rawRoles
    .map((rol: any) => {
      // Si el backend lo mandó como texto: "tecnico"
      if (typeof rol === 'string') return rol;
      // Si el backend lo mandó como objeto Spatie: { id: 2, name: "tecnico" }
      if (rol && typeof rol === 'object' && rol.name) return rol.name;
      return "";
    })
    .filter((rol: string) => rol.trim() !== "") // Quitamos los vacíos
    .map((rol: string) => rol.toLowerCase());   // Todo a minúsculas ("Tecnico" -> "tecnico")

  // (¡ELIMINAMOS EL PARACAÍDAS DE DESARROLLO!)

  // 3. Definición de permisos
  const menuItems = [
    { 
      icon: LayoutDashboard, 
      label: "Dashboard", 
      href: "/dashboard", 
      roles: ["admin", "supervisor", "tecnico", "reporter"] 
    },
    { 
      icon: Box, 
      label: "Activos", 
      href: "/categorias-activos", 
      roles: ["admin", "supervisor"] 
    },
    { 
      icon: Wrench, 
      label: "Mantenimiento", 
      href: "/mantenimiento", 
      roles: ["admin", "tecnico", "supervisor"] 
    },
    { 
      icon: ClipboardList, 
      label: "Reportes", 
      href: "/reportes", 
      roles: ["admin", "reporter", "supervisor"] 
    },
    { 
      icon: Settings, 
      label: "Configuración", 
      href: "/configuracion", 
      roles: ["admin"] 
    },
  ];

  // 4. Filtrado real
  const filteredItems = menuItems.filter((item) => {
    // Si el usuario tiene al menos un rol que coincida con los requeridos, se muestra
    return item.roles.some((rolPermitido) => userRoles.includes(rolPermitido));
  });

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <aside
      className={cn(
        "bg-[#001F3F] text-white flex flex-col h-screen sticky top-0 shadow-2xl z-50",
        "transition-all duration-300 ease-in-out shrink-0 rounded-r-3xl",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between p-4 mb-4">
        <div
          className={cn(
            "relative h-10 transition-all duration-300 overflow-hidden",
            isOpen ? "w-32 opacity-100" : "w-0 opacity-0"
          )}
        >
          {/* Usamos object-contain y fill para mejor adaptación */}
          <Link href="/" className="absolute inset-0">
            <Image
              src="/logo-gima.png"
              alt="GIMA Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link> 
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white">
          <Menu size={24} />
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-2">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group overflow-hidden whitespace-nowrap",
                !isOpen && "justify-center",
                isActive ? "bg-white text-[#001F3F] font-bold shadow-md" : "text-gray-300 hover:text-white hover:bg-white/10"
              )}
            >
              <div className="min-w-6">
                <Icon size={20} className={cn(isActive && "animate-pulse-once")} />
              </div>
              <span className={cn("transition-all duration-300 origin-left", isOpen ? "opacity-100 translate-x-0 w-auto" : "opacity-0 -translate-x-4 w-0 hidden")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 mt-auto overflow-hidden">
        <button onClick={handleLogout} className={cn("flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-all duration-200 text-gray-300 hover:text-white hover:bg-red-500/20 whitespace-nowrap", !isOpen && "justify-center")}>
          <div className="min-w-6"><LogOut size={20} /></div>
          <span className={cn("transition-all duration-300", isOpen ? "opacity-100" : "opacity-0 w-0 hidden")}>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}