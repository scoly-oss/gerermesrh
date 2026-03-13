import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GererMesRH — Automatisation RH par DAIRIA Avocats",
  description: "Plateforme d'automatisation RH : onboarding, absences, contrats, conformité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
