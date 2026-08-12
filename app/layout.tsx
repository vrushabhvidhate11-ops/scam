import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'scam',
  description: 'A playful mock proposal site with an escapey NO button and a yes-first flow.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'scam',
    description: 'A playful mock proposal site with an escapey NO button and a yes-first flow.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
