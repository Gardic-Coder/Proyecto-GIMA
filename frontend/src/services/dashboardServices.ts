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

// --- SERVICIO ---
export const dashboardService = {
  getEstadisticas: async (): Promise<EstadisticasGenerales> => {
    const response = await api.get('/dashboard/main/estadisticas');
    return response.data;
  },
  getActivosEstado: async (): Promise<BarraActivos> => {
    const response = await api.get('/dashboard/main/activos-estado');
    return response.data;
  },
  getAgenda: async (): Promise<TareaProxima[]> => {
    const response = await api.get('/dashboard/main/agenda');
    return response.data;
  }
};