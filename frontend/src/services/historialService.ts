const API_BASE_URL = "http://localhost:8000/api/admin";

export const historialService = {
  async getAll(token: string, page = 1, perPage = 20) {
    const response = await fetch(`${API_BASE_URL}/historial-logs?page=${page}&per_page=${perPage}`, { 
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener el historial de logs del servidor");
    }

    return await response.json();
  }
};