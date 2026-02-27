"use client"; 

import { Search, Bell, Menu } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebarContext'; 

export default function Header() {
  const { toggle } = useSidebar(); 

  // Ya no necesitamos el useAuth ni la lógica de roles aquí, 
  // porque el componente interno de la página se encarga de eso.

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 md:px-10 sticky top-0 z-40 border-b border-gray-100 transition-all">
      
      {/* Izquierda: Botón Menú Móvil y Título */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggle}
          className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors text-blue-900"
        >
          <Menu size={24} />
        </button>

        <h2 className="text-lg md:text-xl font-bold text-gray-800 font-title truncate">
          Panel GIMA <span className="hidden md:inline text-gray-300 mx-2 font-light">/</span> 
          <span className="hidden md:inline text-gray-500 font-normal font-sans">Sistema</span>
        </h2>
      </div>

      {/* Derecha: Buscador Global y Notificaciones */}
      <div className="flex items-center gap-4 md:gap-6">
        
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input 
            className="bg-gray-50 pl-10 pr-4 py-2 rounded-xl outline-none w-64 text-sm border border-transparent focus:border-blue-400 transition-all" 
            placeholder="Buscar en el sistema..." 
          />
        </div>
        
        <div className="flex gap-3 md:gap-4 text-gray-400 items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
             <Bell size={22} />
             {/* Indicador de notificación activa */}
             <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          
          {/* EL BLOQUE DEL USUARIO FUE ELIMINADO DE AQUÍ */}
        </div>

      </div>
    </header>
  );
}