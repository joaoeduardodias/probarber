import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto_Slab } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProBarber',
  description: 'Sistema para gerenciamento de barbearias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.className} bg-background text-white antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
