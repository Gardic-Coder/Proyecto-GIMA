"use client";

import React, { useState, useEffect } from 'react';
import { Box, Calendar, Clock, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FormularioRepuestos = ({ isOpen, onClose }: Props) => {
  const [formData, setFormData] = useState({
    nombre: "",
    stockActual: "",
    stockMinimo: "",
    costo: "",
    descripcion: "",
    proveedor: "",
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

  useEffect(() => {
    if (isOpen) {
      const ahora = new Date();
      setFormData(prev => ({
        ...prev,
        fechaRegistro: prev.fechaRegistro || formatearFecha(ahora),
        ultimaModificacion: formatearFechaHora(ahora)
      }));
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    if (!formData.nombre) {
      alert("Por favor, ingresa el nombre del repuesto");
      return;
    }

    // ===================================================
    // AQUÍ EL BACKEND DEBE PONER SU CONEXIÓN (API CALL) 
    // ===================================================
    console.log("Enviando datos al servidor...", formData);
    try {
      // Lógica de conexión aquí
      alert(`¡Repuesto "${formData.nombre}" procesado correctamente`);
      onClose();
    } catch (error) {
      alert("Error de conexión con el servidor.");
    }
    // ====================================================
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
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
              />
              <p className="text-xs text-gray-400 font-mono mt-1">ID: h12345</p>
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
                  value={formData.stockActual}
                  placeholder="0"
                  className="w-full text-center text-xl font-bold text-slate-700 outline-none"
                  onChange={handleChange}
                />
                <span className="text-[10px] text-gray-400 font-bold uppercase mt-1">unidades</span>
              </div>
              
              <div className="p-4 md:p-6 border-2 border-gray-200 rounded-[20px] md:rounded-[24px] bg-white flex flex-col items-center justify-center text-center shadow-sm">
                <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 tracking-wider">Stock Mínimo</label>
                <input 
                  name="stockMinimo"
                  type="number"
                  value={formData.stockMinimo}
                  placeholder="0"
                  className="w-full text-center text-xl font-bold text-slate-700 outline-none"
                  onChange={handleChange}
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
                    value={formData.costo}
                    placeholder="0.00"
                    className="w-full text-center text-xl font-bold text-slate-800 bg-transparent outline-none"
                    onChange={handleChange}
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
              />
            </div>

            {/* Grid ajustado: 1 columna en móvil, 2 en pantallas medianas en adelante */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-emerald-500 uppercase ml-2 md:ml-4 tracking-wider">PROVEEDOR PRINCIPAL</label>
                <input 
                  name="proveedor"
                  value={formData.proveedor}
                  className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-[16px] md:rounded-[20px] text-center text-gray-600 font-bold outline-none focus:border-emerald-500/30 transition-colors"
                  placeholder="---"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-emerald-500 uppercase ml-2 md:ml-4 tracking-wider">UBICACIÓN</label>
                <input 
                  name="ubicacion"
                  value={formData.ubicacion}
                  className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-[16px] md:rounded-[20px] text-center text-gray-600 font-bold outline-none focus:border-emerald-500/30 transition-colors"
                  placeholder="---"
                  onChange={handleChange}
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
            </div>

            <div className="flex gap-3 md:gap-4 pt-4">
              <button 
                type="button" 
                onClick={onClose} 
                className="flex-1 py-3 md:py-4 border-2 border-gray-200 rounded-full text-gray-400 font-bold text-[10px] uppercase hover:bg-gray-50 transition-all tracking-[0.1em] md:tracking-[0.2em]"
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="flex-1 py-3 md:py-4 bg-blue-600 text-white rounded-full font-bold text-[10px] uppercase hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all tracking-[0.1em] md:tracking-[0.2em]"
              >
                Guardar
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};