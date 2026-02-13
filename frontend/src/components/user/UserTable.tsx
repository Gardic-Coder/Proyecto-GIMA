
'use client';

import { useState, useEffect, useMemo } from 'react';
import { User } from '@/types/user';
import UserRow from './UserRow';
import UserModal from './UserModal'; // Agregar esta importación
import { useAuth } from '@/context/AuthContext';
import { userService } from '@/services/userService';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { getIniciales } from '@/utils/formatters';
import DeleteAlerta from '@/components/ui/DeleteAlerta';

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

    // --- CARGA DE DATOS ---
    useEffect(() => {
        if (!currentUser?.token) return;

        userService.getAll(currentUser.token)
            .then(setUsers)
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, [currentUser]);

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
            // Llamada al servicio
            await userService.delete(currentUser.token, idParaEliminar);

            // Actualización optimista de la interfaz
            setUsers(prev => prev.filter(u => u.id !== idParaEliminar));
            
            // Cerramos modal y limpiamos estado
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
                // --- MODO EDICIÓN ---
                const resultado = await userService.update(
                    currentUser.token, 
                    usuarioEditando.id, 
                    userData
                );

                // Actualizamos el estado local buscando por ID
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
                // --- MODO CREACIÓN ---
                if (!currentUser?.token) return;
                
                setIsLoading(true); // Mostrar spinner mientras guarda
                const nuevoUsuarioBackend = await userService.create(currentUser.token, userData);
            
                // Adaptamos la respuesta del backend al formato de la lista local
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

        <div className="bg-gray-50">
            <div className="p-6">
                {/* Título y descripción */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Gestión de usuarios</h1>
                    <p className="text-gray-600">Administración de permisos y personal</p>
                </div>

                {/* Barra de búsqueda y botón */}
                <div className="flex justify-between items-center mb-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar usuario..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        {/* Icono de lupa (pueden instalar lucide-react después) */}
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            🔍
                        </div>
                    </div>

                    <button
                        onClick={abrirModalNuevo} // Agregar onClick aquí
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        + Nuevo usuario
                    </button>
                </div>

                {/* Tabla de usuarios */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead style={{ backgroundColor: "#F0FDFA" }}>
                        <tr>
                            <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                USUARIO
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-bold  uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                ROL/CARGO
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-bold  uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                DEPARTAMENTO
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                ESTADO
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-bold  uppercase tracking-wider" style={{ color: "#0B2545" }}>
                                ACCIÓN
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {usuariosFiltrados.map(user => (
                            <UserRow
                                key={user.id}
                                user={user}
                                onEliminar={() => solicitarEliminacion(user.id)} 
                                onEditar={() => abrirModalEditar(user)}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Agregar el modal aquí (sin cambiar estilos existentes) */}
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