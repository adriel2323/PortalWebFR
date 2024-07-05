import {create} from 'zustand';

const permisosStore= create((set) => ({
        permisos: [],
        setPermisos: (permisos) => set({permisos}),
    }));
    
    export default permisosStore