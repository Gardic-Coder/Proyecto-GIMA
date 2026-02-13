
'use client';

import { useState, useEffect, useMemo } from 'react';
import { User } from '@/types/user';
import UserRow from './UserRow';
import UserModal from './UserModal'; // Agregar esta importación
import { useAuth } from '@/context/AuthContext';
import { userService } from '@/services/userService';

export default function UserTable() {
    const { user: currentUser } = useAuth();
    
    // --- ESTADOS DE DATOS ---
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [busqueda, setBusqueda] = useState('');
    
    // --- ESTADOS DE UI (Modales) ---
    const [modalAbierto, setModalAbierto] = useState(false);
    const [usuarioEditando, setUsuarioEditando] = useState<User | null>(null);

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

    const eliminarUsuario = async (id: string) => {
        // Aquí llamarás a userService.delete(id) pronto...
        setUsers(prev => prev.filter(u => u.id !== id));

    // 4. FUNCIÓN: Eliminar usuario por ID
    /*const eliminarUsuario = (id: string) => {
        const nuevosUsuarios = users.filter(user => user.id !== id);
        setUsers(nuevosUsuarios);*/
    };

    // 8. FUNCIÓN: Guardar usuario (AGREGAR)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const guardarUsuario = (userData: any) => {
        if (usuarioEditando) {
            // Modo edición: actualizar usuario existente
            setUsers(users.map(u =>
                u.id === usuarioEditando.id
                    ? { ...userData, id: usuarioEditando.id }
                    : u
            ));
        } else {
            // Modo creación: agregar nuevo usuario
            const nuevoUsuario: User = {
                ...userData,
                id: Date.now().toString(), // ID temporal
            };
            setUsers([...users, nuevoUsuario]);
        }
        cerrarModal();
    };

    if (isLoading) return <div className="text-center p-10">Cargando usuarios...</div>;

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
                                onEliminar={eliminarUsuario}
                                onEditar={abrirModalEditar} // Pasar función de editar
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
            </div>
        </div>
    );
}