import { api } from '@/lib/api';

// --- INTERFACES ---
export interface ReporteMantenimientos {
  id: number;
  titulo: string;
  fecha_inicio: string;
  fecha_fin: string;
  tecnico_nombre: string;
  tecnico_id: number;
}

// --- SERVICIO CON MANEJO DE ERRORES PARA EVITAR NETWORK ERROR ---
export const reportesService = {
  getMantenimientos: async (): Promise<ReporteMantenimientos[]> => {
    try {
      const response = await api.get('mantenimiento/reportes');
      return response.data;
    } catch (error) {
      console.error("Error en reporte de mantenimientos (Probable saturación):", error);
      return [];
    }
  },
};