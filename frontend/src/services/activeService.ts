const API_BASE_URL = "http://localhost:8000/api/catalogo";

export const articuloService = {
  async getAll(token: string, page = 1, perPage = 5, search = "", tipo = "") {
    let url = `${API_BASE_URL}/articulos?page=${page}&per_page=${perPage}`;

    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }

    if (tipo) {
      url += `&tipo=${encodeURIComponent(tipo)}`;
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) throw new Error("Error al obtener las categorías");

    const result = await response.json();

    return {
      categorias: result.data.map((item: any) => ({
        id: `CAT-${item.id.toString().padStart(3, "0")}`,
        rawId: item.id,
        nombre: item.tipo.toUpperCase(),
        descripcion: `${item.marca} ${item.modelo} - ${item.descripcion}`,
        activos: item.activos_count || 0,
        tipo: item.tipo,
        marca: item.marca,
        modelo: item.modelo,
        rawDescripcion: item.descripcion,
      })),
      meta: result.meta,
    };
  },

  /** * 2. Crear una nueva categoría (Artículo)
   */
  async create(
    token: string,
    data: { tipo: string; marca: string; modelo: string; descripcion: string },
  ) {
    const response = await fetch(`${API_BASE_URL}/articulos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al crear la categoría");
    }

    return await response.json();
  },

  /** * 3. Actualizar una categoría existente
   */
  async update(
    token: string,
    id: number,
    data: {
      tipo?: string;
      marca?: string;
      modelo?: string;
      descripcion?: string;
    },
  ) {
    // Ya recibimos el ID puro (ej. 8), no hay que limpiar texto
    const response = await fetch(`${API_BASE_URL}/articulos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al actualizar la categoría");
    }

    return await response.json();
  },

  /** * 4. Eliminar una categoría
   */
  async delete(token: string, id: number) {
    // Ya recibimos el ID puro (ej. 8)
    const response = await fetch(`${API_BASE_URL}/articulos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      const message = text
        ? JSON.parse(text).message
        : "Error al eliminar la categoría";
      throw new Error(message);
    }

    return true;
  },
};
