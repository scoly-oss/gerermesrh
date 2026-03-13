'use client'

import { createContext, useContext, ReactNode } from 'react'

interface User {
  name: string
  email: string
  role: 'SUPER_ADMIN' | 'ADMIN' | 'REVIEWER' | 'USER' | 'GUEST'
}

interface DashboardContextType {
  user: User
}

const DashboardContext = createContext<DashboardContextType>({
  user: { name: 'Sophie Martin', email: 'sophie.martin@demo.fr', role: 'ADMIN' },
})

export function useDashboard() {
  return useContext(DashboardContext)
}

export function DashboardProvider({ children }: { children: ReactNode }) {
  const user: User = {
    name: 'Sophie Martin',
    email: 'sophie.martin@demo.fr',
    role: 'ADMIN',
  }

  return (
    <DashboardContext.Provider value={{ user }}>
      {children}
    </DashboardContext.Provider>
  )
}
