const API_BASE_URL = "http://localhost:8000/api/inventario/proveedores";

export const proveedorService = {
  async getAll(token: string) {
    const response = await fetch(`${API_BASE_URL}?per_page=100`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
      },
    });

    if (!response.ok) throw new Error("Error al obtener proveedores");
    return await response.json();
  }
};