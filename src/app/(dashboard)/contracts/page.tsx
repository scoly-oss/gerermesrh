'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const contracts = [
  { id: 1, name: 'Marie Dupont', type: 'CDD', start: '2024-06-01', end: '2026-05-31', status: 'À renouveler', avatar: 'MD' },
  { id: 2, name: 'Lucas Bernard', type: 'CDI', start: '2026-01-10', end: null, status: 'Actif', avatar: 'LB' },
  { id: 3, name: 'Sophie Leroy', type: 'CDI', start: '2020-09-01', end: null, status: 'Actif', avatar: 'SL' },
  { id: 4, name: 'Thomas Martin', type: 'CDI', start: '2026-03-20', end: null, status: 'À signer', avatar: 'TM' },
  { id: 5, name: 'Emma Petit', type: 'CDI', start: '2022-06-01', end: null, status: 'Actif', avatar: 'EP' },
  { id: 6, name: 'Alexandre Moreau', type: 'CDD', start: '2023-01-15', end: '2026-01-14', status: 'Expiré', avatar: 'AM' },
  { id: 7, name: 'Camille Roux', type: 'CDI', start: '2019-11-01', end: null, status: 'Actif', avatar: 'CR' },
  { id: 8, name: 'Hugo Fournier', type: 'Alternance', start: '2024-09-01', end: '2026-08-31', status: 'Actif', avatar: 'HF' },
]

const statusColors: Record<string, string> = {
  'Actif': 'bg-green-100 text-green-700',
  'À renouveler': 'bg-amber-100 text-amber-700',
  'À signer': 'bg-blue-100 text-blue-700',
  'Expiré': 'bg-red-100 text-red-700',
}

const typeColors: Record<string, string> = {
  'CDI': 'bg-dairia-navy text-white',
  'CDD': 'bg-dairia-orange text-white',
  'Alternance': 'bg-purple-600 text-white',
  'Stage': 'bg-teal-600 text-white',
}

export default function ContractsPage() {
  const actifs = contracts.filter(c => c.status === 'Actif').length
  const aRenouveler = contracts.filter(c => c.status === 'À renouveler').length
  const expires = contracts.filter(c => c.status === 'Expiré').length

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dairia-navy">Contrats</h1>
          <p className="text-dairia-secondary mt-1">{contracts.length} contrats</p>
        </div>
        <Button>+ Nouveau contrat</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">{actifs}</p>
          <p className="text-sm text-dairia-secondary">Actifs</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">{aRenouveler}</p>
          <p className="text-sm text-dairia-secondary">À renouveler</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-red-600">{expires}</p>
          <p className="text-sm text-dairia-secondary">Expirés</p>
        </Card>
      </div>

      {/* List */}
      <Card className="divide-y divide-dairia-border">
        {contracts.map((c) => (
          <div key={c.id} className="flex items-center justify-between p-4 hover:bg-dairia-surface/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-dairia-orange/10 text-dairia-orange flex items-center justify-center text-sm font-bold">
                {c.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium text-dairia-navy">{c.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${typeColors[c.type] || 'bg-gray-600 text-white'}`}>
                    {c.type}
                  </span>
                </div>
                <p className="text-sm text-dairia-secondary">
                  Du {c.start}{c.end ? ` au ${c.end}` : ' · Durée indéterminée'}
                </p>
              </div>
            </div>
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[c.status]}`}>
              {c.status}
            </span>
          </div>
        ))}
      </Card>
    </div>
  )
}
