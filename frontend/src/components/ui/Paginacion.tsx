'use client';

interface PaginationProps {
    paginaActual: number;
    totalPaginas: number;
    porPagina: number;
    onPageChange: (nuevaPagina: number) => void;
    onPerPageChange: (nuevoPorPagina: number) => void;
}

export default function Pagination({
    paginaActual,
    totalPaginas,
    porPagina,
    onPageChange,
    onPerPageChange
}: PaginationProps) {
    
    // Función segura para manejar el input manual de página
    const handleInputPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = parseInt(e.target.value);
        if (!isNaN(valor) && valor >= 1 && valor <= totalPaginas) {
            onPageChange(valor);
        }
    };

    // Si no hay datos (totalPaginas es 0 o menor), no mostramos los controles
    if (totalPaginas <= 0) return null;

    return (
        <div className="bg-white px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Selector de registros por página */}
            <div className="flex items-center text-sm text-gray-500 gap-2">
                <span>Mostrar</span>
                <select 
                    value={porPagina}
                    onChange={(e) => onPerPageChange(Number(e.target.value))}
                    className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={30}>30</option>
                </select>
                <span>registros</span>
            </div>

            {/* Controles de navegación */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-sm text-gray-700">
                    Página <span className="font-semibold">{paginaActual}</span> de <span className="font-semibold">{totalPaginas}</span>
                </span>
                
                <div className="flex items-center gap-2">
                    {/* Botón Anterior */}
                    <button
                        onClick={() => onPageChange(Math.max(paginaActual - 1, 1))}
                        disabled={paginaActual === 1}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        Anterior
                    </button>

                    {/* Input para salto de página directo */}
                    <div className="hidden sm:flex items-center gap-1">
                        <span className="text-sm text-gray-500">Ir a:</span>
                        <input 
                            type="number" 
                            min={1} 
                            max={totalPaginas}
                            value={paginaActual}
                            onChange={handleInputPageChange}
                            className="w-16 px-2 py-1 text-center text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Botón Siguiente */}
                    <button
                        onClick={() => onPageChange(Math.min(paginaActual + 1, totalPaginas))}
                        disabled={paginaActual === totalPaginas}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
}