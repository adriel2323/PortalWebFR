import { create } from "zustand"
import {permisosValidos} from "../Utilities/functions"

export const useUserStore = create((set) => ({
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : 
    {
        id: null,
        name: null,
        admin: null,
        userName: null,
        ingreso: null,
        archivos: null,
        area: null,
        imagen: null,
        tipoUser:null,
        permisos:{}
    },
    setUser: (user) => set((state) => ({ 
        user: {...user, permisos: permisosValidos(user)}
    })),
    resetUser: () => {
        localStorage.removeItem('user');
        set({
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
                permisos:{}
            },
        });
    },
}))