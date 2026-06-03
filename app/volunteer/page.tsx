import type { Metadata } from 'next'
import PageHero       from '@/components/sections/PageHero'
import VolunteerForm  from '@/components/forms/VolunteerForm'

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Join the ScrollLives team. Whether you want to speak, create, or support — there is a place for you here.',
}

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        label="Join the team"
        title="Be the change you scrolled past."
        subtitle="We're a team of young people who believe teenagers deserve better. Come build this with us."
      />
      <VolunteerForm />
    </>
  )
}
