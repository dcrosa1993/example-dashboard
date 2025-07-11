import create from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: string
  name: string
  email: string
  companyId?: string
}

export interface Company {
  id: string
  name: string
}

interface AppState {
  users: User[]
  companies: Company[]
  addUser: (u: User) => void
  updateUser: (u: Partial<User> & { id: string }) => void
  deleteUser: (id: string) => void
  addCompany: (c: Company) => void
  updateCompany: (c: Partial<Company> & { id: string }) => void
  deleteCompany: (id: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      users: [],
      companies: [],
      addUser: (u) => set((s) => ({ users: [...s.users, u] })),
      updateUser: ({ id, ...rest }) =>
        set((s) => ({
          users: s.users.map((u) => (u.id === id ? { ...u, ...rest } : u)),
        })),
      deleteUser: (id) =>
        set((s) => ({ users: s.users.filter((u) => u.id !== id) })),
      addCompany: (c) => set((s) => ({ companies: [...s.companies, c] })),
      updateCompany: ({ id, ...rest }) =>
        set((s) => ({
          companies: s.companies.map((c) =>
            c.id === id ? { ...c, ...rest } : c
          ),
        })),
      deleteCompany: (id) =>
        set((s) => ({ companies: s.companies.filter((c) => c.id !== id) })),
    }),
    { name: 'app-storage' }
  )
)
