import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAIS | Login",
  description:
    "Acesse o CAIS — onde empresas, pessoas e projetos atracam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}