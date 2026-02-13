import UserTable from '@/components/user/UserTable';
import AuthGuard from '@/components/AuthGuard';

export default function GestionUsuariosPage(){
    return <AuthGuard roles={['admin']}><UserTable/></AuthGuard>;
}