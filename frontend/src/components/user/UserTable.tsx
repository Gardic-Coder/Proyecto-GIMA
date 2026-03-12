'use client';

import { useState, useEffect, useMemo } from 'react';
import { User } from '@/types/user';
import UserRow from './UserRow';
import UserModal from './UserModal'; 
import { useAuth } from '@/context/AuthContext';
import { userService } from '@/services/userService';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { getIniciales } from '@/utils/formatters';
import DeleteAlerta from '@/components/ui/DeleteAlerta';
import Pagination from '@/components/ui/Paginacion';
import Link from 'next/link'; // IMPORTACIÓN DEL LINK AÑADIDA
import { Pencil, Trash2, ChevronLeft } from 'lucide-react'; // IMPORTACIÓN DEL ICONO AÑADIDA

export default function UserTable() {
    const { user: currentUser } = useAuth();
    
    // --- ESTADOS DE DATOS ---
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [busqueda, setBusqueda] = useState('');
    
    // --- ESTADOS DE UI (Modales) ---
    const [modalAbierto, setModalAbierto] = useState(false);
    const [usuarioEditando, setUsuarioEditando] = useState<User | null>(null);

    // --- ESTADOS PARA ELIMINACIÓN ---
    const [alertAbierta, setAlertAbierta] = useState(false);
    const [idParaEliminar, setIdParaEliminar] = useState<string | null>(null);

    // --- ESTADOS DE PAGINACIÓN (Con memoria de LocalStorage) ---
    const [porPagina, setPorPagina] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            const guardado = localStorage.getItem('gima_usuarios_per_page');
            return guardado ? parseInt(guardado) : 15;
        }
        return 15;
    });

    const [paginaActual, setPaginaActual] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            const guardado = localStorage.getItem('gima_usuarios_page');
            return guardado ? parseInt(guardado) : 1;
        }
        return 1;
    });

    const [totalPaginas, setTotalPaginas] = useState(1);

    // --- GUARDAR EN MEMORIA CADA VEZ QUE CAMBIAN ---
    useEffect(() => {
        localStorage.setItem('gima_usuarios_per_page', porPagina.toString());
    }, [porPagina]);

    useEffect(() => {
        localStorage.setItem('gima_usuarios_page', paginaActual.toString());
    }, [paginaActual]);

    // --- CARGA DE DATOS ---
    useEffect(() => {
        if (!currentUser?.token) return;

        const temporizador = setTimeout(() => {
            setIsLoading(true);
            
            userService.getAll(currentUser.token, paginaActual, porPagina, busqueda)
                .then((resultado) => {
                    setUsers(resultado.usuarios);
                    setTotalPaginas(resultado.meta.last_page); 
                })
                .catch(err => console.error(err))
                .finally(() => setIsLoading(false));

        }, 500); 

        return () => clearTimeout(temporizador);

    }, [currentUser, busqueda, paginaActual, porPagina]); 

    // --- LÓGICA DE FILTRADO (Memoizada para rendimiento) ---
    const usuariosFiltrados = useMemo(() => {
        const query = busqueda.toLowerCase();
        return users.filter(u => 
            u.name.toLowerCase().includes(query) || 
            u.email.toLowerCase().includes(query)
        );
    }, [users, busqueda]);

    // --- MANEJADORES DE EVENTOS ---
    const abrirModalNuevo = () => { setUsuarioEditando(null); setModalAbierto(true); };
    const abrirModalEditar = (user: User) => { setUsuarioEditando(user); setModalAbierto(true); };
    const cerrarModal = () => { setModalAbierto(false); setUsuarioEditando(null); };

    const solicitarEliminacion = (id: string) => {
        setIdParaEliminar(id);
        setAlertAbierta(true);
    };

    const confirmarEliminacion = async () => {
        if (!idParaEliminar || !currentUser?.token) return;

        try {
            await userService.delete(currentUser.token, idParaEliminar);
            setUsers(prev => prev.filter(u => u.id !== idParaEliminar));
            cerrarAlert();
        } catch (error: any) {
            alert(error.message || "No se pudo eliminar el usuario");
        }
    };

    const cerrarAlert = () => {
        setAlertAbierta(false);
        setIdParaEliminar(null);
    };

    const guardarUsuario = async (userData: any) => {
        try {
            if (usuarioEditando) {
                const resultado = await userService.update(
                    currentUser.token, 
                    usuarioEditando.id, 
                    userData
                );

                setUsers(prev => prev.map(u => 
                    u.id === usuarioEditando.id 
                    ? {
                        ...u,
                        name: resultado.data.name,
                        email: resultado.data.email,
                        iniciales: getIniciales(resultado.data.name),
                        rol: resultado.data.roles[0] || 'Sin rol',
                        status: resultado.data.estado,
                    }
                    : u
                ));
                alert("Usuario actualizado correctamente");
            } else {
                if (!currentUser?.token) return;
                
                setIsLoading(true); 
                const nuevoUsuarioBackend = await userService.create(currentUser.token, userData);
            
                const usuarioParaLista: User = {
                    id: nuevoUsuarioBackend.data.id.toString(),
                    name: nuevoUsuarioBackend.data.name,
                    email: nuevoUsuarioBackend.data.email,
                    iniciales: getIniciales(nuevoUsuarioBackend.data.name),
                    rol: nuevoUsuarioBackend.data.roles[0] || 'Sin rol',
                    department: 'N/A',
                    status: nuevoUsuarioBackend.data.estado,
                };

                setUsers(prev => [...prev, usuarioParaLista]);
                alert("Usuario creado exitosamente");
            }
            cerrarModal();
        } catch (error: any) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <LoadingSpinner />;

    return (

        <div className="bg-gray-50 min-h-screen">
            <div className="p-4 md:p-6">
                
                {/* titulo, descripcion */}
                <div className="mb-6 md:mb-8 flex flex-col items-start">
                    <h1 className="text-2xl font-bold text-gray-900">Gestión de usuarios</h1>
                    <p className="text-gray-600 mb-4">Administración de permisos y personal</p>
                    
                    {/* BOTON VOLVER A CONFIG */}
                    <Link 
                        href="/configuracion" 
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0d2344] transition-colors group"
                    >
                        <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-200 group-hover:bg-slate-50 transition-colors">
                            <ChevronLeft size={16} />
                        </div>
                        <span className="text-sm font-medium">Volver a configuración</span>
                    </Link>
                </div>

                {/* barra de busqueda y boton adaptados para responsivo */}
                <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6">
                    <div className="relative w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Buscar usuario..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            🔍
                        </div>
                    </div>

                    <button
                        onClick={abrirModalNuevo}
                        className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                    >
                        + Nuevo usuario
                    </button>
                </div>

                {/* contenedor principal de la data */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    
                    {/* VISTA ESCRITORIO (md:block) */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead style={{ backgroundColor: "#F0FDFA" }}>
                            <tr>
                                <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                    USUARIO
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                    ROL/CARGO
                                </th>
                                {/*
                                <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                    DEPARTAMENTO
                                </th>
                                */}
                                <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                    ESTADO
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                    ACCIÓN
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {users.length > 0 ? (
                                users.map(user => (
                                    <UserRow
                                        key={user.id}
                                        user={user}
                                        onEliminar={() => solicitarEliminacion(user.id)}
                                        onEditar={() => abrirModalEditar(user)}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center py-8 text-gray-500">
                                        No se encontraron usuarios para "{busqueda}"
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* VISTA TLFN (block md:hidden) - TARJETAS */}
                    <div className="block md:hidden bg-slate-50/50 p-4 space-y-4">
                        {users.length > 0 ? (
                            users.map(user => (
                                <div key={user.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 space-y-4">
                                    
                                    {/* header de la tarjeta: Info usuario y Estado */}
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="flex items-center gap-3 min-w-0">
                                            {/* Circulo con Iniciales */}
                                            <div className="w-10 h-10 rounded-full bg-[#F0FDFA] border border-teal-100 text-[#0B2545] flex items-center justify-center font-bold text-sm shrink-0">
                                                {user.iniciales || (user.name ? user.name.charAt(0).toUpperCase() : 'U')}
                                            </div>
                                            <div className="truncate">
                                                <h3 className="font-bold text-[#0B2545] text-sm leading-tight truncate">{user.name}</h3>
                                                <p className="text-xs text-slate-500 mt-0.5 truncate">{user.email}</p>
                                            </div>
                                        </div>
                                        {/* Estado con tamaño máximo y truncado inteligente para evitar desbordes */}
                                        <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md border shrink-0 max-w-[80px] truncate text-center ${
                                            (user.status || '').toLowerCase() === 'activo' 
                                            ? 'bg-green-50 text-green-700 border-green-200' 
                                            : 'bg-red-50 text-red-700 border-red-200'
                                        }`} title={user.status || 'N/A'}>
                                            {user.status || 'N/A'}
                                        </span>
                                    </div>
                                    
                                    {/* Detalles: Rol y Depto */}
                                    <div className="grid grid-cols-2 gap-3 text-sm bg-slate-50 rounded-xl p-3">
                                        <div className="min-w-0">
                                            <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Rol / Cargo</span>
                                            <span className="font-semibold text-slate-700 capitalize truncate block">{user.rol || 'N/A'}</span>
                                        </div>
                                        {/*
                                        <div className="min-w-0">
                                            <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Departamento</span>
                                            <span className="font-semibold text-slate-700 truncate block">{user.department || 'N/A'}</span>
                                        </div>
                                        */}
                                    </div>

                                    {/* botones de accion */}
                                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                                        <button 
                                            onClick={() => abrirModalEditar(user)}
                                            className="flex items-center gap-1.5 text-xs text-blue-600 font-bold px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                                        >
                                            <Pencil size={14} /> Editar
                                        </button>
                                        <button 
                                            onClick={() => solicitarEliminacion(user.id)}
                                            className="flex items-center gap-1.5 text-xs text-red-600 font-bold px-3 py-2 rounded-lg hover:bg-red-50 transition-colors"
                                        >
                                            <Trash2 size={14} /> Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                                <p className="text-sm font-medium">No se encontraron usuarios para "{busqueda}"</p>
                            </div>
                        )}
                    </div>

                    {/* PAGINACION */}
                    <div className="border-t border-gray-200 bg-white">
                        <Pagination 
                            paginaActual={paginaActual}
                            totalPaginas={totalPaginas}
                            porPagina={porPagina}
                            onPageChange={(nuevaPagina) => setPaginaActual(nuevaPagina)}
                            onPerPageChange={(nuevoPorPagina) => {
                                setPorPagina(nuevoPorPagina);
                                setPaginaActual(1); 
                            }}
                        />
                    </div>
                </div>

                {/* modales */}
                <UserModal
                    isOpen={modalAbierto}
                    onClose={cerrarModal}
                    onSave={guardarUsuario}
                    user={usuarioEditando}
                />

                <DeleteAlerta
                    isOpen={alertAbierta}
                    onClose={cerrarAlert}
                    onConfirm={confirmarEliminacion}
                    title="¿Eliminar usuario?"
                    description="Esta acción no se puede deshacer. El usuario perderá acceso al sistema permanentemente."
                />
            </div>
        </div>
    );
}