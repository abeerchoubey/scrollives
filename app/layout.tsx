import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Nav    from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight:  '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default:  'ScrollLives — Reclaim your scroll.',
    template: '%s | ScrollLives',
  },
  description:
    'ScrollLives is a youth-led movement helping teenagers build healthier, more intentional relationships with technology and social media.',
  keywords: ['teen mental health', 'social media', 'digital wellness', 'youth movement', 'India'],
  openGraph: {
    title:       'ScrollLives — Reclaim your scroll.',
    description: 'A youth-led movement for healthier technology habits.',
    type:        'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans bg-bone text-olive antialiased selection:bg-warm/20">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
