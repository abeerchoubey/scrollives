import type { Metadata } from 'next'
import PageHero   from '@/components/sections/PageHero'
import SchoolForm from '@/components/forms/SchoolForm'

export const metadata: Metadata = {
  title: 'For Schools',
  description:
    'Bring ScrollLives to your school. Workshops, talks, and programmes that actually reach teenagers.',
}

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        label="For educators & institutions"
        title="Bring the conversation to your school."
        subtitle="We run workshops and talks that meet teenagers where they are. Let's make it happen together."
      />
      <SchoolForm />
    </>
  )
}
