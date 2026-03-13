import Link from 'next/link';
import { FileText, Shield, Users, Clock, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-dairia">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold text-dairia-navy">
              GererMes<span className="text-dairia-orange">RH</span>
            </span>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-dairia-secondary hover:text-dairia-navy font-medium transition-colors">
                Connexion
              </Link>
              <Link href="/dashboard" className="bg-dairia-orange text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-all">
                Commencer
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dairia-navy tracking-tight">
            Automatisez votre
            <span className="text-dairia-orange block mt-2">gestion RH</span>
          </h1>
          <p className="mt-6 text-xl text-dairia-secondary max-w-3xl mx-auto">
            Simplifiez l&apos;onboarding, les absences, les contrats et la conformité.
            Une plateforme complète pour les équipes RH et juridiques.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center bg-dairia-orange text-white px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-all"
            >
              Démarrer gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center border border-dairia-border text-dairia-navy px-8 py-3 rounded-lg font-medium text-lg hover:bg-white transition-colors"
            >
              Voir la démo
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dairia-navy">
              Tout ce dont votre équipe RH a besoin
            </h2>
            <p className="mt-4 text-lg text-dairia-secondary">
              Une solution complète pour automatiser vos processus RH
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Onboarding automatisé', desc: "Intégrez vos nouveaux collaborateurs en quelques clics avec des parcours d'onboarding personnalisés." },
              { icon: Clock, title: 'Gestion des absences', desc: 'Centralisez les demandes de congés, arrêts maladie et absences avec un suivi en temps réel.' },
              { icon: FileText, title: 'Contrats & documents', desc: 'Générez automatiquement vos contrats, avenants et documents RH à partir de modèles pré-configurés.' },
              { icon: Shield, title: 'Conformité juridique', desc: "Restez conforme avec les obligations légales grâce à des alertes et un accompagnement juridique intégré." },
              { icon: CheckCircle, title: 'Workflows de validation', desc: 'Automatisez vos circuits de validation pour les demandes RH, avec notifications et rappels.' },
              { icon: BarChart3, title: 'Tableaux de bord', desc: 'Pilotez votre activité RH avec des indicateurs clés : effectifs, turnover, absences, coûts.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 bg-background rounded-xl border border-dairia-border shadow-dairia hover:shadow-dairia-md transition-shadow">
                <div className="w-12 h-12 bg-dairia-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-dairia-orange" />
                </div>
                <h3 className="text-xl font-semibold text-dairia-navy mb-2">{title}</h3>
                <p className="text-dairia-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dairia-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à simplifier votre gestion RH ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Rejoignez les entreprises qui nous font confiance pour automatiser leurs processus RH.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center bg-white text-dairia-orange px-8 py-3 rounded-lg font-medium text-lg hover:bg-white/90 transition-colors"
          >
            Accéder à la plateforme
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dairia-navy text-white/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold text-white">GererMes<span className="text-dairia-orange">RH</span></span>
              <p className="mt-2 text-sm">Plateforme d&apos;automatisation RH</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="hover:text-white transition-colors cursor-pointer">Conditions de service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Confidentialité</span>
              <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
            <p>© {new Date().getFullYear()} DAIRIA Avocats — GO SAS. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
