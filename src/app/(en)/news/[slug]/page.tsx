import type { Metadata } from 'next'
import Article from '@/views/Article'
import { STORIES, storyBySlug, PRESS_COVER } from '@/data/press'
import { bodyFor } from '@/data/news-bodies'

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const s = storyBySlug(slug)
  if (!s) return {}
  const first = bodyFor(slug)[0]
  return {
    title: `${s.title} | Edivo Vina`,
    description: first ? first.t.slice(0, 155) : undefined,
    openGraph: { title: s.title, images: [PRESS_COVER.file], type: 'article' },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <Article lang="en" slug={slug} />
}
