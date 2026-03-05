import { BarraActivos } from "@/services/dashboardServices";

interface AssetStatusProps {
  datos?: BarraActivos | null;
  cargando?: boolean;
}

export function AssetStatus({ datos, cargando }: AssetStatusProps) {
  // Extraemos los valores con defaults en 0 por si está cargando
  const operativo = datos?.estado_activos?.operativo ?? 0;
  const mantenimiento = datos?.estado_activos?.mantenimiento ?? 0;
  const fueraServicio = datos?.estado_activos?.fuera_servicio ?? 0;
  
  // Extraemos el texto de la alerta que viene del backend
  const alerta = datos?.alerta_sistema;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm w-full">
      {/* Encabezado */}
      <div className="flex items-center gap-3 mb-10">
        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">
          Estado de activos {cargando && <span className="text-sm font-normal text-gray-400 lowercase ml-2">(Cargando...)</span>}
        </h3>
      </div>

      {/* Barras de estado */}
      <div className="space-y-10">
        <StatusBar label="Operativo" percentage={operativo} color="bg-[#008f7a]" />
        <StatusBar label="En mantenimiento" percentage={mantenimiento} color="bg-orange-500" />
        <StatusBar label="Fuera de servicio" percentage={fueraServicio} color="bg-red-600" />
      </div>

      {/* Alerta condicional: Solo se muestra si 'alerta' tiene contenido */}
      {!cargando && alerta && (
        <div className="mt-12 bg-orange-50 border border-orange-100 p-6 rounded-2xl flex items-center gap-4 transition-all">
          <div className="min-w-[40px] h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500 font-black">!</div>
          <p className="text-sm text-orange-800 leading-relaxed">
            {alerta}
          </p>
        </div>
      )}
    </div>
  );
}

{/* Función del estado de la barra */}
function StatusBar({ label, percentage, color }: { label: string, percentage: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-slate-700 text-lg">{label}</span>
        <span className="font-bold text-slate-900 text-lg">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-5">
        <div 
          className={`${color} h-5 rounded-full transition-all duration-500 ease-out`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}