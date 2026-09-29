import type { Metadata } from 'next'
import Product from '@/views/Product'
import { WINES } from '@/data/wines'
import { wineBySlugFor } from '@/i18n'

export function generateStaticParams() {
  return WINES.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const w = wineBySlugFor('en', slug)
  if (!w) return {}
  return {
    title: `${w.name} | Edivo Vina`,
    description: w.body.slice(0, 155),
    openGraph: { title: w.name, images: [w.photo], type: 'website' },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <Product lang="en" slug={slug} />
}
