import { create } from "zustand"

export const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => {
        userStore.user = user
        localStorage.setItem('user', JSON.stringify(user))
    },
    getUser: ( ) => userStore.user,
    resetUser: () => {
        userStore.user = null
        localStorage.removeItem('user')
    }
    })
)