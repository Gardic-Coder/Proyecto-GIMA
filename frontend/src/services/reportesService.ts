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
    async getMantenimientos(page: number = 1, perPage: number = 5) {
        // Pasamos per_page a Laravel
        const response = await api.get(`/mantenimiento/reportes?page=${page}&per_page=${perPage}`);
        return response.data;
    }
};