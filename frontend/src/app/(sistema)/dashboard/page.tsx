"use client"

import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/layout/DashboardHeader"
import { StatCard } from "@/components/dashboard/StatCard"
import { UpcomingTasks } from "@/components/dashboard/UpcomingTasks"
import { AssetStatus } from "@/components/dashboard/AssetStatus"
import AuthGuard from "@/components/AuthGuard"
//componente Link de Next.js para poder navegar a la vista de la IA
import Link from "next/link"; // links para llevar a otros apartados

import { 
  dashboardService, 
  EstadisticasGenerales, 
  BarraActivos, 
  TareaProxima 
} from "@/services/dashboardServices"

// Iconos para el menu inferior 
import { Home, Wrench, AlertTriangle, User, ChevronRight } from "lucide-react";

export default function DashboardPage() {
  const [estadisticas, setEstadisticas] = useState<EstadisticasGenerales | null>(null);
  const [activos, setActivos] = useState<BarraActivos | null>(null);
  const [agenda, setAgenda] = useState<TareaProxima[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [dataStats, dataActivos, dataAgenda] = await Promise.all([
          dashboardService.getEstadisticas(),
          dashboardService.getActivosEstado(),
          dashboardService.getAgenda()
        ]);

        setEstadisticas(dataStats);
        setActivos(dataActivos);
        setAgenda(dataAgenda);
      } catch (error) {
        console.error("Error cargando la información del panel GIMA:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">

        <div className="p-8 space-y-8">
          
          {/* Stats Grid - Se cambió de 3 a 4 columnas (lg:grid-cols-4) para que quepa la IA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tarjeta 1: Adaptada a Mantenimientos Activos */}
            <StatCard 
              title="Mantenimientos Activos" 
              value={cargando ? "..." : estadisticas?.mantenimientos_activos?.toString() ?? "0"} 
            />

            {/* Tarjeta 2: Adaptada a Repuestos en Stock */}
            <StatCard 
              title="Repuestos en Stock" 
              value={cargando ? "..." : estadisticas?.repuestos_stock?.toString() ?? "0"} 
            />

            {/* Tarjeta 3: Respetando tus props count y total */}
            <StatCard 
              title="Técnicos disponibles" 
              count={cargando ? 0 : (estadisticas?.tecnicos.disponibles ?? 0)} 
              total={cargando ? 0 : (estadisticas?.tecnicos.total ?? 0)} 
            />

            {/* INICIO DE LA INTEGRACIÓN GIMA:
                Se agregó este Link que envuelve a una StatCard nueva.
            */}
            <Link href="/asistencia">
              <div className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
                <StatCard 
                  title="Asistente Inteligente" 
                  value="Consultar GIMA"
                  highlighted={true} 
                />
              </div>
            </Link>
            {/* FIN DE LA INTEGRACIÓN GIMA */}

          </div>

          <div className="-mx-1"> 
            <AssetStatus datos={activos} cargando={cargando} />
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-900">PRÓXIMOS MANTENIMIENTOS</h2>
            {cargando ? (
              <p className="text-sm text-gray-500">Cargando agenda...</p>
            ) : agenda?.length > 0 ? (
              <div className="space-y-2">
                {agenda.slice(0, 3).map((tarea: any, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center active:bg-gray-50 transition-colors">
                    <p className="font-bold text-gray-900 text-sm truncate">
                      {tarea.titulo || tarea.descripcion || tarea.nombre || tarea.equipo || 'Mantenimiento Programado'}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">Programado: {tarea.fecha || 'Sin fecha'}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 bg-white p-4 rounded-xl border border-gray-100">No hay mantenimientos próximos.</p>
            )}
          </div>
        </div>
        

      </div>
    </AuthGuard>
  )
}