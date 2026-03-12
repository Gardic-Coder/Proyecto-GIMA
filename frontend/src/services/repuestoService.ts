const API_BASE_URL = "http://localhost:8000/api/inventario/repuestos";

export const repuestosService = {
  async getAll(token: string, page = 1, perPage = 15, searchTerm = "") {
    const queryParams = new URLSearchParams({
        page: String(page),
        per_page: String(perPage),
        ...(searchTerm && { search: searchTerm })
    });

    const response = await fetch(`${API_BASE_URL}?${queryParams}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
      },
    });

    if (!response.ok) throw new Error("Error al obtener los repuestos");
    return await response.json();
  },

  async delete(token: string, id: number) {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
          method: 'DELETE',
          headers: {
              "Authorization": `Bearer ${token}`,
              "Accept": "application/json",
          }
      });
      if (!response.ok) throw new Error("Error al eliminar el repuesto");
      
      // 👇 NUEVO: Si Laravel responde 204 (Sin contenido), no intentamos leer JSON
      if (response.status === 204) {
          return null; 
      }
      return await response.json();
  },

  async create(token: string, data: any) {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.errors ? JSON.stringify(errorData.errors) : errorData.message;
      throw new Error(errorMessage || "Error al crear el repuesto");
    }
    
    return await response.json();
  },

  async update(token: string, id: number, data: any) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.errors ? JSON.stringify(errorData.errors) : errorData.message;
      throw new Error(errorMessage || "Error al actualizar el repuesto");
    }

    return await response.json();
  }
};