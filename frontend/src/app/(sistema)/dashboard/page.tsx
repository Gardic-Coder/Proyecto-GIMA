"use client"

import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/layout/DashboardHeader"
import { StatCard } from "@/components/dashboard/StatCard"
import { UpcomingTasks } from "@/components/dashboard/UpcomingTasks"
import { AssetStatus } from "@/components/dashboard/AssetStatus"
import AuthGuard from "@/components/AuthGuard"

import { 
  dashboardService, 
  EstadisticasGenerales, 
  BarraActivos, 
  TareaProxima 
} from "@/services/dashboardServices"

// Iconos para el menu inferior 
import { Home, Wrench, AlertTriangle, User, ChevronRight } from "lucide-react";
// links para llevar a otros apartados
import Link from "next/link";

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
        {/* vista normal (monitor)                              */}
        <div className="hidden md:block">
          <DashboardHeader subtitle="Bienvenido al panel GIMA" showSearch={false} />
          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard 
                title="Mantenimientos Activos" 
                value={cargando ? "..." : estadisticas?.mantenimientos_activos?.toString() ?? "0"} 
              />
              <StatCard 
                title="Repuestos en Stock" 
                value={cargando ? "..." : estadisticas?.repuestos_stock?.toString() ?? "0"} 
              />
              <StatCard 
                title="Técnicos disponibles" 
                count={cargando ? 0 : (estadisticas?.tecnicos?.disponibles ?? 0)} 
                total={cargando ? 0 : (estadisticas?.tecnicos?.total ?? 0)} 
                highlighted={true} 
              />
            </div>
            <AssetStatus datos={activos} cargando={cargando} />
            <UpcomingTasks tareas={agenda} cargando={cargando} />
          </div>
        </div>
        {/* vista para tlfn (responsive)                                       */}
        <div className="block md:hidden p-4 space-y-6 pb-24">
          <p className="text-gray-600 text-sm mt-2">Bienvenido al panel GIMA</p>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-600 font-medium">Mantenimientos Activos</p>
              <p className="text-3xl font-bold mt-1 text-gray-900">
                {cargando ? "..." : estadisticas?.mantenimientos_activos ?? 0}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center">
                <p className="text-sm text-gray-600 font-medium leading-tight">Repuestos en Stock</p>
                <p className="text-3xl font-bold mt-2 text-gray-900">
                  {cargando ? "..." : estadisticas?.repuestos_stock ?? 0}
                </p>
              </div>
              <div className="bg-blue-600 p-4 rounded-xl shadow-sm text-white flex flex-col justify-center">
                <p className="text-sm font-medium text-blue-100 leading-tight">Técnicos</p>
                <p className="text-3xl font-bold mt-2">
                  {cargando ? "..." : `${estadisticas?.tecnicos?.disponibles ?? 0}/${estadisticas?.tecnicos?.total ?? 0}`}
                </p>
              </div>
            </div>
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