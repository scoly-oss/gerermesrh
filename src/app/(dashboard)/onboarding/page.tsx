'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const departments = ['Commercial', 'Technique', 'RH', 'Finance', 'Marketing', 'Direction', 'Juridique']
const contractTypes = ['CDI', 'CDD', 'Stage', 'Alternance', 'Intérim']

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    position: '', department: '', contractType: 'CDI', startDate: '',
    manager: '', notes: '',
  })

  const update = (field: string, value: string) => setForm({ ...form, [field]: value })

  const steps = [
    { num: 1, label: 'Informations' },
    { num: 2, label: 'Poste' },
    { num: 3, label: 'Confirmation' },
  ]

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <Link href="/employees" className="text-sm text-dairia-secondary hover:text-dairia-navy flex items-center gap-1 mb-4">
          ‹ Retour aux employés
        </Link>
        <h1 className="text-2xl font-bold text-dairia-navy">Nouvel employé</h1>
        <p className="text-dairia-secondary mt-1">Intégrez un collaborateur en 3 étapes simples</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-0">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
              step > s.num ? 'bg-green-500 text-white' :
              step === s.num ? 'bg-dairia-orange text-white' :
              'bg-dairia-border text-dairia-secondary'
            }`}>
              {step > s.num ? '✓' : s.num}
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 ${step > s.num ? 'bg-green-500' : 'bg-dairia-border'}`} />
            )}
          </div>
        ))}
      </div>

      <Card className="p-6">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-dairia-navy">Informations personnelles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dairia-navy mb-1">Prénom *</label>
                <input value={form.firstName} onChange={(e) => update('firstName', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange" placeholder="Ex: Marie" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dairia-navy mb-1">Nom *</label>
                <input value={form.lastName} onChange={(e) => update('lastName', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange" placeholder="Ex: Dupont" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-dairia-navy mb-1">Email professionnel *</label>
              <input value={form.email} onChange={(e) => update('email', e.target.value)} type="email" className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange" placeholder="marie.dupont@entreprise.fr" />
            </div>
            <div>
              <label className="block text-sm font-medium text-dairia-navy mb-1">Téléphone</label>
              <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange" placeholder="06 12 34 56 78" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-dairia-navy">Poste et département</h2>
            <div>
              <label className="block text-sm font-medium text-dairia-navy mb-1">Intitulé du poste *</label>
              <input value={form.position} onChange={(e) => update('position', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange" placeholder="Ex: Développeur fullstack" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dairia-navy mb-1">Département *</label>
                <select value={form.department} onChange={(e) => update('department', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange bg-white">
                  <option value="">Sélectionner</option>
                  {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dairia-navy mb-1">Type de contrat *</label>
                <select value={form.contractType} onChange={(e) => update('contractType', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange bg-white">
                  {contractTypes.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-dairia-navy mb-1">Date d&apos;arrivée *</label>
              <input type="date" value={form.startDate} onChange={(e) => update('startDate', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange" />
            </div>
            <div>
              <label className="block text-sm font-medium text-dairia-navy mb-1">Notes</label>
              <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className="w-full px-3 py-2.5 rounded-lg border border-dairia-border text-sm focus:outline-none focus:ring-2 focus:ring-dairia-orange/30 focus:border-dairia-orange resize-none" placeholder="Informations complémentaires..." />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-dairia-navy">Récapitulatif</h2>
            <div className="bg-dairia-surface rounded-lg p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-dairia-secondary">Nom</span><p className="font-medium text-dairia-navy">{form.firstName} {form.lastName}</p></div>
                <div><span className="text-dairia-secondary">Email</span><p className="font-medium text-dairia-navy">{form.email || '—'}</p></div>
                <div><span className="text-dairia-secondary">Poste</span><p className="font-medium text-dairia-navy">{form.position || '—'}</p></div>
                <div><span className="text-dairia-secondary">Département</span><p className="font-medium text-dairia-navy">{form.department || '—'}</p></div>
                <div><span className="text-dairia-secondary">Contrat</span><p className="font-medium text-dairia-navy">{form.contractType}</p></div>
                <div><span className="text-dairia-secondary">Date d&apos;arrivée</span><p className="font-medium text-dairia-navy">{form.startDate || '—'}</p></div>
              </div>
              {form.notes && (
                <div className="text-sm border-t border-dairia-border pt-3">
                  <span className="text-dairia-secondary">Notes</span>
                  <p className="font-medium text-dairia-navy mt-1">{form.notes}</p>
                </div>
              )}
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-700">
              ✅ Tout est prêt ! En confirmant, un email d&apos;accueil sera envoyé au collaborateur et le parcours d&apos;onboarding sera lancé.
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6 pt-4 border-t border-dairia-border">
          {step > 1 ? (
            <Button variant="ghost" onClick={() => setStep(step - 1)}>← Précédent</Button>
          ) : <div />}
          {step < 3 ? (
            <Button onClick={() => setStep(step + 1)}>Suivant →</Button>
          ) : (
            <Button onClick={() => alert('Onboarding créé avec succès ! (démo)')}>✓ Confirmer l&apos;intégration</Button>
          )}
        </div>
      </Card>
    </div>
  )
}
