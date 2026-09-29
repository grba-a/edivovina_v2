import type { Metadata } from 'next'
import Gallery from '@/views/Gallery'
import { getDict } from '@/i18n'

const t = getDict('hr').gallery

export const metadata: Metadata = { title: t.title, description: t.description }

export default function Page() {
  return <Gallery lang="hr" />
}
