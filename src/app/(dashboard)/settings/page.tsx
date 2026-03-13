import { Card } from '@/components/ui/Card'

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-dairia-navy">Paramètres</h1>
        <p className="text-dairia-secondary mt-1">Configuration de la plateforme</p>
      </div>

      <Card className="p-5 space-y-4">
        <h2 className="font-semibold text-dairia-navy">Entreprise</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-dairia-navy mb-1">Nom de l&apos;entreprise</label>
            <input defaultValue="DAIRIA Avocats" className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30" />
          </div>
          <div>
            <label className="block text-sm font-medium text-dairia-navy mb-1">SIRET</label>
            <input defaultValue="123 456 789 00001" className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30" />
          </div>
        </div>
      </Card>

      <Card className="p-5 space-y-4">
        <h2 className="font-semibold text-dairia-navy">Notifications</h2>
        <div className="space-y-3">
          {['Alertes contrats', 'Rappels onboarding', 'Absences en attente'].map((label) => (
            <label key={label} className="flex items-center justify-between">
              <span className="text-sm text-dairia-secondary">{label}</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-dairia-border text-dairia-orange focus:ring-dairia-orange" />
            </label>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="font-semibold text-dairia-navy mb-2">À propos</h2>
        <p className="text-sm text-dairia-secondary">GererMesRH v1.0 — Propulsé par DAIRIA Avocats</p>
      </Card>
    </div>
  )
}
