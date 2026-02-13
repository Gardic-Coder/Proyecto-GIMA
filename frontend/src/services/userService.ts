import { getIniciales } from '@/utils/formatters';

const API_BASE_URL = "http://localhost:8000/api/admin";

export const userService = {
  /**
   * Obtiene y adapta la lista de usuarios del backend
   */
  async getAll(token: string, page = 1, perPage = 5, search = '') {
    let url = `${API_BASE_URL}/users?page=${page}&per_page=${perPage}`;
    
    if (search) {
      // encodeURIComponent evita que espacios o caracteres raros rompan la URL
      url += `&search=${encodeURIComponent(search)}`; 
    }

    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
      },
    });

    if (!response.ok) throw new Error("Error al obtener usuarios");

    const result = await response.json();

    // Devolvemos tanto los usuarios adaptados como la info de paginación
    return {
      usuarios: result.data.map((u: any) => ({
        id: u.id.toString(),
        iniciales: getIniciales(u.name),
        name: u.name,
        email: u.email,
        rol: u.roles[0] || 'Sin rol',
        department: 'N/A', 
        status: u.estado === 'activo' ? 'available' : 'unavailable',
      })),
      meta: result.meta // Pasamos el meta para usarlo en el paginador del frontend
    };
  },

  async create(token: string, userData: any) {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: userData.nombre,
        email: userData.email,
        password: "12345678", // Temporal según tu requerimiento
        password_confirmation: "12345678",
        estado: userData.estado === 'available' ? 'activo' : 'inactivo',
        roles: [userData.rol.toLowerCase()], // Laravel espera un array
        telefono: null // Campo opcional
      }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al crear usuario");
    }

    return await response.json();
  },

  async update(token: string, id: string, userData: any) {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: userData.nombre,
        email: userData.email,
        estado: userData.estado,
        roles: [userData.rol.toLowerCase()],
        // No enviamos password aquí para que Laravel no la actualice a menos que sea necesario
      }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al actualizar usuario");
    }

    return await response.json();
  },

  async delete(token: string, id: string) {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
        // Intentamos leer el error solo si hay contenido
        const text = await response.text();
        const message = text ? JSON.parse(text).message : "Error al eliminar usuario";
        throw new Error(message);
    }
    
    // Retornamos true porque no hay body que devolver (204 No Content)
    return true; 
  }
};