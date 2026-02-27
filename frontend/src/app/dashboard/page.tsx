"use client"

import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/layout/DashboardHeader"
import { StatCard } from "@/components/dashboard/StatCard"
import { ChartPlaceholder } from "@/components/ui/ChartPlaceholder"
import AuthGuard from "@/components/AuthGuard"

export default function DashboardPage() {
  // 1. Creamos un estado para guardar los datos que vienen de la base de datos
  const [stats, setStats] = useState({
    totalActivos: 0,
    enMantenimiento: 0,
    presupuesto: 0
  });

  // 2. Estado para saber si la información está cargando
  const [isLoading, setIsLoading] = useState(true);

  // 3. El Efecto de Conexión (Tu rol de Middleware)
  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const token = localStorage.getItem("token");
        
        // Aquí hacemos la petición a Laravel (Puerto 8000)
        // OJO: Debes confirmar con el equipo de Backend si este endpoint existe o cómo se llama
        const response = await fetch("http://localhost:8000/api/dashboard/stats", {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (response.ok) {
          const data = await response.json();
          // Actualizamos los estados con los datos reales de Postgres
          setStats({
            totalActivos: data.total_activos || 0,
            enMantenimiento: data.en_mantenimiento || 0,
            presupuesto: data.presupuesto || 0
          });
        }
      } catch (error) {
        console.error("Error conectando con la base de datos:", error);
      } finally {
        setIsLoading(false); // Terminamos de cargar, sea exitoso o no
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <AuthGuard roleRequired={["admin", "supervisor"]}>
      <div className="min-h-screen">
        {/* Aquí le quitamos el texto fijo para que muestre el usuario real */}
        <DashboardHeader />

        <div className="p-8 space-y-8">
          {/* Stats Grid: Ahora conectados a los estados dinámicos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard 
              title="Total activos" 
              value={isLoading ? "..." : stats.totalActivos} 
              trend={12} 
              trendLabel="este mes" 
            />
            <StatCard 
              title="En mantenimiento" 
              value={isLoading ? "..." : stats.enMantenimiento} 
            />
            <StatCard 
              title="Presupuesto ejecutado" 
              value={isLoading ? "..." : `${stats.presupuesto}$`} 
              highlighted={true} 
            />
          </div>

          {/* Chart */}
          <ChartPlaceholder title="Disponibilidad de activos" period="Últimos 6 meses" />
        </div>
      </div>
    </AuthGuard>
  )
}