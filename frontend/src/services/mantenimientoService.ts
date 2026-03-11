import { api } from "@/lib/api";

interface Mantenimiento {
    id: number;
    titulo: string;
    fecha_programada: string;
    activo_nombre: string;
    tecnico_nombre: string;
}

export interface PaginatedResponse {
    current_page: number;
    last_page: number;
    total: number;
    data: Mantenimiento[];
}

export const mantenimientoService = {
    async getMantenimientos(page: number = 1, perPage: number = 5): 
    Promise<PaginatedResponse[]> {
        const response = await api.get(`/mantenimiento/mantenimientos?page=${page}&per_page=${perPage}`);

        return response.data;
    },

};

