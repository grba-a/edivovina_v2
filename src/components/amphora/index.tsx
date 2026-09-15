'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const AmphoraCanvas = dynamic(() => import('./Canvas'), { ssr: false })

/**
 * Mount TEK NAKON prvog painta. Da canvas ide u prvi render, LCP element bi
 * cekao three.js bundle — a LCP mora biti hero naslov iz cistog HTML-a.
 */
export default function Amphora() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number
      cancelIdleCallback?: (h: number) => void
    }
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 1200 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = setTimeout(() => setReady(true), 400)
    return () => clearTimeout(t)
  }, [])

  if (!ready) return null
  return <AmphoraCanvas />
}
