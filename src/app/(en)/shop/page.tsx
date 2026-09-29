import type { Metadata } from 'next'
import Shop from '@/views/Shop'
import { getDict } from '@/i18n'

const t = getDict('en').shop

export const metadata: Metadata = { title: t.title, description: t.description }

export default function Page() {
  return <Shop lang="en" />
}
