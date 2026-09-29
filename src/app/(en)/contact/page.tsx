import type { Metadata } from 'next'
import Contact from '@/views/Contact'
import { getDict } from '@/i18n'

const t = getDict('en').contact

export const metadata: Metadata = { title: t.title, description: t.description }

export default function Page() {
  return <Contact lang="en" />
}
