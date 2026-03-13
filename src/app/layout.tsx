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
      <head>
        {/* Start Single Page Apps for GitHub Pages */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(l) {
                if (l.search[1] === '/') {
                  var decoded = l.search.slice(1).split('&').map(function(s) {
                    return s.replace(/~and~/g, '&')
                  }).join('?');
                  window.history.replaceState(null, null,
                    l.pathname.slice(0, -1) + decoded + l.hash
                  );
                }
              }(window.location))
            `,
          }}
        />
        {/* End Single Page Apps for GitHub Pages */}
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
