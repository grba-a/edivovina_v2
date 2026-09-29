import type { Metadata } from 'next'
import NewsStories from '@/views/NewsStories'
import { getDict } from '@/i18n'

const t = getDict('hr').news

export const metadata: Metadata = { title: t.title, description: t.description }

export default function Page() {
  return <NewsStories lang="hr" />
}
