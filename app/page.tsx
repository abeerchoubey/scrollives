import type { Metadata } from 'next'
import Hero       from '@/components/sections/Hero'
import Mission    from '@/components/sections/Mission'
import HowItWorks from '@/components/sections/HowItWorks'
import ForWho     from '@/components/sections/ForWho'
import JoinCTA    from '@/components/sections/JoinCTA'

export const metadata: Metadata = {
  title: 'ScrollLives — Reclaim your scroll.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <HowItWorks />
      <ForWho />
      <JoinCTA />
    </>
  )
}
