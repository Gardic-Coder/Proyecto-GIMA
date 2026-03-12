"use client";

import React, { useState, useEffect } from 'react';
import { Box, Calendar, Clock, X, Loader2, ChevronDown } from 'lucide-react';
import { useAuth } from "@/context/AuthContext";
import { repuestosService } from "@/services/repuestoService";
import { proveedorService } from "@/services/proveedorService"; // Asegúrate de crear este servicio

interface Props {
  isOpen: boolean;
  repuestoToEdit?: any; 
  onClose: () => void;
}

export const FormularioRepuestos = ({ isOpen, repuestoToEdit, onClose }: Props) => {
  const { user } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [proveedores, setProveedores] = useState<any[]>([]);
  const [isLoadingProveedores, setIsLoadingProveedores] = useState(false);

  const [formData, setFormData] = useState({
    id: null as number | null,
    codigo: "", 
    nombre: "", 
    stockActual: "", 
    stockMinimo: "", 
    costo: "",
    descripcion: "", 
    proveedor_id: "", // Usaremos ID numérico para Laravel
    ubicacion: "", 
    fechaRegistro: "",
    ultimaModificacion: ""
  });

  const formatearFecha = (date: Date) => 
    new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);

  const formatearFechaHora = (date: Date) => 
    new Intl.DateTimeFormat('es-ES', { 
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit' 
    }).format(date);

  // 1. CARGAR PROVEEDORES DESDE EL BACKEND
  useEffect(() => {
    if (isOpen && user?.token) {
      const fetchProveedores = async () => {
        setIsLoadingProveedores(true);
        try {
          const res = await proveedorService.getAll(user.token);
          // Si tu backend usa paginación, los datos están en res.data
          setProveedores(res.data || res || []);
        } catch (error) {
          console.error("Error cargando proveedores:", error);
        } finally {
          setIsLoadingProveedores(false);
        }
      };
      fetchProveedores();
    }
  }, [isOpen, user?.token]);

  // 2. RELLENAR FORMULARIO (EDICIÓN O CREACIÓN)
  useEffect(() => {
    if (isOpen) {
      const ahora = new Date();
      if (repuestoToEdit) {
        setFormData({
          id: repuestoToEdit.id,
          codigo: repuestoToEdit.codigo || "",
          nombre: repuestoToEdit.descripcion || repuestoToEdit.nombre || "", 
          stockActual: repuestoToEdit.stock || "",
          stockMinimo: repuestoToEdit.stock_minimo || "", 
          costo: repuestoToEdit.costo || "",
          descripcion: "", 
          proveedor_id: repuestoToEdit.proveedor_id || "", // Importante para que el select marque el actual
          ubicacion: repuestoToEdit.direccion?.nombre || repuestoToEdit.direccion?.ubicacion || "",
          fechaRegistro: repuestoToEdit.created_at ? formatearFecha(new Date(repuestoToEdit.created_at)) : formatearFecha(ahora),
          ultimaModificacion: formatearFechaHora(ahora)
        });
      } else {
        setFormData({
          id: null,
          codigo: "",
          nombre: "",
          stockActual: "",
          stockMinimo: "",
          costo: "",
          descripcion: "",
          proveedor_id: "",
          ubicacion: "",
          fechaRegistro: formatearFecha(ahora),
          ultimaModificacion: formatearFechaHora(ahora)
        });
      }
    }
  }, [isOpen, repuestoToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const ahora = new Date();
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      ultimaModificacion: formatearFechaHora(ahora)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.proveedor_id) {
      alert("Por favor, completa el nombre y selecciona un proveedor");
      return;
    }
    if (!user?.token) return;

    setIsSaving(true);

    try {
      const dataToSend = {
          descripcion: formData.nombre,       
          codigo: formData.codigo,            
          costo: Number(formData.costo) || 0, 
          stock: Number(formData.stockActual) || 0, 
          stock_minimo: Number(formData.stockMinimo) || 0, 
          proveedor_id: Number(formData.proveedor_id), // Enviamos el ID real seleccionado
          direccion_id: null, 
      };

      if (formData.id) {
          await repuestosService.update(user.token, formData.id, dataToSend);
      } else {
          await repuestosService.create(user.token, dataToSend);
      }
      
      onClose();
    } catch (error: any) {
      console.error("Error al guardar:", error);
      alert(error.message || "Error al procesar la solicitud.");
    } finally {
        setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={!isSaving ? onClose : undefined} />
      {/* Contenedor del Modal: Añadido max-h-[90vh] y overflow-y-auto para scroll en móviles */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-[30px] md:rounded-[40px] shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Botón de cerrar fijo arriba a la derecha */}
        <button onClick={onClose} className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white rounded-full p-1 md:bg-transparent">
          <X size={24} />
        </button>

        {/* Ajuste de padding: p-6 en móvil, p-12 en PC */}
        <div className="p-6 pt-12 md:p-12 md:pt-12">
          
          {/* Cabecera */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
            <div className="p-3 border-2 rounded-2xl border-gray-200 shadow-sm bg-white shrink-0 hidden sm:block">
              <Box className="w-8 h-8 text-emerald-500" />
            </div>
            <div className="flex-1 w-full">
              <input 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre de repuesto"
                className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight w-full outline-none placeholder:text-gray-300"
                disabled={isSaving}
              />
              <p className="text-xs text-gray-400 font-mono mt-1">
                {formData.id ? `ID: ${formData.id}` : 'Nuevo Repuesto'}
              </p>
            </div>
          </div>

          <hr className="my-6 md:my-8 border-gray-200" />

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Grid ajustado: 1 columna en móvil, 3 en PC */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="p-4 md:p-6 border-2 border-gray-200 rounded-[20px] md:rounded-[24px] bg-white flex flex-col items-center justify-center text-center shadow-sm">
                <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 tracking-wider">Stock Actual</label>
                <input 
                  name="stockActual"
                  type="number"
                  min="0"
                  value={formData.stockActual}
                  placeholder="0"
                  className="w-full text-center text-xl font-bold text-slate-700 outline-none bg-transparent"
                  onChange={handleChange}
                  disabled={isSaving}
                />
                <span className="text-[10px] text-gray-400 font-bold uppercase mt-1">unidades</span>
              </div>
              
              <div className="p-4 md:p-6 border-2 border-gray-200 rounded-[20px] md:rounded-[24px] bg-white flex flex-col items-center justify-center text-center shadow-sm">
                <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 tracking-wider">Stock Mínimo</label>
                <input 
                  name="stockMinimo"
                  type="number"
                  min="0"
                  value={formData.stockMinimo}
                  placeholder="0"
                  className="w-full text-center text-xl font-bold text-slate-700 outline-none bg-transparent"
                  onChange={handleChange}
                  disabled={isSaving}
                />
                <span className="text-[10px] text-gray-400 font-bold uppercase mt-1">unidades</span>
              </div>
              
              <div className="p-4 md:p-6 border-2 border-cyan-100 rounded-[20px] md:rounded-[24px] bg-cyan-50/20 flex flex-col items-center justify-center text-center shadow-sm">
                <label className="text-[10px] font-bold text-cyan-600 uppercase mb-2 tracking-wider">Costo Unitario</label>
                <div className="flex items-center">
                   <span className="text-xl font-bold text-slate-800 mr-1">$</span>
                   <input 
                    name="costo"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.costo}
                    placeholder="0.00"
                    className="w-full text-center text-xl font-bold text-slate-800 bg-transparent outline-none"
                    onChange={handleChange}
                    disabled={isSaving}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase ml-2 tracking-wider">Descripción Técnica</label>
              <textarea 
                name="descripcion"
                value={formData.descripcion}
                placeholder="Rodamiento de Bolas de Alta Precisión - Serie 6200"
                className="w-full p-4 md:p-6 border-2 border-gray-200 rounded-[20px] md:rounded-[24px] min-h-[100px] md:min-h-[120px] text-gray-600 text-sm outline-none bg-slate-50/30 focus:border-emerald-500/30 transition-colors"
                onChange={handleChange}
                disabled={isSaving}
              />
            </div>

            <grid className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* SELECT DE PROVEEDORES DINÁMICO */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-emerald-500 uppercase ml-2 md:ml-4 tracking-wider">PROVEEDOR PRINCIPAL</label>
                <div className="relative">
                  <select 
                    name="proveedor_id"
                    value={formData.proveedor_id}
                    onChange={handleChange}
                    disabled={isSaving || isLoadingProveedores}
                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-[16px] md:rounded-[20px] text-center text-gray-600 font-bold outline-none focus:border-emerald-500/30 transition-colors"
                  >
                    <option value="" disabled>-- Seleccione Proveedor --</option>
                    {proveedores.map((p: any) => (
                      <option key={p.id} value={p.id}>{p.nombre}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-emerald-500 uppercase ml-2 md:ml-4 tracking-wider">UBICACIÓN</label>
                <input 
                  name="ubicacion"
                  value={formData.ubicacion}
                  className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-[16px] md:rounded-[20px] text-center text-gray-600 font-bold outline-none focus:border-emerald-500/30 transition-colors"
                  placeholder="---"
                  onChange={handleChange}
                  disabled={isSaving}
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {/* Fechas: flex-col en móvil para que el texto no se aplaste, flex-row en PC */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border-2 border-gray-100 rounded-2xl bg-white gap-2 sm:gap-0">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.15em]">FECHA DE REGISTRO</span>
                </div>

                <span className="text-sm font-bold text-slate-400 tracking-tight sm:text-right pl-7 sm:pl-0">{formData.fechaRegistro || "DD/M/AAAA"}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border-2 border-gray-100 rounded-2xl bg-white gap-2 sm:gap-0">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.15em]">ÚLTIMA MODIFICACIÓN</span>
                </div>

                <span className="text-sm font-bold text-slate-400 tracking-tight sm:text-right pl-7 sm:pl-0">{formData.ultimaModificacion || "DD/MM/AAA 00:00:00"}</span>

            </div>

            <div className="flex gap-3 md:gap-4 pt-4">
              <button 
                type="button" 
                onClick={onClose} 
                disabled={isSaving}
                className="flex-1 py-3 md:py-4 border-2 border-gray-200 rounded-full text-gray-400 font-bold text-[10px] uppercase hover:bg-gray-50 transition-all tracking-[0.1em] md:tracking-[0.2em]"
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                disabled={isSaving}
                className="flex-1 py-3 md:py-4 bg-blue-600 text-white rounded-full font-bold text-[10px] uppercase hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all tracking-[0.1em] md:tracking-[0.2em]"

              >
                {isSaving ? <Loader2 size={16} className="animate-spin" /> : null}
                {isSaving ? "Guardando..." : "Guardar"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};