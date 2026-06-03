import type { Metadata } from 'next'
import ParentsContent from '@/components/sections/ParentsContent'

export const metadata: Metadata = {
  title: 'For Parents',
  description:
    'Your concern is valid. ScrollLives helps teenagers build healthier relationships with technology — and we want parents to be part of the conversation.',
}

export default function ParentsPage() {
  return <ParentsContent />
}
