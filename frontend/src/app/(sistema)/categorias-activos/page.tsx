"use client";
import AuthGuard from "@/components/AuthGuard";
import { useState, useEffect } from "react";
import {
  Pencil,
  Trash2,
  Plus,
  Search,
  Filter,
  ChevronLeft,
  X,
  Loader2,
  Package // Icono añadido para el diseño móvil
} from "lucide-react";
import DeleteAlert from "@/components/ui/DeleteAlerta";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { articuloService } from "@/services/activeService"; 
import Pagination from "@/components/ui/Paginacion"; 

export default function CategoriesPage() {
  const { user } = useAuth();

  // Estados de datos
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0); 
  
  // --- NUEVOS ESTADOS PARA EL FILTRO ---
  const [filterTipo, setFilterTipo] = useState(""); 
  const [showFilters, setShowFilters] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTipoDropdownOpen, setIsTipoDropdownOpen] = useState(false);

  // Estados de Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const [porPagina, setPorPagina] = useState(5);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [totalResultados, setTotalResultados] = useState(0);

  // Estados de Alertas y Modal
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({ rawId: null as number | null, tipo: "", marca: "", modelo: "", descripcion: "" });

  // Efecto para cargar los datos (AHORA ESCUCHA filterTipo)
  useEffect(() => {
    const fetchCategorias = async () => {
      if (!user?.token) return;
      setIsLoading(true);
      try {
        // Le pasamos el filterTipo al servicio
        const data = await articuloService.getAll(user.token, paginaActual, porPagina, searchTerm, filterTipo);
        setCategories(data.categorias);
        setTotalPaginas(data.meta.last_page);
        setTotalResultados(data.meta.total);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchCategorias();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [paginaActual, porPagina, searchTerm, filterTipo, user?.token, refreshTrigger]); 

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPaginaActual(1);
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
      await articuloService.delete(user.token, idToDelete);
      setRefreshTrigger(prev => prev + 1); 
    } catch (error: any) {
      console.error("Error al eliminar la categoría:", error);
      alert(error.message || "No se pudo eliminar la categoría.");
    } finally {
      setIsLoading(false);
      setIdToDelete(null);
    }
  };

  const handleCreateClick = () => {
    setFormData({ rawId: null, tipo: "", marca: "", modelo: "", descripcion: "" });
    setIsModalOpen(true);
  };

  const handleEditClick = (cat: any) => {
    setFormData({
      rawId: cat.rawId,
      tipo: cat.tipo || "",
      marca: cat.marca || "",
      modelo: cat.modelo || "",
      descripcion: cat.rawDescripcion || "",
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.token) return;
    setIsSaving(true);

    try {
      if (formData.rawId) {
        await articuloService.update(user.token, formData.rawId, formData);
      } else {
        await articuloService.create(user.token, formData);
      }
      setIsModalOpen(false);
      setRefreshTrigger(prev => prev + 1); 
    } catch (error: any) {
      console.error("Error al guardar:", error);
      alert(error.message || "Hubo un problema al guardar la información.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AuthGuard roleRequired={["admin", "supervisor"]}>
    
    <div className="font-sans space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-2">
        <div>
          <h1 className="text-3xl font-bold text-gima-navy font-title tracking-wide">
            INVENTARIO DE ACTIVOS
          </h1>
          <Link href="/dashboard">
            <button className="flex items-center gap-2 text-gray-500 mt-5 hover:text-[#0d2344] transition-colors group">
              <div className="bg-white p-1 rounded-md shadow-sm group-hover:bg-slate-100">
                <ChevronLeft size={16} />
              </div>
              <span className="text-sm font-medium">Volver al inicio</span>
            </button>
          </Link>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          {/* --- BOTÓN DE FILTRO DINÁMICO --- */}
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`p-3 border rounded-xl hover:bg-slate-50 transition-colors shadow-sm shrink-0 ${showFilters ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-slate-200 text-gima-gray'}`}
          >
            <Filter size={20} />
          </button>

          <button 
            onClick={handleCreateClick}
            className="w-full md:w-auto bg-gima-blue hover:brightness-90 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 transform active:scale-95"
          >
            <Plus size={20} strokeWidth={3} />
            <span>AGREGAR ACTIVOS</span>
          </button>
        </div>
      </div>

      <section className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
        {/* --- BARRA DE HERRAMIENTAS CON MENÚ DESPLEGABLE --- */}
        <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            {/* Buscador */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-3 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Buscar activo..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full bg-slate-50 pl-11 pr-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-blue-100 transition-all border border-transparent focus:border-blue-200"
              />
            </div>

           {/* Menu de Filtros Desplegable Personalizado */}
            {showFilters && (
              <div className="w-full md:w-auto animate-in fade-in slide-in-from-left-4 duration-200 relative z-50">
                
                {/* reaccion al toque*/}
                <div 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full md:w-52 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl pl-4 pr-4 py-2.5 text-sm font-medium flex items-center justify-between cursor-pointer transition-all shadow-sm hover:bg-white hover:border-blue-300 hover:ring-2 hover:ring-blue-100"
                >
                  <span>
                    {filterTipo === "" ? "Todos los tipos" : filterTipo === "equipo" ? "Solo Equipos" : "Solo Mobiliario"}
                  </span>
                  <svg 
                    className={`text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-500' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>

                {/*selector */}
                <div className={`absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  <div className="flex flex-col">
                    <button 
                      onClick={() => { 
                        setFilterTipo(""); 
                        setPaginaActual(1); 
                        setShowFilters(false);
                        setIsDropdownOpen(false); // se cierra al elegir
                      }}
                      className={`text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 border-b border-slate-50 ${filterTipo === "" ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-600"}`}
                    >
                      Todos los tipos
                    </button>
                    <button 
                      onClick={() => { 
                        setFilterTipo("equipo"); 
                        setPaginaActual(1); 
                        setShowFilters(false);
                        setIsDropdownOpen(false); 
                      }}
                      className={`text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 border-b border-slate-50 ${filterTipo === "equipo" ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-600"}`}
                    >
                      Solo Equipos
                    </button>
                    <button 
                      onClick={() => { 
                        setFilterTipo("mobiliario"); 
                        setPaginaActual(1); 
                        setShowFilters(false);
                        setIsDropdownOpen(false); 
                      }}
                      className={`text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 ${filterTipo === "mobiliario" ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-600"}`}
                    >
                      Solo Mobiliario
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>
          
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap self-end md:self-auto mt-2 md:mt-0">
            Total: {totalResultados} Resultados
          </span>
        </div>

        {/* VISTA ESCRITORIO (md:block)    */}
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 text-gima-navy border-b border-slate-100">
                <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-widest font-title">ID</th>
                <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-widest font-title">Tipo</th>
                <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-widest font-title">Marca</th>
                <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-widest font-title">Modelo</th>
                <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-widest font-title">Descripción</th>
                <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-widest font-title text-center">Activos</th>
                <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-widest font-title text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-slate-500 font-medium">
                    <div className="flex justify-center items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gima-blue"></div>
                      Cargando información...
                    </div>
                  </td>
                </tr>
              ) : categories.length > 0 ? (
                categories.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="py-5 px-6 font-medium text-slate-500 text-sm whitespace-nowrap">{item.id}</td>
                    <td className="py-5 px-6 font-bold text-gima-navy text-sm uppercase whitespace-nowrap">{item.tipo}</td>
                    <td className="py-5 px-6 text-sm text-slate-700 font-medium whitespace-nowrap">{item.marca}</td>
                    <td className="py-5 px-6 text-sm text-slate-700 whitespace-nowrap">{item.modelo}</td>
                    <td className="py-5 px-6 text-sm text-slate-500 max-w-xs truncate" title={item.rawDescripcion}>
                      {item.rawDescripcion}
                    </td>
                    <td className="py-5 px-6 text-center">
                      <span className="bg-blue-50 text-blue-700 py-1.5 px-4 rounded-lg text-xs font-bold border border-blue-100">
                        {item.activos}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => handleEditClick(item)}
                          className="p-2 text-slate-400 hover:text-gima-blue hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(item.rawId)}
                          className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-slate-400 text-sm">
                    No se encontraron resultados para "{searchTerm}" {filterTipo && "con el tipo seleccionado"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* VISTA TLFN (block md:hidden)          */}

        <div className="block md:hidden bg-slate-50/30 p-4 space-y-4">
          {isLoading ? (
            <div className="py-10 flex flex-col items-center justify-center text-slate-500 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-gima-blue" />
              <span className="text-sm font-medium">Cargando información...</span>
            </div>
          ) : categories.length > 0 ? (
            categories.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 space-y-4 relative">
                
                {/* Cabecera de la tarjeta: Tipo e ID */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gima-navy text-lg uppercase leading-tight">{item.tipo}</h3>
                    <p className="text-xs font-medium text-slate-400 mt-1">ID: {item.id}</p>
                  </div>
                  <span className="bg-blue-50 text-blue-700 py-1.5 px-3 rounded-lg text-xs font-bold border border-blue-100">
                    {item.activos} Activos
                  </span>
                </div>
                
                {/* Detalles del activo */}
                <div className="grid grid-cols-2 gap-3 text-sm bg-slate-50 rounded-xl p-3">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Marca</span>
                    <span className="font-semibold text-slate-700">{item.marca || "N/A"}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Modelo</span>
                    <span className="font-semibold text-slate-700">{item.modelo || "N/A"}</span>
                  </div>
                </div>

                <div>
                   <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Descripción</span>
                   <p className="text-sm text-slate-600 line-clamp-2">{item.rawDescripcion || "Sin descripción detallada."}</p>
                </div>

                {/* Botones de acción */}
                <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                  <button 
                    onClick={() => handleEditClick(item)}
                    className="flex items-center gap-1.5 text-xs text-blue-600 font-bold bg-blue-50/80 px-4 py-2.5 rounded-xl hover:bg-blue-100 transition-colors"
                  >
                    <Pencil size={14} /> Editar
                  </button>
                  <button 
                    onClick={() => handleDeleteClick(item.rawId)}
                    className="flex items-center gap-1.5 text-xs text-red-600 font-bold bg-red-50/80 px-4 py-2.5 rounded-xl hover:bg-red-100 transition-colors"
                  >
                    <Trash2 size={14} /> Eliminar
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
              <Package className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-medium">No se encontraron resultados.</p>
            </div>
          )}
        </div>
        
        {/* Paginacion (Se muestra tanto en tlfn como en escritorio) */}
        {!isLoading && totalPaginas > 0 && (
          <div className="p-4 border-t border-slate-100 bg-white">
            <Pagination
              paginaActual={paginaActual}
              totalPaginas={totalPaginas}
              porPagina={porPagina}
              onPageChange={setPaginaActual}
              onPerPageChange={(nuevoPorPagina) => {
                setPorPagina(nuevoPorPagina);
                setPaginaActual(1);
              }}
            />
          </div>
        )}
      </section>

      {/* MODAL PARA CREAR / EDITAR  */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg overflow-hidden transform transition-all">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-xl font-bold text-gima-navy font-title">
                {formData.rawId ? "Editar Categoría" : "Nueva Categoría"}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-4">
              
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo de Activo</label>
                
                <div 
                  onClick={() => setIsTipoDropdownOpen(!isTipoDropdownOpen)}
                  className="w-full bg-slate-50 border border-gray-200 text-slate-700 rounded-xl pl-4 pr-4 py-2.5 text-sm flex items-center justify-between cursor-pointer transition-all hover:bg-white hover:border-blue-300 hover:ring-2 hover:ring-blue-100"
                >
                  <span className={formData.tipo === "" ? "text-slate-400" : "font-medium"}>
                    {formData.tipo === "" ? "Seleccione un tipo..." : 
                     formData.tipo === "equipo" ? "EQUIPO" : 
                     formData.tipo === "mobiliario" ? "MOBILIARIO" : 
                     formData.tipo === "vehiculo" ? "VEHÍCULO" : 
                     "HERRAMIENTA"}
                  </span>
                  <svg 
                    className={`text-slate-400 transition-transform duration-300 ${isTipoDropdownOpen ? 'rotate-180 text-blue-500' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>

                {/* Selector de opciones */}
                <div className={`absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden z-50 transition-all duration-200 ${isTipoDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  <div className="flex flex-col">
                    {[
                      { valor: "equipo", etiqueta: "EQUIPO" },
                      { valor: "mobiliario", etiqueta: "MOBILIARIO" },
                      { valor: "vehiculo", etiqueta: "VEHÍCULO" },
                      { valor: "herramienta", etiqueta: "HERRAMIENTA" }
                    ].map((opcion) => (
                      <button 
                        key={opcion.valor}
                        type="button"
                        onClick={() => { 
                          setFormData({...formData, tipo: opcion.valor});
                          setIsTipoDropdownOpen(false); 
                        }}
                        className={`text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 border-b border-slate-50 ${formData.tipo === opcion.valor ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-600"}`}
                      >
                        {opcion.etiqueta}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input oculto para validacion */}
                <input 
                  type="text" 
                  required 
                  value={formData.tipo} 
                  onChange={() => {}} 
                  className="absolute opacity-0 w-0 h-0 -z-10" 
                  tabIndex={-1} 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Marca</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej. Dell, Ikea..."
                    value={formData.marca}
                    onChange={(e) => setFormData({...formData, marca: e.target.value})}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Modelo</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej. XPS 15..."
                    value={formData.modelo}
                    onChange={(e) => setFormData({...formData, modelo: e.target.value})}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción corta</label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Detalles adicionales sobre la categoría..."
                  value={formData.descripcion}
                  onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  disabled={isSaving}
                  className="bg-gima-blue hover:brightness-90 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all flex items-center justify-center min-w-[120px] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSaving ? <Loader2 size={18} className="animate-spin" /> : "Guardar datos"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ALERTA DE BORRADO */}
      <DeleteAlert
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        onConfirm={confirmDelete}
        title="¿Eliminar Activo?"
        description="Esta acción no se puede deshacer y el equipo será borrado del sistema."
      />
    </div>
    </AuthGuard>
  );
}