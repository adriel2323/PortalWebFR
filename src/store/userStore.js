import { create } from "zustand"

export const useUserStore = create((set) => ({
    user: {
        id: null,
        name: null,
        admin: null,
        userName: null,
        ingreso: null,
        archivos: null,
        area: null,
        imagen: null,
        permisos: null,
    },
    setUser: (user) => {
        useUserStore.user = user
        localStorage.setItem('user', JSON.stringify(user))
    },
    resetUser: () => {
        useUserStore.user = {
            id: null,
            name: null,
            admin: null,
            userName: null,
            ingreso: null,
            archivos: null,
            area: null,
            imagen: null,
            permisos: {
                'permisosPrestadores': false,
                'permisosRrhh': false,
                'permisosPersonal': false,
                'permisosAdministradorTotal': false,
                'permisosAdministradorPersonal': false,
                'permisosOsAdmin': false
            },
        }
        localStorage.removeItem('user')
    },
    setPermisosUser: (permisos) => {

        if(usuario.tipoUser===1){
            useUserStore.user.permisos.permisosAdministradorTotal(true);
            useUserStore.user.permisos.permisosAdministradorPersonal(true);
            useUserStore.user.permisos.permisosPrestadores(true);
            useUserStore.user.permisos.permisosRrhh(true);
            useUserStore.user.permisos.permisosPersonal(true);
            useUserStore.user.permisos.permisosOsAdmin(true);
        }
        else if(usuario.tipoUser===2){
            useUserStore.user.permisos.permisosAdministradorPersonal(true);
            useUserStore.user.permisos.permisosPrestadores(true);
            useUserStore.user.permisos.permisosRrhh(true);
            useUserStore.user.permisos.permisosPersonal(true);
        }
        else if(usuario.tipoUser===3){
            useUserStore.user.permisos.permisosRrhh(true);
        }
        else if(usuario.tipoUser===4){
            useUserStore.user.permisos.permisosPersonal(true);
        } else if (usuario.tipoUser===5){
            useUserStore.user.permisos.permisosOsAdmin(true);
        }

        useUserStore.user.permisos = permisos
        localStorage.setItem('user', JSON.stringify(userStore.user))
    }
    })
)