import { create } from "zustand"
import {permisosValidos, usuarioLocalStorage} from "../Utilities/functions"

export const useUserStore = create((set) => ({
    user: usuarioLocalStorage()? {...JSON.parse(localStorage.getItem('user')), permisos: permisosValidos(JSON.parse(localStorage.getItem('user'))) } : 
    {
        id: null,
        isLogin:false,
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
    setUser: (user) => {
        
        set((state) => ({ 
        user: {...user,isLogin:true, permisos: permisosValidos(user)}
        }));
        localStorage.setItem('user', JSON.stringify({...user,isLogin:true, permisos: permisosValidos(user)}));
},
    resetUser: () => {
        localStorage.clear();
        set({
            user: {
                id: null,
                isLogin:false,
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