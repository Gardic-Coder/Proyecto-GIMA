type Priority = 'ALTA' | 'MEDIA' | 'BAJA';
type Status = 'COMPLETADO' | 'EN PROCESO' | 'PROGRAMADO';

interface Report {
  id: string;
  asset: string;
  desc: string;
  priority: Priority;
  status: Status;
  tech: string;
}

const reportsData: Report[] = [
  { 
    id: "1234", 
    asset: "SERVIDOR 123", 
    desc: "Restauracion de conectores", 
    priority: "ALTA", 
    status: "COMPLETADO", 
    tech: "PEDRO PEREZ" 
  },
  { 
    id: "6789", 
    asset: "AIRE ACONDICIONADO", 
    desc: "Fallo del compresor", 
    priority: "MEDIA", 
    status: "EN PROCESO", 
    tech: "JUAN PEREZ" 
  },
  { 
    id: "45132", 
    asset: "CPU PRINCIPAL", 
    desc: "Servicio de mantenimiento", 
    priority: "BAJA", 
    status: "PROGRAMADO", 
    tech: "LUIS SOTO" 
  },
];

export const ReportTable = () => {
  return (
    <div className="bg-transparent md:bg-white md:rounded-2xl md:border md:border-gray-100 md:shadow-sm md:overflow-hidden">
      
      <div className="p-4 md:p-6 md:border-b md:border-gray-50 mb-4 md:mb-0">
        <h2 className="font-bold text-gray-800 text-base md:text-lg">Mantenimientos prioritarios pendientes de ejecución</h2>
      </div>

      {/* AQUI ESTA EL SCROLL, contenedor que maneja el desbordamiento horizontal */}
      <div className="w-full overflow-x-auto pb-2 md:pb-0">
        {/* Le damos un ancho mínimo en PC (md:min-w-[850px]) para que active el scroll si no cabe */}
        <div className="space-y-4 md:space-y-0 md:divide-y md:divide-gray-50 md:min-w-[850px]">
          {reportsData.map((report) => (
            <div 
              key={report.id} 
              className="grid grid-cols-2 gap-y-4 gap-x-2 p-4 bg-white rounded-xl border border-gray-100 shadow-sm md:grid-cols-5 md:gap-4 md:p-8 md:bg-transparent md:rounded-none md:border-0 md:shadow-none md:hover:bg-gray-50 md:transition-colors"
            >
              <div className="col-span-2 md:col-span-1 order-1 flex items-center">
                <span className="text-gray-400 font-mono text-sm bg-gray-100 px-4 py-1 rounded">#{report.id}</span>
              </div>
              
              <div className="col-span-1 md:col-span-1 order-2 flex flex-col justify-center">
                <p className="font-bold text-sm text-gray-800">{report.asset}</p>
                <p className="text-xs text-gray-500">{report.desc}</p>
              </div>
              
              <div className="col-span-1 md:col-span-1 order-3 flex justify-end md:justify-start items-center">
                <PriorityBadge priority={report.priority} />
              </div>

              <div className="col-span-1 md:col-span-1 order-5 md:order-4 flex justify-end md:justify-start items-center">
                <StatusBadge status={report.status} />
              </div>
              
              <div className="col-span-1 md:col-span-1 order-4 md:order-5 flex items-center md:justify-end">
                <span className="text-sm font-bold text-gray-700">{report.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

const PriorityBadge = ({ priority }: { priority: 'ALTA' | 'MEDIA' | 'BAJA' }) => {
  const colors: Record<string , string> = {
    ALTA: "bg-red-100 text-red-600",
    MEDIA: "bg-orange-100 text-orange-600",
    BAJA: "bg-blue-100 text-blue-600",
  };
 return <span className={`px-3 py-1 rounded-full text-[10px] font-bold w-fit ${colors[priority]}`}>{priority}</span>;
};

const StatusBadge = ({ status }: { status: 'COMPLETADO' | 'EN PROCESO' | 'PROGRAMADO' }) => {
  const dotColor: Record<string , string> = {
    COMPLETADO: "bg-emerald-500",
    "EN PROCESO": "bg-orange-500",
    PROGRAMADO: "bg-blue-500",
  };
  return (
    <div className="flex items-center text-[10px] font-bold text-gray-600">
      <div className={`w-2 h-2 rounded-full mr-2 ${dotColor[status]}`} />
      {status}
    </div>
  );
};