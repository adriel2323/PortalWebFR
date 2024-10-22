import { create } from "zustand";

export const usePersonalStore= create((set) => ({
    perfil: {},
    setPerfil: (perfil) => set({ perfil }),
}))