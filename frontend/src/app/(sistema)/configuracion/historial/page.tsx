"use client";
import AuthGuard from "@/components/AuthGuard";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { historialService } from "@/services/historialService";
import Pagination from "@/components/ui/Paginacion";
import {
  Search,
  Clock,
  UserCircle,
  ShieldCheck,
  Wrench,
  LogIn,
  Trash2,
  PlusCircle,
  Eye,
  Loader2
} from "lucide-react";

interface HistoryRecord {
  id: string | number;
  userName: string;
  role: string;
  action: string;
  description: string;
  timeAgo: string;
  date: string;
  hour: string;
}

// 1. ESTILOS DINÁMICOS
function getActionStyle(action: string) {
  const accionStr = action.toLowerCase();
  if (accionStr.includes("editando") || accionStr.includes("actualizando"))
    return { icon: Wrench, color: "bg-blue-50 text-blue-700" };
  if (accionStr.includes("creando") || accionStr.includes("agregó"))
    return { icon: PlusCircle, color: "bg-green-50 text-green-700" };
  if (accionStr.includes("eliminando") || accionStr.includes("eliminó"))
    return { icon: Trash2, color: "bg-red-50 text-red-700" };
  if (accionStr.includes("leyendo") || accionStr.includes("consultando"))
    return { icon: Eye, color: "bg-slate-100 text-slate-600" };
  if (accionStr.includes("inicio de sesión") || accionStr.includes("accedió"))
    return { icon: LogIn, color: "bg-teal-50 text-teal-700" };
  return { icon: ShieldCheck, color: "bg-gray-100 text-gray-700" };
}

