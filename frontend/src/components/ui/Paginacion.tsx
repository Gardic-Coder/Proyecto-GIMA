'use client';
import { useState, useEffect } from 'react';

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

    // Estado local para lo que el usuario escribe en el input antes de presionar Enter
    const [inputValue, setInputValue] = useState(paginaActual.toString());

    // Si la página cambia desde afuera (ej. botones Anterior/Siguiente), actualizamos el input
    useEffect(() => {
        setInputValue(paginaActual.toString());
    }, [paginaActual]);

    // Función que se ejecuta al presionar una tecla en el input
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            let valor = parseInt(inputValue);
            
            // Si escribieron texto no válido, restauramos al valor actual
            if (isNaN(valor)) {
                setInputValue(paginaActual.toString());
                return;
            }

            // Validaciones de límite (Menor a 1 o mayor al total)
            if (valor < 1) valor = 1;
            if (valor > totalPaginas) valor = totalPaginas;
            
            setInputValue(valor.toString());
            onPageChange(valor); // Enviamos el valor validado al padre
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
                        className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition shadow-sm"
                    >
                        Anterior
                    </button>

                    {/* Input para salto de página directo */}
                    <div className="hidden sm:flex items-center gap-1">
                        <span className="text-sm text-gray-500">Ir a:</span>
                        <input 
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-16 px-2 py-1 text-center text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Botón Siguiente */}
                    <button
                        onClick={() => onPageChange(Math.min(paginaActual + 1, totalPaginas))}
                        disabled={paginaActual === totalPaginas}
                        className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition shadow-sm"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
}