import type { Metadata } from 'next'
import About from '@/views/About'
import { getDict } from '@/i18n'

const t = getDict('en').about

export const metadata: Metadata = { title: t.title, description: t.description }

export default function Page() {
  return <About lang="en" />
}
