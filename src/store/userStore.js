import { create } from "zustand"
import {permisosValidos} from "../Utilities/functions"

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
        tipoUser:null,
    },

    permisos: {
        'permisosPrestadores': false,
        'permisosRrhh': false,
        'permisosPersonal': false,
        'permisosAdministradorTotal': false,
        'permisosAdministradorPersonal': false,
        'permisosOsAdmin': false
    },

    setUser: (user) => set((state) => ({ 
        user: user
    })),
        
    resetUser: () => {
        user = {
            id: null,
            name: null,
            admin: null,
            userName: null,
            ingreso: null,
            archivos: null,
            area: null,
            imagen: null,
            tipoUser:null,
            
        }
        localStorage.removeItem('user')
    },
    setPermisos: () => set(state=>({
        permisos: permisosValidos(state.user),

        })
    ),
    resetPermisos: () => set(state=>({
        permisos: {
            'permisosPrestadores': false,
            'permisosRrhh': false,
            'permisosPersonal': false,
            'permisosAdministradorTotal': false,
            'permisosAdministradorPersonal': false,
            'permisosOsAdmin': false
        }
    }))
}))