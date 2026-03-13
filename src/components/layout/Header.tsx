'use client'

import { useState } from 'react'
import { useDashboard } from '../providers/DashboardProvider'

const roleLabels: Record<string, string> = {
  SUPER_ADMIN: 'Super Admin',
  ADMIN: 'Admin',
  REVIEWER: 'Relecteur',
  USER: 'Utilisateur',
  GUEST: 'Invité',
}

export function Header() {
  const { user } = useDashboard()
  const [menuOpen, setMenuOpen] = useState(false)
  const initials = user.name.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <header className="h-14 bg-white border-b border-dairia-border flex items-center justify-between px-4 sm:px-6">
      {/* Left: Brand */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold text-dairia-navy">
          GererMes<span className="text-dairia-orange">RH</span>
        </span>
        <span className="hidden sm:inline text-dairia-secondary text-sm">|</span>
        <span className="hidden sm:inline text-dairia-secondary text-sm">Automatisation RH</span>
      </div>

      {/* Right: Notifications + User */}
      <div className="flex items-center gap-3 relative">
        {/* Notification bell */}
        <button className="p-2 text-dairia-secondary hover:text-dairia-navy rounded-lg hover:bg-dairia-surface transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>

        {/* User menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 hover:bg-dairia-surface rounded-lg px-2 py-1.5 transition-colors"
        >
          <span className="hidden sm:block text-right">
            <span className="text-sm font-medium text-dairia-navy block leading-tight">{user.name}</span>
            <span className="text-xs text-dairia-secondary">{roleLabels[user.role] || user.role}</span>
          </span>
          <div className="w-9 h-9 rounded-full bg-dairia-orange text-white flex items-center justify-center text-sm font-bold">
            {initials}
          </div>
        </button>

        {/* Dropdown */}
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)} />
            <div className="absolute right-0 top-12 w-56 bg-white rounded-xl border border-dairia-border shadow-dairia-lg z-40 py-2">
              <div className="px-4 py-2 border-b border-dairia-border">
                <p className="text-sm font-medium text-dairia-navy">{user.name}</p>
                <p className="text-xs text-dairia-secondary">{user.email}</p>
              </div>
              <button className="w-full text-left px-4 py-2.5 text-sm text-dairia-secondary hover:bg-dairia-surface flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                Mon profil
              </button>
              <button className="w-full text-left px-4 py-2.5 text-sm text-dairia-secondary hover:bg-dairia-surface flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                Paramètres
              </button>
              <div className="border-t border-dairia-border mt-1 pt-1">
                <button className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" /></svg>
                  Déconnexion
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
