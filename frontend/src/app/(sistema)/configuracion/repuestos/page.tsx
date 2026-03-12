"use client"
import { useState } from "react";
import { FormularioRepuestos } from "./FormularioRepuestos";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Plus, ChevronLeft, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function RepuestosPage() {
  // Estado para controlar la apertura del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Arreglo de datos simulados (mock data)
  const repuestos = [
    { codigo: "LC-001", descripcion: "Memoria RAM 16GB DDR4", categoria: "Computo", ubicacion: "Almacen", stock: "15" },
    { codigo: "LC-001", descripcion: "Memoria RAM 16GB DDR4", categoria: "Computo", ubicacion: "Almacen", stock: "15" },
    { codigo: "LC-001", descripcion: "Memoria RAM 16GB DDR4", categoria: "Computo", ubicacion: "Almacen", stock: "15" },
  ];

  return (
    // Contenedor principal
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

        {/* ================= CABECERA (Totalmente afuera de la caja) ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gima-navy font-microgramma uppercase">
              Gestión de repuestos
            </h3>
            <p className="text-gray-400 text-sm font-archivo">
              Control de stock, partes y consumibles
            </p>
          </div>

          {/* BOTÓN NUEVO REPUESTO */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto justify-center bg-[#0d6efd] text-white px-6 py-3.5 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md font-bold text-sm uppercase tracking-wide"
          >
            <Plus size={20} strokeWidth={3} />
            Nuevo repuesto
          </button>
        </div>

        {/* ================= CONTENEDOR PRINCIPAL (Solo para la Tabla) ================= */}
        <div className="bg-transparent md:bg-white md:rounded-[40px] md:shadow-sm md:border md:border-gray-50 overflow-hidden">
          <div className="md:p-10 overflow-hidden">
            <div className="w-full overflow-x-auto pb-4 md:pb-0">
              <div className="md:min-w-[900px]">

                {/* CABECERA DE LA TABLA (Oculta en móvil) */}
                <div className="hidden md:grid grid-cols-6 bg-[#DAFAFE] p-4 md:p-6 rounded-t-2xl md:rounded-t-[30px] text-gima-navy font-microgramma font-bold text-[10px] uppercase tracking-[0.2em]">
                  <span>Código</span>
                  <span>Descripción</span>
                  <span>Categoría</span>
                  <span>Ubicación</span>
                  <span>Stock</span>
                  <span className="text-center">Acciones</span>
                </div>

                {/* CUERPO DE LA TABLA / CONTENEDOR DE TARJETAS */}
                <div className="space-y-4 md:space-y-0 md:border-x md:border-b md:border-gray-100 md:rounded-b-[30px] md:overflow-hidden font-archivo">
                  {/* Iteración sobre el arreglo de repuestos */}
                  {repuestos.map((loc, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm md:grid md:grid-cols-6 md:items-center md:gap-0 md:p-6 md:rounded-none md:border-0 md:border-b md:border-gray-50 md:shadow-none md:last:border-0 md:hover:bg-gray-50/50"
                    >
                      {/* Fila superior en móvil: Descripción, Código y Categoría */}
                      <div className="flex justify-between items-start md:contents">
                        <div className="flex flex-col md:contents">
                          <span className="text-xs md:text-sm text-gray-400 font-medium order-2 md:order-1 mt-1 md:mt-0">
                            {loc.codigo}
                          </span>
                          <span className="text-base md:text-sm font-bold text-gima-navy pr-2 order-1 md:order-2">
                            {loc.descripcion}
                          </span>
                        </div>
                        
                        <div className="md:order-3">
                          <span className="bg-[#E3F2FD] text-gima-navy px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] font-bold">
                            {loc.categoria}
                          </span>
                        </div>
                      </div>

                      {/* Ubicación, Stock y Acciones */}
                      <div className="flex flex-col gap-3 mt-2 md:mt-0 md:contents border-t border-gray-50 pt-3 md:border-0 md:pt-0">
                        <div className="flex justify-between items-center md:contents">
                          <span className="text-sm text-gray-500 pr-2 md:order-4">
                            {loc.ubicacion}
                          </span>
                          
                          <span className="text-sm font-bold text-gima-navy md:order-5">
                            {/* La palabra Stock solo se ve en móvil para dar contexto */}
                            <span className="md:hidden text-xs text-gray-400 font-normal mr-1">Stock:</span>
                            {loc.stock}
                          </span>
                        </div>

                        {/* BOTONES DE ACCIÓN */}
                        <div className="flex justify-end gap-2 md:justify-center md:gap-3 md:order-6 border-t border-gray-50 pt-3 md:border-0 md:pt-0">
                          {/* Editar */}
                          <button className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-2 border border-emerald-100 md:border-0">
                            <Pencil size={16} className="md:w-[18px] md:h-[18px]" />
                            <span className="text-xs font-semibold md:hidden">Editar</span>
                          </button>

                          {/* Eliminar */}
                          <button className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2 border border-red-100 md:border-0">
                            <Trash2 size={16} className="md:w-[18px] md:h-[18px]" />
                            <span className="text-xs font-semibold md:hidden">Eliminar</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* MODAL (Intacto) */}
      <FormularioRepuestos isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}