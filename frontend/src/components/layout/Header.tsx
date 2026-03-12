"use client"; 

import { useContext } from 'react';
import { Bell, Menu, User } from 'lucide-react';
import { sidebarContext } from '../ui/sidebarContext';
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  
  const { toggleSidebar } = useContext(sidebarContext); 
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 md:px-10 sticky top-0 z-40 border-b border-gray-100 transition-all">
      
      {/* Izquierda */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar} 
          className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors text-primary"
        >
          <Menu size={24} />
        </button>

        <h2 className="text-lg md:text-xl font-bold text-gray-800 font-title truncate">
          Panel GIMA <span className="hidden md:inline text-gray-300 mx-2 font-light">/</span> 
          <span className="hidden md:inline text-gray-500 font-normal font-sans">Sistema</span>
        </h2>
      </div>

      {/* Derecha */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* Notificaciones */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative text-gray-400">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        {/* Perfil Usuario */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-gray-900">
              {user?.name || 'Cargando...'}
            </p>
            <p className="text-xs text-gray-500 capitalize">
              {user?.roles_asignados?.[0] || 'Usuario'}
            </p>
          </div>

          <button className="p-2.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-full transition border border-blue-100">
            <User className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
}