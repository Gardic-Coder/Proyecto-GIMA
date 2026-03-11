import { api } from '@/lib/api';

// --- INTERFACES ---
export interface EstadisticasGenerales {
  mantenimientos_activos: number;
  repuestos_stock: number;
  tecnicos: {
    disponibles: number;
    total: number;
  };
}

export interface BarraActivos {
  estado_activos: {
    operativo: number;
    mantenimiento: number;
    fuera_servicio: number;
  };
  alerta_sistema: string | null;
}

export interface TareaProxima {
  id: number;
  titulo: string;
  fecha: string;
  tecnico_nombre: string;
  tecnico_id: number;
}

// --- SERVICIO CON MANEJO DE ERRORES PARA EVITAR NETWORK ERROR ---
export const dashboardService = {
  getEstadisticas: async (): Promise<EstadisticasGenerales> => {
    try {
      const response = await api.get('dashboard/main/estadisticas');
      return response.data;
    } catch (error) {
      console.error("Error en estadisticas (Probable saturación):", error);
      return { 
        mantenimientos_activos: 0, 
        repuestos_stock: 0, 
        tecnicos: { disponibles: 0, total: 0 } 
      };
    }
  },

  getActivosEstado: async (): Promise<BarraActivos> => {
    try {
      const response = await api.get('dashboard/main/activos-estado');
      return response.data;
    } catch (error) {
      console.error("Error en activos (Network Error):", error);
      return { 
        estado_activos: { operativo: 0, mantenimiento: 0, fuera_servicio: 0 },
        alerta_sistema: "El sistema está tardando en responder..." 
      };
    }
  },

  getAgenda: async (): Promise<TareaProxima[]> => {
    try {
      const response = await api.get('dashboard/main/agenda');
      return response.data;
    } catch (error) {
      console.error("Error en agenda:", error);
      return [];
    }
  }
};