
'use client';

import { useState, useEffect } from 'react';
import { User } from '@/types/user';
import UserRow from './UserRow';
import UserModal from './UserModal'; // Agregar esta importación
import { useAuth } from '@/context/AuthContext';

const getIniciales = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export default function UserTable() {
    const { user: currentUser } = useAuth(); // Obtenemos el token del contexto
    const [users, setUsers] = useState<User[]>([]); // Empezamos vacío
    const [isLoading, setIsLoading] = useState(true);
    // 1. ESTADO: Guardar la lista de usuarios

    // 2. ESTADO: Guardar el texto de búsqueda
    const [busqueda, setBusqueda] = useState('');

    // 3. ESTADO: Controlar modal (AGREGAR)
    const [modalAbierto, setModalAbierto] = useState(false);
    const [usuarioEditando, setUsuarioEditando] = useState<User | null>(null);

    // 4. FUNCIÓN: Eliminar usuario por ID
    const eliminarUsuario = (id: string) => {
        const nuevosUsuarios = users.filter(user => user.id !== id);
        setUsers(nuevosUsuarios);
    };

    // 5. FUNCIÓN: Abrir modal para nuevo usuario (AGREGAR)
    const abrirModalNuevo = () => {
        setUsuarioEditando(null);
        setModalAbierto(true);
    };

    // 6. FUNCIÓN: Abrir modal para editar usuario (AGREGAR)
    const abrirModalEditar = (user: User) => {
        setUsuarioEditando(user);
        setModalAbierto(true);
    };

    // 7. FUNCIÓN: Cerrar modal (AGREGAR)
    const cerrarModal = () => {
        setModalAbierto(false);
        setUsuarioEditando(null);
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

    // 9. FILTRAR usuarios según búsqueda (CORREGIR nombres de propiedades)
    const usuariosFiltrados = users.filter(user =>
        user.name.toLowerCase().includes(busqueda.toLowerCase()) ||
        user.email.toLowerCase().includes(busqueda.toLowerCase()) ||
        user.department.toLowerCase().includes(busqueda.toLowerCase())
    );

    useEffect(() => {
        const cargarUsuarios = async () => {
            if (!currentUser?.token) return;

            try {
                const response = await fetch("http://localhost:8000/api/admin/users?page=2&per_page=5", {
                    headers: {
                        "Authorization": `Bearer ${currentUser.token}`,
                        "Accept": "application/json",
                    },
                });

                if (response.ok) {
                    const result = await response.json();
        
                    // TRANSFORMACIÓN: Adaptamos el formato backend al formato frontend
                    const usuariosAdaptados: User[] = result.data.map((u: any) => ({
                        id: u.id.toString(),
                        iniciales: getIniciales(u.name),
                        name: u.name,
                        email: u.email,
                        rol: u.roles[0] || 'Sin rol', // Tomamos el primer rol del array
                        department: 'N/A', // Campo pendiente en backend
                        status: u.estado // Mapeo de estados
                    }));

                    setUsers(usuariosAdaptados);
                }
            } catch (error) {
                console.error("Error cargando usuarios:", error);
            } finally {
                setIsLoading(false);
            }
        };

        cargarUsuarios();
    }, [currentUser]);

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