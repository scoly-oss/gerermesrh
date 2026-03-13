import { DashboardProvider } from '@/components/providers/DashboardProvider'
import { Navigation } from '@/components/layout/Navigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardProvider>
      <Navigation>
        {children}
      </Navigation>
    </DashboardProvider>
  )
}
