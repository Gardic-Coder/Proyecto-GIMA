"use client";

import React from "react";
import Link from "next/link";
import {
  Settings,
  LayoutDashboard,
  Wrench,
  Bell,
  User,
  Search,
  Globe,
} from "lucide-react";
import AuthGuard from "@/components/AuthGuard";

interface ConfigCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href?: string;
}
        {/* Configuración de las cards */}
const ConfigCard: React.FC<ConfigCardProps> = ({ title, desc, icon, href }) => {
  const cardContent = (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition cursor-pointer flex gap-4 items-start h-full">
      <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-slate-700 shrink-0">
        {icon}
      </div>
      {/* Texto */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>

    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default function ConfiguracionPage() {
  return (
    <AuthGuard roleRequired={["admin"]}>
    <section className="p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-6 md:mb-8">
        <h1 className="text-2xl font-bold text-black">Configuración</h1>
        {/*
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full pl-10 pr-4 py-2 rounded-full border bg-white outline-none focus:border-gray-300 transition-colors"
          />
          
        </div>
        */}
      </div>

      {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-10xl">

  <ConfigCard
    title="Historial de usuarios"
    desc="Registros de actividad"
    icon={<User size={24} className="text-red-500" />}
    href="/configuracion/historial"
  />

  <ConfigCard
    title="Gestión de usuarios"
    desc="Administrar accesos, roles y permisos del personal"
   icon={<User size={24} className="text-blue-500" />}
    href="/configuracion/User"
  />
  {/*
  <ConfigCard
    title="Ubicaciones"
    desc="Gestionar ubicaciones"
    icon={<Globe size={24} className="text-red-500" />}
    href="/configuracion/ubicaciones"
  />
  */}
  <ConfigCard
    title="Gestión de repuestos"
    desc="Administrar materiales y herramientas"
    icon={<Wrench size={24} className="text-gray-500" />}
    href="/configuracion/repuestos"
  />
  </div> 
      </section>
    </AuthGuard>
  );
}