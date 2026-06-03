import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import JoinForm from '@/components/forms/JoinForm'

export const metadata: Metadata = {
  title: 'Join the Movement',
  description:
    'Join ScrollLives and start building a healthier relationship with technology. You belong here.',
}

export default function JoinPage() {
  return (
    <>
      <PageHero
        label="For teenagers"
        title="You were made for more than the feed."
        subtitle="Tell us a little about yourself and we'll be in touch. No pressure, no algorithms — just people."
      />
      <JoinForm />
    </>
  )
}
