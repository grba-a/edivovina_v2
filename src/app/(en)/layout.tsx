import type { Metadata } from 'next'
import '../globals.css'
import RootShell from '@/components/RootShell'
import { getDict } from '@/i18n'

const t = getDict('en').layout

export const metadata: Metadata = {
  metadataBase: new URL('https://edivovina-v2.vercel.app'),
  title: t.title,
  description: t.description,
  openGraph: {
    title: t.ogTitle,
    description: t.ogDescription,
    images: ['/photo/hero.jpg'],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>
}
