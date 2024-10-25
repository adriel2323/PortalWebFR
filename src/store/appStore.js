import { create } from "zustand"
import { areas } from '../constantes/constantes'

export const useAppStore = create((set) => ({
    url:"/",
    setUrl: (url) => set({ url }),
}))
