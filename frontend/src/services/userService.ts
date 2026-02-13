import { getIniciales } from '@/utils/formatters';

const API_BASE_URL = "http://localhost:8000/api/admin";

export const userService = {
  /**
   * Obtiene y adapta la lista de usuarios del backend
   */
  async getAll(token: string, page = 1, perPage = 5) {
    const response = await fetch(`${API_BASE_URL}/users?page=${page}&per_page=${perPage}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
      },
    });

    if (!response.ok) throw new Error("Error al obtener usuarios");

    const result = await response.json();

    // Adaptamos el formato aquí mismo para que la vista reciba datos limpios
    return result.data.map((u: any) => ({
      id: u.id.toString(),
      iniciales: getIniciales(u.name),
      name: u.name,
      email: u.email,
      rol: u.roles[0] || 'Sin rol',
      department: 'N/A', 
      status: u.estado,
    }));
  }
};