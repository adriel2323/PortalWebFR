import { create } from "zustand"

export const useAppStore = create((set) => ({
    url:"/",
    setUrl: (url) => set({ url }),
}))
