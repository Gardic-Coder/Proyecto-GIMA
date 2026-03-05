"use client"

import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/layout/DashboardHeader"
import { StatCard } from "@/components/dashboard/StatCard"
import { UpcomingTasks } from "@/components/dashboard/UpcomingTasks"
import { AssetStatus } from "@/components/dashboard/AssetStatus"
import AuthGuard from "@/components/AuthGuard"

// Importamos el servicio y las interfaces que creamos para la API
import { 
  dashboardService, 
  EstadisticasGenerales, 
  BarraActivos, 
  TareaProxima 
} from "@/services/dashboardServices"

export default function DashboardPage() {
  // 1. Definimos los estados para guardar la data de Laravel
  const [estadisticas, setEstadisticas] = useState<EstadisticasGenerales | null>(null);
  const [activos, setActivos] = useState<BarraActivos | null>(null);
  const [agenda, setAgenda] = useState<TareaProxima[]>([]);
  const [cargando, setCargando] = useState(true);

  // 2. Ejecutamos las peticiones al cargar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Hacemos las 3 peticiones en paralelo para que el dashboard cargue más rápido
        const [dataStats, dataActivos, dataAgenda] = await Promise.all([
          dashboardService.getEstadisticas(),
          dashboardService.getActivosEstado(),
          dashboardService.getAgenda()
        ]);

        // Guardamos las respuestas en sus respectivos estados
        setEstadisticas(dataStats);
        setActivos(dataActivos);
        setAgenda(dataAgenda);
      } catch (error) {
        console.error("Error cargando la información del panel GIMA:", error);
      } finally {
        // Apagamos el estado de carga sin importar si hubo error o éxito
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  return (
    <AuthGuard>
      <div className="min-h-screen">
        <DashboardHeader subtitle="Bienvenido al panel GIMA" showSearch={false} />

        <div className="p-8 space-y-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              highlighted={true} 
            />
          </div>

          {/* Estado de activos: Le pasamos los datos y el estado de carga */}
          <AssetStatus datos={activos} cargando={cargando} />

          {/* Próximos mantenimientos preventivos: Le pasamos las tareas y el estado de carga */}
          <UpcomingTasks tareas={agenda} cargando={cargando} />
          
        </div>
      </div>
    </AuthGuard>
  )
}