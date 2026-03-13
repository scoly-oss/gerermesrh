'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { useDashboard } from '../providers/DashboardProvider'

type TabId = 'alertes' | 'repartition' | 'tendances'

const stats = [
  { label: 'Effectifs', value: '234', change: '+3 ce mois', icon: '👥', color: 'bg-blue-50 text-blue-600' },
  { label: 'Absences', value: '12', change: 'En cours', icon: '📅', color: 'bg-amber-50 text-amber-600', warning: true },
  { label: 'Onboardings', value: '5', change: 'Ce mois', icon: '🚀', color: 'bg-green-50 text-green-600' },
  { label: 'Contrats', value: '8', change: 'À renouveler', icon: '📄', color: 'bg-red-50 text-red-600', warning: true },
]

const alertes = [
  { id: 1, title: 'Contrat CDD — Marie Dupont', badge: 'Urgent', badgeColor: 'bg-red-100 text-red-700', desc: 'Expire dans 15 jours · Renouvellement requis', dept: 'Commercial' },
  { id: 2, title: 'Période d\'essai — Lucas Bernard', badge: 'Attention', badgeColor: 'bg-amber-100 text-amber-700', desc: 'Fin de période d\'essai dans 7 jours', dept: 'Technique' },
  { id: 3, title: 'Visite médicale — Sophie Leroy', badge: 'À planifier', badgeColor: 'bg-blue-100 text-blue-700', desc: 'Visite de reprise à programmer', dept: 'RH' },
  { id: 4, title: 'Onboarding — Thomas Martin', badge: 'En cours', badgeColor: 'bg-green-100 text-green-700', desc: 'Arrivée le 20/03 · 3 étapes restantes', dept: 'Finance' },
]

const departments = [
  { name: 'Commercial', count: 45, pct: 19 },
  { name: 'Technique', count: 82, pct: 35 },
  { name: 'RH', count: 18, pct: 8 },
  { name: 'Finance', count: 32, pct: 14 },
  { name: 'Marketing', count: 28, pct: 12 },
  { name: 'Direction', count: 12, pct: 5 },
  { name: 'Juridique', count: 17, pct: 7 },
]

const trends = [
  { month: 'Oct', embauches: 4, departs: 2 },
  { month: 'Nov', embauches: 6, departs: 1 },
  { month: 'Dec', embauches: 2, departs: 3 },
  { month: 'Jan', embauches: 5, departs: 2 },
  { month: 'Fév', embauches: 7, departs: 1 },
  { month: 'Mar', embauches: 3, departs: 0 },
]

export function Dashboard() {
  const { user } = useDashboard()
  const [activeTab, setActiveTab] = useState<TabId>('alertes')

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir'

  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: 'alertes', label: 'Alertes RH', icon: '⚠️' },
    { id: 'repartition', label: 'Répartition', icon: '📊' },
    { id: 'tendances', label: 'Tendances', icon: '📈' },
  ]

  return (
    <div className="space-y-6">
      {/* Greeting + Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dairia-navy">{greeting} 👋</h1>
          <p className="text-dairia-secondary mt-1">Voici un résumé de votre activité RH</p>
        </div>
        <div className="flex gap-3">
          <Link href="/onboarding">
            <Button>+ Nouvel employé</Button>
          </Link>
          <Link href="/absences">
            <Button variant="outline">Déclarer une absence</Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-dairia-secondary">{s.label}</p>
                <p className="text-3xl font-bold text-dairia-navy mt-1">{s.value}</p>
                <p className={`text-sm mt-2 flex items-center gap-1 ${s.warning ? 'text-amber-600' : 'text-dairia-orange'}`}>
                  {s.warning ? '⚠' : '↗'} {s.change}
                </p>
              </div>
              <span className="text-2xl">{s.icon}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Card className="overflow-hidden">
        <div className="flex border-b border-dairia-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'text-dairia-orange border-dairia-orange'
                  : 'text-dairia-secondary border-transparent hover:text-dairia-navy'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-5">
          {activeTab === 'alertes' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-dairia-navy">Actions requises</h3>
                <span className="text-sm text-dairia-secondary">{alertes.length} alerte(s)</span>
              </div>
              {alertes.map((a) => (
                <div key={a.id} className="flex items-center justify-between p-4 rounded-lg border border-dairia-border hover:shadow-dairia transition-shadow">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-dairia-navy">{a.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${a.badgeColor}`}>{a.badge}</span>
                    </div>
                    <p className="text-sm text-dairia-secondary mt-1">{a.desc}</p>
                  </div>
                  <span className="text-dairia-secondary ml-4">›</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'repartition' && (
            <div>
              <h3 className="font-semibold text-dairia-navy mb-4">Répartition par département</h3>
              <div className="space-y-3">
                {departments.map((d) => (
                  <div key={d.name} className="flex items-center gap-4">
                    <span className="w-24 text-sm text-dairia-secondary">{d.name}</span>
                    <div className="flex-1 bg-dairia-surface rounded-full h-6 overflow-hidden">
                      <div
                        className="h-full bg-dairia-orange rounded-full flex items-center justify-end pr-2 text-xs text-white font-medium"
                        style={{ width: `${Math.max(d.pct, 8)}%` }}
                      >
                        {d.count}
                      </div>
                    </div>
                    <span className="text-sm text-dairia-secondary w-10 text-right">{d.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tendances' && (
            <div>
              <h3 className="font-semibold text-dairia-navy mb-4">Embauches vs Départs (6 derniers mois)</h3>
              <div className="grid grid-cols-6 gap-2">
                {trends.map((t) => (
                  <div key={t.month} className="text-center">
                    <div className="flex flex-col items-center gap-1 mb-2">
                      <div className="w-full flex justify-center gap-1" style={{ height: '120px', alignItems: 'flex-end' }}>
                        <div
                          className="w-5 bg-dairia-orange rounded-t"
                          style={{ height: `${t.embauches * 16}px` }}
                          title={`${t.embauches} embauches`}
                        />
                        <div
                          className="w-5 bg-dairia-navy-light rounded-t"
                          style={{ height: `${t.departs * 16}px` }}
                          title={`${t.departs} départs`}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-dairia-secondary">{t.month}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-dairia-orange rounded" />
                  <span className="text-sm text-dairia-secondary">Embauches</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-dairia-navy-light rounded" />
                  <span className="text-sm text-dairia-secondary">Départs</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
