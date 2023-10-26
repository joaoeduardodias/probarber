import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProBarber",
  description: "Sistema para gerenciamento de barbearias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
