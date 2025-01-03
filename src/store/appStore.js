import { create } from "zustand"

export const useAppStore = create((set) => ({
    area:"",
    setArea: (area) => set({ area }),
    url:"/",
    setUrl: (url) => set({ url }),
    openSearch: false,
    setOpenSearch: (openSearch) => set({ openSearch }),
    listaResultados: [],
    setListaResultados: (listaResultados) => set({ listaResultados }),
    isLoad: false,
    setIsLoad: (isLoad) => set({ isLoad }),
    descripcion:"",
    setDescripcion: (descripcion) => set({ descripcion }),
    showSmall: false,
    setShowSmall: (showSmall) => set({ showSmall }),
    elementoEdicion: null,
    setElementoEdicion: (elementoEdicion) => set({ elementoEdicion }),
}))
