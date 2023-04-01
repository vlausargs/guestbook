import { useEffect, useState } from 'react'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const emptyState = (set, get) => ({
    user: null,
    token: null,
    setUser: async (userData) => {
        set({ user: { ...userData } })
    },
    setToken: async (tokenData) => {
        set({ token: tokenData })
    },
    clearData: async () => set({ user: null, token: null }),
})

const usePersistedStore = create(
    persist(emptyState, {
        name: 'auth-storage',
        storage: createJSONStorage(() => sessionStorage),
    })
)

export const useAuthStore = (selector, compare) => {
    /*
  This a fix to ensure zustand never hydrates the store before React hydrates the page.
  Without this, there is a mismatch between SSR/SSG and client side on first draw which produces
  an error.
   */
    const store = usePersistedStore(selector, compare)
    const [isHydrated, setHydrated] = useState(false)
    useEffect(() => setHydrated(true), [])
    return isHydrated ? store : selector(emptyState)
}