// 2. FORMATEO DE FECHAS
function formatLaravelDate(fechaString: string) {
  if (!fechaString) return { date: "N/A", hour: "N/A", timeAgo: "Desconocido" };
  let safeDateString = fechaString;
  if (!safeDateString.includes('T')) safeDateString = safeDateString.replace(' ', 'T');
  if (!safeDateString.endsWith('Z') && !safeDateString.includes('-') && !safeDateString.includes('+')) safeDateString += 'Z';

  const dateObj = new Date(safeDateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  let timeAgo = "";
  if (diffInSeconds < 0) timeAgo = "Justo ahora";
  else if (diffInSeconds < 60) timeAgo = `Hace ${diffInSeconds} seg`;
  else if (diffInSeconds < 3600) timeAgo = `Hace ${Math.floor(diffInSeconds / 60)} min`;
  else if (diffInSeconds < 86400) timeAgo = `Hace ${Math.floor(diffInSeconds / 3600)} h`;
  else timeAgo = `Hace ${Math.floor(diffInSeconds / 86400)} días`;

  return {
    date: dateObj.toLocaleDateString('es-VE'), 
    hour: dateObj.toLocaleTimeString('es-VE', { hour12: false }), 
    timeAgo
  };
}

// 3. TRADUCTOR DE RUTAS
function humanizeAction(rawAction: string) {
  let text = rawAction.toUpperCase();
  text = text.replace('EN API/CATALOGO/ARTICULOS', 'EN CATEGORÍAS DE ACTIVOS');
  text = text.replace('EN API/ADMIN/HISTORIAL-LOGS', 'EN HISTORIAL DE SISTEMA');
  text = text.replace('EN API/INVENTARIO/REPUESTOS', 'EN GESTIÓN DE REPUESTOS');
  text = text.replace('EN API/AUTENTICACION/INICIAR-SESION', 'EN SISTEMA (LOGIN)');
  text = text.replace('EN API/AUTENTICACION/CERRAR-SESION', 'EN SISTEMA (LOGOUT)');
  text = text.replace(/\/(\d+)$/, ' (ID: $1)');
  return text;
}

// 4. TRADUCTOR DE DESCRIPCIÓN
function humanizeDescription(rawDescription: string, rawAction: string) {
  const isLogin = rawAction.includes('INICIAR-SESION');
  const isLogout = rawAction.includes('CERRAR-SESION');
  if (isLogin) return "Accedió al sistema exitosamente.";
  if (isLogout) return "Cerró su sesión de forma segura.";

  const separator = " con los datos: ";
  let paramsText = "";
  if (rawDescription.includes(separator)) {
    const jsonPart = rawDescription.split(separator)[1];
    try {
      const parsed = JSON.parse(jsonPart);
      if (Object.keys(parsed).length > 0) {
        const details = [];
        if (parsed.search) details.push(`Buscó: "${parsed.search}"`);
        if (parsed.descripcion) details.push(`Nombre: ${parsed.descripcion}`);
        if (parsed.codigo) details.push(`Código: ${parsed.codigo}`);
        if (parsed.stock !== undefined) details.push(`Stock: ${parsed.stock}`);
        paramsText = details.length > 0 ? `Detalles: ${details.join(', ')}.` : "";
      }
    } catch (e) {}
  }

  const actionLower = rawAction.toLowerCase();
  if (actionLower.includes('eliminando')) return "Eliminó el registro permanentemente.";
  if (actionLower.includes('leyendo')) return paramsText ? `Consultó. ${paramsText}` : "Consultó el listado.";
  if (actionLower.includes('creando')) return paramsText ? `Creó registro. ${paramsText}` : "Agregó un nuevo registro.";
  if (actionLower.includes('editando') || actionLower.includes('actualizando')) 
    return paramsText ? `Actualizó registro. ${paramsText}` : "Modificó un registro.";
  return "Interacción registrada en el sistema.";
}

export default function HistorialPage() {
  const { user } = useAuth();
  const [busqueda, setBusqueda] = useState("");
  const [historial, setHistorial] = useState<HistoryRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [porPagina, setPorPagina] = useState(20);

  useEffect(() => {
    const fetchHistorial = async () => {
      if (!user?.token) return;
      setIsLoading(true);
      try {
        const response = await historialService.getAll(user.token, currentPage, porPagina);
        
        // Laravel Resource devuelve los datos en 'data'
        const logsArray = response.data || []; 
        setTotalPages(response.meta?.last_page || response.last_page || 1);
        
        const formattedData: HistoryRecord[] = logsArray.map((item: any) => {
          const timeData = formatLaravelDate(item.fecha || item.created_at); 
          const userData = item.user || item.usuario;

          // --- EXTRACCIÓN DEL ROL (Maneja el array de strings de Spatie/UserResource) ---
          let extractedRole = "USUARIO"; 
          
          if (userData?.roles && Array.isArray(userData.roles) && userData.roles.length > 0) {
            // Tomamos el primer rol del array
            extractedRole = userData.roles[0];
          } else if (userData?.rol || userData?.role) {
            // Fallback por si viene como string simple
            extractedRole = userData.rol || userData.role;
          }

          return {
            id: item.id,
            userName: userData?.name || "Usuario del sistema",
            role: String(extractedRole).toUpperCase(), 
            action: humanizeAction(item.accion || "Acción registrada"), 
            description: humanizeDescription(item.descripcion || item.descripcion || "", item.accion || ""),
            timeAgo: timeData.timeAgo,
            date: timeData.date,
            hour: timeData.hour,
          };
        });

        setHistorial(formattedData);
      } catch (error) {
        console.error("Error al cargar el historial:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistorial();
  }, [user?.token, currentPage, porPagina]);

  const registrosFiltrados = historial.filter(
    (item) =>
      item.userName.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.action.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.description.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <AuthGuard roleRequired={["admin", "supervisor"]}>
      <div className="bg-gray-50 min-h-screen">
        <div className="p-6">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-900 uppercase font-microgramma">Historial de usuarios</h1>
            <p className="text-gray-600 font-archivo italic text-sm">Auditoría y trazabilidad del sistema GIMA</p>
          </div>

          <div className="mb-6 relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar por usuario o acción..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="bg-gray-100 rounded-3xl p-6 space-y-4 shadow-inner">
            {isLoading ? (
               <div className="py-20 text-center text-slate-500 font-medium flex justify-center items-center gap-2">
                 <Loader2 className="animate-spin text-blue-600" size={24} />
                 Sincronizando registros con el servidor...
               </div>
            ) : registrosFiltrados.length > 0 ? (
              <div className="space-y-4">
                {registrosFiltrados.map((record, index) => {
                  const actionStyle = getActionStyle(record.action);
                  const ActionIcon = actionStyle.icon;

                  return (
                    <div
                      key={record.id}
                      className="flex justify-between items-center bg-white border border-gray-100 rounded-2xl px-6 py-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${Math.min(index * 50, 800)}ms` }}
                    >
                      {/* Usuario e Identificación */}
                      <div className="flex items-center gap-3 w-1/4">
                        <div className="bg-slate-50 p-2 rounded-full">
                          <UserCircle className="text-slate-400" size={30} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{record.userName.toUpperCase()}</p>
                          <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{record.role}</p>
                        </div>
                      </div>

                      {/* Acción Etiquetada */}
                      <div className="w-1/4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${actionStyle.color}`}>
                          <ActionIcon size={12} strokeWidth={3} />
                          {record.action.replace(/[\[\]]/g, '')}
                        </span>
                      </div>

                      {/* Tiempo relativo */}
                      <div className="w-1/6 text-xs text-gray-400 flex items-center gap-1.5 font-medium">
                        <Clock size={14} className="text-slate-300" />
                        {record.timeAgo}
                      </div>

                      {/* Descripción breve */}
                      <div className="w-1/3 text-[11px] text-gray-500 italic truncate font-archivo pr-4" title={record.description}>
                        {record.description}
                      </div>

                      {/* Fecha y Hora exactas */}
                      <div className="text-right text-[10px] text-gray-400 font-mono leading-tight">
                        <div className="font-bold text-slate-500">{record.date}</div>
                        <div>{record.hour}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-12">No se encontraron registros de actividad.</p>
            )}

            {/* Paginación */}
            {!isLoading && totalPages > 1 && (
              <div className="pt-6 border-t border-gray-200 mt-6">
                <Pagination
                  paginaActual={currentPage}
                  totalPaginas={totalPages}
                  porPagina={porPagina}
                  onPageChange={setCurrentPage}
                  onPerPageChange={(nuevo) => { setPorPagina(nuevo); setCurrentPage(1); }}
                />
              </div>
            )}
          </div>
        </div>
        <style jsx>{`
          .animate-slide-up { opacity: 0; transform: translateY(8px); animation: slideUp 0.35s ease forwards; }
          @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 0.4s ease forwards; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `}</style>
      </div>
    </AuthGuard>
  );
}