<?php

namespace App\Http\Controllers\Api\Catalogo;

use App\Http\Controllers\Controller;
use App\Models\Articulo;
use Illuminate\Http\Request;
use App\Http\Resources\ArticuloResource;

class ArticuloController extends Controller
{
    
    /**
     * GET /api/catalogo/articulos
     */
    public function index(Request $request)
    {
        $query = Articulo::withCount('activos');

        // 1. Filtro de Búsqueda global (el que ya hicimos)
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('marca', 'LIKE', "%{$search}%")
                  ->orWhere('modelo', 'LIKE', "%{$search}%")
                  ->orWhere('tipo', 'LIKE', "%{$search}%")
                  ->orWhere('descripcion', 'LIKE', "%{$search}%");
            });
        }

        // 2. NUEVO: Filtro específico por Tipo
        if ($request->filled('tipo')) {
            $query->where('tipo', $request->tipo);
        }

        $perPage = $request->input('per_page', 15);
        $articulos = $query->paginate($perPage);

        return ArticuloResource::collection($articulos);
    }

    /**
     * POST /api/catalogo/articulos
     */
    public function store(Request $request)
    {
        // Validamos los datos entrantes
        $datosValidados = $request->validate([
            'tipo'        => 'required|string|max:255',
            'marca'       => 'required|string|max:100',
            'modelo'      => 'required|string|max:100',
            'descripcion' => 'nullable|string',
        ]);

        // Usamos esa variable para crear
        $articulo = Articulo::create($datosValidados);

        return new ArticuloResource($articulo);
    }

    /**
     * GET /api/catalogo/articulos/{id}
     */
    public function show(Articulo $articulo)
    {
        return new ArticuloResource($articulo);
    }

    /**
     * PUT/PATCH /api/catalogo/articulos/{id}
     */
    public function update(Request $request, Articulo $articulo)
    {
        //validamos los datos entrantes
        $datosValidados = $request->validate([
            'tipo'        => 'sometimes|string|max:255',
            'marca'       => 'sometimes|string|max:100',
            'modelo'      => 'sometimes|string|max:100',
            'descripcion' => 'nullable|string',
        ]);

        $articulo->update($datosValidados);

        return new ArticuloResource($articulo);
    }

    /**
     * DELETE /api/catalogo/articulos/{id}
     */
    public function destroy(Articulo $articulo)
    {
        // Verificamos si tiene hijos
        if ($articulo->activos()->exists()) {
            return response()->json([
                'message' => 'No se puede eliminar el artículo porque tiene activos físicos registrados.'
            ], 409); 
        }
       // si no tiene hijos, procedemos a eliminar
        $articulo->delete();
        return response()->noContent(); 
    }
}