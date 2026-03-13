'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const absences = [
  { id: 1, name: 'Camille Roux', type: 'Congé maternité', from: '2026-01-15', to: '2026-06-15', status: 'Approuvé', avatar: 'CR' },
  { id: 2, name: 'Marie Dupont', type: 'Congés payés', from: '2026-03-17', to: '2026-03-21', status: 'Approuvé', avatar: 'MD' },
  { id: 3, name: 'Hugo Fournier', type: 'Arrêt maladie', from: '2026-03-10', to: '2026-03-14', status: 'En cours', avatar: 'HF' },
  { id: 4, name: 'Emma Petit', type: 'RTT', from: '2026-03-20', to: '2026-03-20', status: 'En attente', avatar: 'EP' },
  { id: 5, name: 'Lucas Bernard', type: 'Congés payés', from: '2026-04-07', to: '2026-04-11', status: 'En attente', avatar: 'LB' },
  { id: 6, name: 'Sophie Leroy', type: 'Congé sans solde', from: '2026-05-01', to: '2026-05-15', status: 'En attente', avatar: 'SL' },
]

const statusColors: Record<string, string> = {
  'Approuvé': 'bg-green-100 text-green-700',
  'En cours': 'bg-blue-100 text-blue-700',
  'En attente': 'bg-amber-100 text-amber-700',
  'Refusé': 'bg-red-100 text-red-700',
}

const typeColors: Record<string, string> = {
  'Congés payés': 'text-blue-600',
  'RTT': 'text-purple-600',
  'Arrêt maladie': 'text-red-600',
  'Congé maternité': 'text-pink-600',
  'Congé sans solde': 'text-gray-600',
}

export default function AbsencesPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dairia-navy">Absences</h1>
          <p className="text-dairia-secondary mt-1">{absences.length} absences enregistrées</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Fermer' : '+ Déclarer une absence'}
        </Button>
      </div>

      {/* Quick form */}
      {showForm && (
        <Card className="p-5">
          <h3 className="font-semibold text-dairia-navy mb-4">Nouvelle absence</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-dairia-navy mb-1">Employé</label>
              <select className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 bg-white">
                <option>Sélectionner un employé</option>
                {absences.map(a => <option key={a.id}>{a.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-dairia-navy mb-1">Type</label>
              <select className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 bg-white">
                <option>Congés payés</option>
                <option>RTT</option>
                <option>Arrêt maladie</option>
                <option>Congé sans solde</option>
                <option>Congé maternité/paternité</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-dairia-navy mb-1">Du</label>
              <input type="date" className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-dairia-navy mb-1">Au</label>
              <input type="date" className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30" />
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setShowForm(false)}>Annuler</Button>
            <Button onClick={() => { setShowForm(false); alert('Absence déclarée ! (démo)') }}>Enregistrer</Button>
          </div>
        </Card>
      )}

      {/* List */}
      <Card className="divide-y divide-dairia-border">
        {absences.map((a) => (
          <div key={a.id} className="flex items-center justify-between p-4 hover:bg-dairia-surface/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-dairia-orange/10 text-dairia-orange flex items-center justify-center text-sm font-bold">
                {a.avatar}
              </div>
              <div>
                <p className="font-medium text-dairia-navy">{a.name}</p>
                <p className="text-sm">
                  <span className={typeColors[a.type] || 'text-dairia-secondary'}>{a.type}</span>
                  <span className="text-dairia-secondary"> · {a.from} → {a.to}</span>
                </p>
              </div>
            </div>
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[a.status]}`}>
              {a.status}
            </span>
          </div>
        ))}
      </Card>
    </div>
  )
}
