import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AstroKalki | Astrology SaaS',
  description: 'Comprehensive astrology platform for birth charts, consultations, and insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
