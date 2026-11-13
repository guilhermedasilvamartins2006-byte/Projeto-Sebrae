import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escala 5x2 — planeje sua operação com clareza",
  description:
    "Explore uma demonstração interativa para entender cobertura, equipe e estimativas de custo na transição para escalas 5x2.",
  applicationName: "Escala 5x2",
  openGraph: {
    title: "Escala 5x2 — planeje sua operação com clareza",
    description:
      "Compare cenários de cobertura e veja como pequenas mudanças afetam a sua operação.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f7f4",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
