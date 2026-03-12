"use client"

import { useState, useEffect } from "react";
import { reportesService } from "@/services/reportesService";

// Tipos estrictos para mantener tus Badges a salvo
type Priority = 'ALTA' | 'MEDIA' | 'BAJA';
type Status = 'COMPLETADO' | 'EN PROCESO' | 'PROGRAMADO';

interface Report {
  id: string;
  asset: string;
  desc: string;
  priority: Priority;
  status: Status;
  tech: string;
}

export const ReportTable = () => {
  // 1. Estados para el fetching
  const [reportes, setReportes] = useState<Report[]>([]);
  const [cargando, setCargando] = useState(true);
  
  // 2. Estados para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 3. Efecto para buscar los datos
  useEffect(() => {
    const fetchReportes = async () => {
      setCargando(true);
      try {
        const response = await reportesService.getMantenimientos(currentPage);
        
        // Mapeo y traducción estricta de Backend a Frontend
        const reportesAdaptados: Report[] = response.data.map((item: any) => {
          
          // Aseguramos que la prioridad coincida con tus tipos
          const rawPriority = (item.prioridad || 'media').toUpperCase();
          const priorityVal: Priority = ['ALTA', 'MEDIA', 'BAJA'].includes(rawPriority) 
            ? rawPriority as Priority 
            : 'MEDIA';

          // Aseguramos que el estado coincida con tus tipos
          let rawStatus = (item.estado || '').toUpperCase();
          let statusVal: Status = 'PROGRAMADO';
          if (rawStatus === 'ASIGNADO' || rawStatus === 'EN PROCESO') statusVal = 'EN PROCESO';
          if (rawStatus === 'COMPLETADO' || rawStatus === 'COMPLETADAS') statusVal = 'COMPLETADO';

          return {
            id: item.id?.toString() || "0",
            asset: item.activo?.nombre?.toUpperCase() || 'ACTIVO DESCONOCIDO',
            desc: item.descripcion || 'Sin descripción',
            priority: priorityVal,
            status: statusVal,
            tech: item.usuario?.name?.toUpperCase() || 'SIN ASIGNAR'
          };
        });

        setReportes(reportesAdaptados);
        setTotalPages(response.last_page || 1);

      } catch (error) {
        console.error("Error cargando los reportes en la tabla:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchReportes();
  }, [currentPage]);

  return (
    <div className="bg-transparent md:bg-white md:rounded-2xl md:border md:border-gray-100 md:shadow-sm md:overflow-hidden mt-8">
      
      <div className="p-4 md:p-6 md:border-b md:border-gray-50 mb-4 md:mb-0">
        <h2 className="font-bold text-gray-800 text-base md:text-lg">Mantenimientos prioritarios pendientes de ejecución</h2>
      </div>

      <div className="w-full overflow-x-auto pb-2 md:pb-0">
        <div className="space-y-4 md:space-y-0 md:divide-y md:divide-gray-50 md:min-w-[850px]">
          
          {/* ESTADO DE CARGA Y VACÍO */}
          {cargando ? (
            <div className="p-12 text-center text-gray-400 font-medium">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-6 w-6 border-2 border-[#007EA7] border-t-transparent rounded-full animate-spin mb-3"></div>
                Cargando reportes...
              </div>
            </div>
          ) : reportes.length === 0 ? (
            <div className="p-12 text-center text-gray-400 font-medium">
              No hay mantenimientos prioritarios registrados.
            </div>
          ) : (
            /* RENDERIZADO DE LA LISTA REAL */
            reportes.map((report) => (
              <div 
                key={report.id} 
                className="grid grid-cols-2 gap-y-4 gap-x-2 p-4 bg-white rounded-xl border border-gray-100 shadow-sm md:grid-cols-5 md:gap-4 md:p-8 md:bg-transparent md:rounded-none md:border-0 md:shadow-none md:hover:bg-gray-50 md:transition-colors"
              >
                <div className="col-span-2 md:col-span-1 order-1 flex items-center">
                  <span className="text-gray-400 font-mono text-sm bg-gray-100 px-4 py-1 rounded">#{report.id}</span>
                </div>
                
                <div className="col-span-1 md:col-span-1 order-2 flex flex-col justify-center">
                  <p className="font-bold text-sm text-gray-800">{report.asset}</p>
                  <p className="text-xs text-gray-500 truncate max-w-[200px]" title={report.desc}>{report.desc}</p>
                </div>
                
                <div className="col-span-1 md:col-span-1 order-3 flex justify-end md:justify-start items-center">
                  <PriorityBadge priority={report.priority} />
                </div>

                <div className="col-span-1 md:col-span-1 order-5 md:order-4 flex justify-end md:justify-start items-center">
                  <StatusBadge status={report.status} />
                </div>
                
                <div className="col-span-1 md:col-span-1 order-4 md:order-5 flex items-center md:justify-end">
                  <span className="text-sm font-bold text-gray-700">{report.tech}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* CONTROLES DE PAGINACIÓN */}
      {!cargando && reportes.length > 0 && (
        <div className="flex justify-between items-center p-4 bg-white md:bg-gray-50/50 md:border-t border-gray-100">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-4 py-2 text-sm font-bold text-gray-500 bg-white border rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors shadow-sm"
          >
            Anterior
          </button>
          
          <span className="text-sm text-gray-500 font-medium">
            Página <span className="font-bold text-[#007EA7]">{currentPage}</span> de <span className="font-bold text-gray-800">{totalPages}</span>
          </span>
          
          <button
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-4 py-2 text-sm font-bold text-gray-500 bg-white border rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors shadow-sm"
          >
            Siguiente
          </button>
        </div>
      )}

    </div>
  );
};

// Tus Badges se mantienen intactos (¡son geniales!)
const PriorityBadge = ({ priority }: { priority: 'ALTA' | 'MEDIA' | 'BAJA' }) => {
  const colors: Record<string , string> = {
    ALTA: "bg-red-100 text-red-600",
    MEDIA: "bg-orange-100 text-orange-600",
    BAJA: "bg-blue-100 text-blue-600",
  };
 return <span className={`px-3 py-1 rounded-full text-[10px] font-bold w-fit ${colors[priority]}`}>{priority}</span>;
};

const StatusBadge = ({ status }: { status: 'COMPLETADO' | 'EN PROCESO' | 'PROGRAMADO' }) => {
  const dotColor: Record<string , string> = {
    COMPLETADO: "bg-emerald-500",
    "EN PROCESO": "bg-orange-500",
    PROGRAMADO: "bg-blue-500",
  };
  return (
    <div className="flex items-center text-[10px] font-bold text-gray-600 uppercase">
      <div className={`w-2 h-2 rounded-full mr-2 ${dotColor[status]}`} />
      {status}
    </div>
  );
};