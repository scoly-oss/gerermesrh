'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const employees = [
  { id: 1, name: 'Marie Dupont', role: 'Responsable commerciale', dept: 'Commercial', status: 'Actif', since: '2021-03-15', avatar: 'MD' },
  { id: 2, name: 'Lucas Bernard', role: 'Développeur fullstack', dept: 'Technique', status: 'Période d\'essai', since: '2026-01-10', avatar: 'LB' },
  { id: 3, name: 'Sophie Leroy', role: 'Chargée RH', dept: 'RH', status: 'Actif', since: '2020-09-01', avatar: 'SL' },
  { id: 4, name: 'Thomas Martin', role: 'Contrôleur de gestion', dept: 'Finance', status: 'Onboarding', since: '2026-03-20', avatar: 'TM' },
  { id: 5, name: 'Emma Petit', role: 'Chef de projet marketing', dept: 'Marketing', status: 'Actif', since: '2022-06-01', avatar: 'EP' },
  { id: 6, name: 'Alexandre Moreau', role: 'Juriste', dept: 'Juridique', status: 'Actif', since: '2023-01-15', avatar: 'AM' },
  { id: 7, name: 'Camille Roux', role: 'Assistante de direction', dept: 'Direction', status: 'Congé maternité', since: '2019-11-01', avatar: 'CR' },
  { id: 8, name: 'Hugo Fournier', role: 'Technicien support', dept: 'Technique', status: 'Actif', since: '2024-04-15', avatar: 'HF' },
]

const statusColors: Record<string, string> = {
  'Actif': 'bg-green-100 text-green-700',
  'Période d\'essai': 'bg-amber-100 text-amber-700',
  'Onboarding': 'bg-blue-100 text-blue-700',
  'Congé maternité': 'bg-purple-100 text-purple-700',
}

export default function EmployeesPage() {
  const [search, setSearch] = useState('')
  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.dept.toLowerCase().includes(search.toLowerCase()) ||
    e.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dairia-navy">Employés</h1>
          <p className="text-dairia-secondary mt-1">{employees.length} collaborateurs</p>
        </div>
        <Link href="/onboarding">
          <Button>+ Nouvel employé</Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dairia-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="text"
          placeholder="Rechercher par nom, poste ou département..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-dairia-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange"
        />
      </div>

      {/* List */}
      <Card className="divide-y divide-dairia-border">
        {filtered.map((emp) => (
          <div key={emp.id} className="flex items-center justify-between p-4 hover:bg-dairia-surface/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-dairia-orange/10 text-dairia-orange flex items-center justify-center text-sm font-bold">
                {emp.avatar}
              </div>
              <div>
                <p className="font-medium text-dairia-navy">{emp.name}</p>
                <p className="text-sm text-dairia-secondary">{emp.role} · {emp.dept}</p>
              </div>
            </div>
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[emp.status] || 'bg-gray-100 text-gray-600'}`}>
              {emp.status}
            </span>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="p-8 text-center text-dairia-secondary">Aucun employé trouvé</div>
        )}
      </Card>
    </div>
  )
}
