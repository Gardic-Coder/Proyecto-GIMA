"use client"
import { useState, useEffect } from "react";
import { FormularioRepuestos } from "./FormularioRepuestos";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Plus, ChevronLeft, Pencil, Trash2, Loader2, Search } from "lucide-react";
import Link from "next/link";
import AuthGuard from "@/components/AuthGuard";
import { useAuth } from "@/context/AuthContext";
import { repuestosService } from "@/services/repuestosService";
import Pagination from "@/components/ui/Paginacion";
import DeleteAlert from "@/components/ui/DeleteAlerta";

export default function RepuestosPage() {
  const { user } = useAuth();
  
  // Estados para modales y selección
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [repuestoToEdit, setRepuestoToEdit] = useState<any>(null); 

  // Estados de datos
  const [repuestos, setRepuestos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Estados de paginación y búsqueda
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [porPagina, setPorPagina] = useState(20);
  const [searchTerm, setSearchTerm] = useState(""); // <-- NUEVO ESTADO PARA EL BUSCADOR

  // Efecto para cargar los datos (Ahora incluye el buscador con retraso)
  useEffect(() => {
    const fetchRepuestos = async () => {
      if (!user?.token) return;
      setIsLoading(true);
      try {
        // Pasamos el searchTerm al servicio
        const response = await repuestosService.getAll(user.token, currentPage, porPagina, searchTerm);
        
        setRepuestos(response.data || []);
        setTotalPages(response.meta?.last_page || response.last_page || 1);
      } catch (error) {
        console.error("Error al cargar los repuestos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Usamos setTimeout para no hacer llamadas a la API por cada letra que escribas rápidamente
    const timeoutId = setTimeout(() => {
      fetchRepuestos();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [user?.token, currentPage, porPagina, refreshTrigger, searchTerm]); // Escucha el searchTerm

  // Manejo de la búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Si buscamos algo, siempre volvemos a la página 1
  };

  // Manejo de eliminación
  const handleDeleteClick = (id: number) => {
    setIdToDelete(id);
    setIsAlertOpen(true);
  };

  const confirmDelete = async () => {
    if (!user?.token || !idToDelete) return;
    setIsAlertOpen(false);
    setIsLoading(true);

    try {
      await repuestosService.delete(user.token, idToDelete);
      setRefreshTrigger(prev => prev + 1); 
    } catch (error: any) {
      console.error("Error al eliminar el repuesto:", error);
      alert("No se pudo eliminar el repuesto.");
    } finally {
      setIsLoading(false);
      setIdToDelete(null);
    }
  };

  // Manejo de creación / edición
  const handleCreateClick = () => {
    setRepuestoToEdit(null); 
    setIsModalOpen(true);
  };

  const handleEditClick = (repuesto: any) => {
    setRepuestoToEdit(repuesto); 
    setIsModalOpen(true);
  };

  return (
    <AuthGuard roleRequired={["admin", "supervisor", "tecnico"]}>
      <div className="min-h-screen bg-[#F8FAFC] p-8">
        <DashboardHeader />
        <div className="w-full mx-auto">

          {/* BOTÓN VOLVER */}
          <Link href="/configuracion" >
            <button className="flex items-center gap-2 text-gray-500 m-3 hover:text-[#0d2344] transition-colors">
              <div className="bg-white p-1 rounded-md shadow-sm"><ChevronLeft size={16} /></div>
              <span className="text-sm font-medium">Volver a configuración</span>
            </button>
          </Link>

          {/* CONTENEDOR PRINCIPAL */}
          <div className="bg-white rounded-[40px] shadow-sm border border-gray-50 overflow-hidden">

            {/* CABECERA DEL CONTENIDO */}
            <div className="bg-gima-light p-10 pb-8 border-b border-blue-50">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gima-navy font-microgramma uppercase">
                    Gestión de repuestos
                  </h3>
                  <p className="text-gray-400 text-sm font-archivo">
                    Control de stock, partes y consumibles
                  </p>
                </div>

                {/* BUSCADOR Y BOTÓN NUEVO */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  
                  {/* BARRA DE BÚSQUEDA */}
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Buscar repuesto..."
                      value={searchTerm}
                      onChange={handleSearch}
                      className="w-full bg-white border border-gray-200 pl-11 pr-4 py-3 rounded-xl text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                    />
                  </div>

                  {/* BOTÓN NUEVO REPUESTO */}
                  <button
                    onClick={handleCreateClick}
                    className="bg-gima-blue text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#0052cc] transition-all shadow-lg shadow-blue-100 font-microgramma text-xs font-bold uppercase whitespace-nowrap">
                    <Plus size={20} strokeWidth={3} />
                    Nuevo repuesto
                  </button>
                </div>
              </div>
            </div>

            {/* TABLA */}
            <div className="p-10 pt-6">
              <div className="w-full">
                
                {/* CABECERA DE LA TABLA */}
                <div className="grid grid-cols-6 bg-[#DAFAFE] p-6 rounded-t-[30px] text-gima-navy font-microgramma font-bold text-[10px] uppercase tracking-[0.2em]">
                  <span>Código</span>
                  <span>Descripción</span>
                  <span>Proveedor</span>
                  <span>Ubicación</span>
                  <span>Stock</span>
                  <span className="text-center">Acciones</span>
                </div>

                <div className="border-x border-b border-gray-100 rounded-b-[30px] overflow-hidden font-archivo">
                  {isLoading ? (
                    <div className="py-10 text-center text-slate-500 font-medium flex justify-center items-center gap-2">
                      <Loader2 className="animate-spin text-blue-600" size={24} />
                      Cargando repuestos...
                    </div>
                  ) : repuestos.length > 0 ? (
                    repuestos.map((repuesto) => (
                      <div
                        key={repuesto.id}
                        className=" grid grid-cols-6 items-center p-6 bg-white border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <span className="text-sm text-gray-400 font-medium">{repuesto.codigo || "N/A"}</span>
                        <span className="text-sm font-bold text-gima-navy">{repuesto.descripcion}</span>
                        <div>
                          <span className="bg-[#E3F2FD] text-gima-navy px-4 py-1.5 rounded-full text-[10px] font-bold">
                            {repuesto.proveedor?.nombre || repuesto.proveedor?.razon_social || "Sin Proveedor"}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {repuesto.direccion?.nombre || repuesto.direccion?.ubicacion || "N/A"}
                        </span>
                        <span className="text-sm font-bold text-gima-navy">{repuesto.stock}</span>

                        {/* BOTONES DE ACCIÓN */}
                        <div className="flex justify-center gap-3">
                          <button 
                            onClick={() => handleEditClick(repuesto)}
                            className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-colors">
                            <Pencil size={18} />
                          </button>
                          <button 
                            onClick={() => handleDeleteClick(repuesto.id)}
                            className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-10 text-center text-gray-500">
                        {searchTerm ? `No se encontraron resultados para "${searchTerm}"` : "No hay repuestos registrados."}
                    </div>
                  )}
                </div>
                
                {/* PAGINACIÓN */}
                {!isLoading && totalPages > 0 && (
                  <div className="mt-6">
                    <Pagination
                      paginaActual={currentPage}
                      totalPaginas={totalPages}
                      porPagina={porPagina}
                      onPageChange={setCurrentPage}
                      onPerPageChange={(nuevoPorPagina) => {
                        setPorPagina(nuevoPorPagina);
                        setCurrentPage(1);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* FORMULARIO */}
        <FormularioRepuestos 
            isOpen={isModalOpen} 
            repuestoToEdit={repuestoToEdit}
            onClose={() => {
                setIsModalOpen(false);
                setRepuestoToEdit(null);
                setRefreshTrigger(prev => prev + 1); 
            }} 
        />
        
        <DeleteAlert
          isOpen={isAlertOpen}
          onClose={() => setIsAlertOpen(false)}
          onConfirm={confirmDelete}
          title="¿Eliminar Repuesto?"
          description="Esta acción no se puede deshacer y el repuesto será borrado del sistema."
        />

      </div>
    </AuthGuard>
  );
}