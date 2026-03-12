"use client"
import { useState, useEffect } from "react";
import { FormularioRepuestos } from "./FormularioRepuestos";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Plus, ChevronLeft, Pencil, Trash2, Loader2, Search } from "lucide-react";
import Link from "next/link";
import AuthGuard from "@/components/AuthGuard";
import { useAuth } from "@/context/AuthContext";
import { repuestosService } from "@/services/repuestoService";
import Pagination from "@/components/ui/Paginacion";
import DeleteAlert from "@/components/ui/DeleteAlerta";

export default function RepuestosPage() {
  const { user } = useAuth();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [repuestoToEdit, setRepuestoToEdit] = useState<any>(null); 

  const [repuestos, setRepuestos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [porPagina, setPorPagina] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRepuestos = async () => {
      if (!user?.token) return;
      setIsLoading(true);
      try {
        const response = await repuestosService.getAll(user.token, currentPage, porPagina, searchTerm);
        
        const repuestosData = response.data?.data ? response.data.data : response.data;
        setRepuestos(repuestosData || []);
        
        const ultimaPagina = response.meta?.last_page || response.last_page || response.data?.last_page || 1;
        setTotalPages(ultimaPagina);
      } catch (error) {
        console.error("Error cargando repuestos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchRepuestos();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [user?.token, currentPage, porPagina, refreshTrigger, searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

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
      {/* Contenedor principal */}
      <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
        <DashboardHeader />
        <div className="w-full mx-auto">

          {/* BOTÓN VOLVER */}
          <Link href="/configuracion" className="w-fit">
            <button className="flex items-center gap-2 text-gray-500 my-4 md:my-6 hover:text-[#0d2344] transition-colors">
              <div className="bg-white p-1 rounded-md shadow-sm border border-gray-100"><ChevronLeft size={16} /></div>
              <span className="text-sm font-medium">Volver a configuración</span>
            </button>
          </Link>

          {/* ================= CABECERA ================= */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gima-navy font-microgramma uppercase">
                Gestión de repuestos
              </h3>
              <p className="text-gray-400 text-sm font-archivo">
                Control de stock, partes y consumibles
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {/* Buscador restaurado */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Buscar repuesto..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full bg-white border border-gray-200 pl-11 pr-4 py-3 md:py-3.5 rounded-xl text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                />
              </div>

              {/* BOTÓN NUEVO REPUESTO */}
              <button
                onClick={handleCreateClick}
                className="w-full sm:w-auto justify-center bg-[#0d6efd] text-white px-6 py-3.5 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md font-bold text-sm uppercase tracking-wide"
              >
                <Plus size={20} strokeWidth={3} />
                Nuevo repuesto
              </button>
            </div>
          </div>

          {/* ================= CONTENEDOR PRINCIPAL ================= */}
          <div className="bg-transparent md:bg-white md:rounded-[40px] md:shadow-sm md:border md:border-gray-50 overflow-hidden">
            <div className="md:p-10 overflow-hidden">
              <div className="w-full overflow-x-auto pb-4 md:pb-0">
                <div className="md:min-w-[900px]">

                  {/* CABECERA DE LA TABLA (Oculta en móvil) */}
                  <div className="hidden md:grid grid-cols-6 bg-[#DAFAFE] p-4 md:p-6 rounded-t-2xl md:rounded-t-[30px] text-gima-navy font-microgramma font-bold text-[10px] uppercase tracking-[0.2em]">
                    <span>Código</span>
                    <span>Descripción</span>
                    <span>Proveedor</span>
                    <span>Ubicación</span>
                    <span>Stock</span>
                    <span className="text-center">Acciones</span>
                  </div>

                  {/* CUERPO DE LA TABLA */}
                  <div className="space-y-4 md:space-y-0 md:border-x md:border-b md:border-gray-100 md:rounded-b-[30px] md:overflow-hidden font-archivo">
                    
                    {isLoading ? (
                      <div className="py-16 text-center text-slate-500 font-medium flex justify-center items-center gap-2">
                        <Loader2 className="animate-spin text-blue-600" size={28} />
                        Cargando inventario...
                      </div>
                    ) : repuestos.length > 0 ? (
                      repuestos.map((repuesto) => (
                        <div
                          key={repuesto.id}
                          className="flex flex-col gap-3 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm md:grid md:grid-cols-6 md:items-center md:gap-0 md:p-6 md:rounded-none md:border-0 md:border-b md:border-gray-50 md:shadow-none md:last:border-0 md:hover:bg-gray-50/50 transition-colors"
                        >
                          <div className="flex justify-between items-start md:contents">
                            <div className="flex flex-col md:contents">
                              {/* Código */}
                              <span className="text-xs md:text-sm text-gray-400 font-medium order-2 md:order-1 mt-1 md:mt-0">
                                {repuesto.codigo || "N/A"}
                              </span>
                              {/* Descripción */}
                              <span className="text-base md:text-sm font-bold text-gima-navy pr-2 order-1 md:order-2">
                                {repuesto.descripcion || repuesto.nombre || "Sin descripción"}
                              </span>
                            </div>
                            
                            {/* Proveedor */}
                            <div className="md:order-3">
                              <span className="bg-[#E3F2FD] text-gima-navy px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] font-bold">
                                {repuesto.proveedor?.nombre || repuesto.proveedor?.razon_social || "Sin Proveedor"}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col gap-3 mt-2 md:mt-0 md:contents border-t border-gray-50 pt-3 md:border-0 md:pt-0">
                            <div className="flex justify-between items-center md:contents">
                              {/* Ubicación */}
                              <span className="text-sm text-gray-500 pr-2 md:order-4">
                                {repuesto.direccion?.nombre || repuesto.direccion?.ubicacion || "N/A"}
                              </span>
                              
                              {/* Stock */}
                              <span className="text-sm font-bold text-gima-navy md:order-5">
                                <span className="md:hidden text-xs text-gray-400 font-normal mr-1">Stock:</span>
                                {repuesto.stock}
                              </span>
                            </div>

                            {/* BOTONES DE ACCIÓN (Conectados) */}
                            <div className="flex justify-end gap-2 md:justify-center md:gap-3 md:order-6 border-t border-gray-50 pt-3 md:border-0 md:pt-0">
                              <button 
                                onClick={() => handleEditClick(repuesto)}
                                className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-2 border border-emerald-100 md:border-0"
                              >
                                <Pencil size={16} className="md:w-[18px] md:h-[18px]" />
                                <span className="text-xs font-semibold md:hidden">Editar</span>
                              </button>

                              <button 
                                onClick={() => handleDeleteClick(repuesto.id)}
                                className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2 border border-red-100 md:border-0"
                              >
                                <Trash2 size={16} className="md:w-[18px] md:h-[18px]" />
                                <span className="text-xs font-semibold md:hidden">Eliminar</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="py-12 text-center text-gray-500">
                        {searchTerm ? `No se encontraron repuestos para "${searchTerm}"` : "No hay repuestos registrados en el sistema."}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Paginación */}
              {!isLoading && totalPages > 0 && (
                <div className="mt-6 border-t border-gray-100 pt-6">
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