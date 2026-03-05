import { TareaProxima } from "@/services/dashboardServices";

interface UpcomingTasksProps {
  tareas?: TareaProxima[];
  cargando?: boolean;
}

export function UpcomingTasks({ tareas = [], cargando }: UpcomingTasksProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm w-full">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">
          Próximos mantenimientos preventivos {cargando && <span className="text-sm font-normal text-gray-400 lowercase ml-2">(Cargando...)</span>}
        </h3>
      </div>

      <div className="space-y-4">
        {/* Validaciones de estado */}
        {cargando ? (
          <p className="text-sm text-slate-500 text-center py-4">Consultando agenda...</p>
        ) : tareas.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-4 bg-slate-50 rounded-lg">No hay mantenimientos programados para los próximos días.</p>
        ) : (
          /* Renderizado dinámico de la lista */
          tareas.map((tarea) => (
            <div key={tarea.id} className="bg-emerald-50/30 p-4 rounded-xl flex justify-between items-center border border-emerald-100">
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold text-slate-800 text-base">{tarea.titulo}</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    🗓 Programado: {tarea.fecha}
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    👨‍🔧 Técnico: {tarea.tecnico_nombre}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>    
    </div>
  );
}