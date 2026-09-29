import type { Metadata } from 'next'
import Visit from '@/views/Visit'
import { getDict } from '@/i18n'

const t = getDict('en').visit

export const metadata: Metadata = { title: t.title, description: t.description }

export default function Page() {
  return <Visit lang="en" />
}
