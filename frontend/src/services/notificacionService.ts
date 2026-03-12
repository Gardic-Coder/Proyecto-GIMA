import { api } from '@/lib/api';

// --- INTERFACES ---
export interface Notificacion {
  id: string;
  tipo: string;
  contenido: string;
  leido: boolean;
  leido_at: string | null;
  data: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface PaginatedNotificaciones {
  data: Notificacion[];
  links: any;
  meta: any;
}

export interface ConteoNotificaciones {
  no_leidas: number;
  total: number;
}

// --- SERVICIO ACTUALIZADO PARA EL NUEVO CONTROLADOR ---
export const notificacionService = {
  
  // 1. Obtener todas las notificaciones (usando el prefijo /general)
  // Este controlador usa ?filtro=todas|no_leidas|leidas
  getNotificaciones: async (page = 1, filtro = 'todas'): Promise<PaginatedNotificaciones> => {
    try {
      const response = await api.get(`/general/notificaciones?page=${page}&filtro=${filtro}`);
      return response.data; // Viene envuelto en el Resource de Laravel
    } catch (error) {
      console.error("Error al obtener notificaciones:", error);
      return { data: [], links: {}, meta: { current_page: 1, last_page: 1 } };
    }
  },

  // 2. Obtener solo las NO LEÍDAS (para el dropdown del header)
  getSinLeer: async (): Promise<Notificacion[]> => {
    try {
      // En este controlador, pedimos el index con el filtro de no_leidas
      const response = await api.get('/general/notificaciones?filtro=no_leidas');
      return response.data.data; // Accedemos a .data porque el controlador usa Resource::collection
    } catch (error) {
      console.error("Error en notificaciones sin leer:", error);
      return [];
    }
  },

  // 3. Obtener el conteo (Sustituye a la lógica anterior para la campanita)
  getConteo: async (): Promise<ConteoNotificaciones> => {
    try {
      const response = await api.get('/general/notificaciones/conteo');
      return response.data;
    } catch (error) {
      console.error("Error al obtener conteo:", error);
      return { no_leidas: 0, total: 0 };
    }
  },

  // 4. Marcar una como leída (Cambió el nombre del método en el backend)
  marcarLeida: async (id: string): Promise<boolean> => {
    try {
      await api.post(`/general/notificaciones/${id}/marcar-leida`);
      return true;
    } catch (error) {
      console.error(`Error al marcar la notificación ${id} como leída:`, error);
      return false;
    }
  },

  // 5. Marcar TODAS como leídas (Cambió la ruta en el backend)
  marcarTodasLeidas: async (): Promise<boolean> => {
    try {
      await api.post('/general/notificaciones/marcar-todas-leidas');
      return true;
    } catch (error) {
      console.error("Error al marcar todas las notificaciones como leídas:", error);
      return false;
    }
  }
};