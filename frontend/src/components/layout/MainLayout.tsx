"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header"; 
import  SidebarProvider  from "@/components/ui/sidebarContext";
import AuthGuard from "@/components/AuthGuard"; 
import type React from "react";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Verificamos si estamos en login para no mostrar sidebar ni header
  const isAuthRoute = pathname.startsWith('/auth');

  // Si es la ruta de login, devolvemos los hijos sin el guard ni el layout complejo
  if (isAuthRoute) {
    return <main className="min-h-screen bg-gray-50">{children}</main>;
  }

  // Si es cualquier otra ruta (Dashboard, Activos, etc), aplicamos el Guard y el Layout
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex h-screen bg-gray-50 overflow-hidden">
          <Sidebar />
          
          <div className="flex-1 flex flex-col h-full w-full overflow-hidden">
            <Header /> 
            
            <main className="flex-1 overflow-y-auto p-6 md:p-8">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  );
}
