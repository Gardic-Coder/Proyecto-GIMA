"use client"; 

import { useContext, useState, useEffect, useRef } from 'react';
import { Search, Bell, Menu, Check, Clock, User } from 'lucide-react';
import { sidebarContext } from '../ui/sidebarContext';
import { notificacionService, Notificacion } from '@/services/notificacionService';
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { toggleSidebar } = useContext(sidebarContext);
  const { user } = useAuth();
  
  // --- ESTADOS ---
  const [notifications, setNotifications] = useState<Notificacion[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 1. Cargar solo el conteo (ligero para el servidor)
  const updateUnreadCount = async () => {
    const counts = await notificacionService.getConteo();
    setUnreadCount(counts.no_leidas);
  };

  // 2. Cargar la lista completa (solo cuando el menú está abierto)
  const loadNotificationsList = async () => {
    const list = await notificacionService.getSinLeer();
    setNotifications(list);
  };

  // Efecto inicial para el conteo y polling
  useEffect(() => {
    updateUnreadCount();
    const interval = setInterval(updateUnreadCount, 30000);
    return () => clearInterval(interval);
  }, []);

  // Efecto CRUCIAL: Cargar lista cuando se abre el dropdown
  useEffect(() => {
    if (isOpen) {
      loadNotificationsList();
    }
  }, [isOpen]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handlers con actualización de estado inmediata (Optimistic UI)
  const handleMarkAllRead = async () => {
    const success = await notificacionService.marcarTodasLeidas();
    if (success) {
      setNotifications([]);
      setUnreadCount(0);
    }
  };

  const handleMarkOneRead = async (id: string) => {
    const success = await notificacionService.marcarLeida(id);
    if (success) {
      setNotifications(prev => prev.filter(n => n.id !== id));
      setUnreadCount(prev => Math.max(0, prev - 1));
    }
  };

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 md:px-10 sticky top-0 z-40 border-b border-gray-100 transition-all">
    
      {/* Izquierda */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors text-primary">
          <Menu size={24} />
        </button>
        <h2 className="text-lg md:text-xl font-bold text-gray-800 font-title">
          Panel GIMA <span className="hidden md:inline text-gray-300 mx-2 font-light">/</span> 
          <span className="hidden md:inline text-gray-500 font-normal font-sans">Sistema</span>
        </h2>
      </div>

      {/* Derecha */}
      <div className="flex items-center gap-4 md:gap-6">
      
      {/* Buscador 
      <div className="relative hidden md:block">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input className="bg-gray-50 pl-10 pr-4 py-2 rounded-xl outline-none w-64 text-sm border border-transparent focus:border-blue-400 transition-all" placeholder="Buscar..." />
      </div>
      */}
      {/* CONTENEDOR DE NOTIFICACIONES */}
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors relative text-gray-400"
        >
           <Bell size={22} />
           {unreadCount > 0 && (
             <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white animate-pulse">
               {unreadCount}
             </span>
           )}
        </button>

        {/* DROPDOWN PANEL (Se mantiene dentro del contenedor relative para posicionarse bien) */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-bold text-gray-800 text-sm">Notificaciones</h3>
              {notifications.length > 0 && (
                <button 
                  onClick={handleMarkAllRead}
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-medium"
                >
                  <Check size={14} /> Marcar todas
                </button>
              )}
            </div>

            <div className="max-h-96 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((n) => (
                  <div key={n.id} className="p-4 border-b border-gray-50 hover:bg-blue-50/30 transition-colors group relative">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">
                        {n.tipo.replace('Notification', '')}
                      </span>
                      <button 
                        onClick={() => handleMarkOneRead(n.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:text-blue-600 transition-all bg-white rounded shadow-sm border border-gray-100"
                        title="Marcar como leída"
                      >
                        <Check size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 mt-1 leading-relaxed">{n.contenido}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-400 text-[10px]">
                      <Clock size={12} />
                      {new Date(n.created_at).toLocaleString([], { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-10 text-center flex flex-col items-center">
                  <Bell className="text-gray-100 mb-2" size={40} />
                  <p className="text-gray-400 text-sm">No hay notificaciones nuevas</p>
                </div>
              )}
            </div>
            
            <div className="p-3 text-center bg-gray-50/50 border-t border-gray-100">
              <button className="text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors">
                Ver historial completo
              </button>
            </div>
          </div>
        )}
      </div> 
      {/* FIN DEL CONTENEDOR DE NOTIFICACIONES */}

      {/* Perfil Usuario (Ahora está fuera del dropdownRef y alineado por el flex padre) */}
      <div className="flex items-center gap-3 border-l border-gray-200 pl-4 md:pl-6">
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