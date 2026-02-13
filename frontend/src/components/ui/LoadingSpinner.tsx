'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-12 w-full">
      <div className="relative">
        {/* Círculo de fondo */}
        <div className="w-12 h-12 border-4 border-blue-100 rounded-full"></div>
        {/* Círculo animado */}
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-500 font-medium animate-pulse">
        Cargando datos del sistema...
      </p>
    </div>
  );
}