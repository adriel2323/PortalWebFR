import { create } from "zustand"
import { areas } from '../constantes/constantes'

export const useAppStore = create((set) => ({
    areaApp: "paciente",
    setAreaApp: (areaApp) => set((state)=> ({
        areaApp: areas[areaApp]
    }))
}))
