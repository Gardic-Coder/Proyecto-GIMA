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
  Bot
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  // --- ESCANER UNIVERSAL DE ROLES ---
  let rawRoles: any[] = [];
  if (Array.isArray(user?.roles_asignados)) {
    rawRoles = user.roles_asignados;
  } else if (Array.isArray(user?.roles)) {
    rawRoles = user.roles;
  } else if (Array.isArray(user?.data?.roles)) {
    rawRoles = user.data.roles;
  }

  // Traductor Spatie -> Texto plano
  const userRoles = rawRoles
    .map((rol: any) => {
      if (typeof rol === 'string') return rol;
      if (rol && typeof rol === 'object' && rol.name) return rol.name;
      return "";
    })
    .filter((rol: string) => rol.trim() !== "") 
    .map((rol: string) => rol.toLowerCase());   

  // Definición de permisos
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
    /*{ 
      icon: ClipboardList, 
      label: "Reportes", 
      href: "/reportes", 
      roles: ["admin", "reporter", "supervisor"] 
    },*/
    { 
      icon: Settings, 
      label: "Configuración", 
      href: "/configuracion", 
      roles: ["admin"] 
    },
    {
      icon: Bot,
      label: "Asistente IA",
      href: "http://localhost:3001",
      roles: ["admin", "supervisor", "tecnico", "reporter"]
    }
  ];

  const filteredItems = menuItems.filter((item) => {
    return item.roles.some((rolPermitido) => userRoles.includes(rolPermitido));
  });

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <>
      {/* BOTON FLOTANTE PARA TLFN: */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#001F3F] text-white rounded-lg shadow-lg"
        >
          <Menu size={24} />
        </button>
      )}

      {/* SIDEBAR normal */}
      <aside
        className={cn(
          "bg-[#001F3F] text-white flex flex-col h-screen shadow-2xl z-50",
          "transition-all duration-300 ease-in-out shrink-0 rounded-r-3xl",
          "fixed md:sticky top-0 left-0", // Fijo en tlfn para que sobreponga, sticky en PC
          isOpen ? "w-64" : "w-0 md:w-20 overflow-hidden md:overflow-visible" // En tlfn se oculta (w-0), en PC se encoge (w-20)
        )}
      >
        <div className="flex items-center justify-between p-4 mb-4">
          <div
            className={cn(
              "relative h-10 transition-all duration-300 overflow-hidden shrink-0",
              isOpen ? "w-32 opacity-100" : "w-0 opacity-0"
            )}
          >
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
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white shrink-0">
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
                onClick={() => {
                  // auto-cierra el menú al elegir una opción (solo en tlfn)
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group overflow-hidden whitespace-nowrap",
                  !isOpen && "md:justify-center", 
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
          <button onClick={handleLogout} className={cn("flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-all duration-200 text-gray-300 hover:text-white hover:bg-red-500/20 whitespace-nowrap", !isOpen && "md:justify-center")}>
            <div className="min-w-6"><LogOut size={20} /></div>
            <span className={cn("transition-all duration-300", isOpen ? "opacity-100" : "opacity-0 w-0 hidden")}>Cerrar sesión</span>
          </button>
        </div>
      </aside>
    </>
  );
}