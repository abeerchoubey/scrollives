'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

// TikTok icon as inline SVG
function TikTokIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z"
        fill="currentColor"
      />
    </svg>
  )
}

const footerLinks = [
  { href: '/',          label: 'Home'      },
  { href: '/join',      label: 'Join'      },
  { href: '/schools',   label: 'Schools'   },
  { href: '/parents',   label: 'Parents'   },
  { href: '/volunteer', label: 'Volunteer' },
]

const socialLinks = [
  {
    href:   'https://www.tiktok.com/@scrollives?_r=1&_t=ZN-96unGIsQQWU',
    label:  'TikTok',
    icon:   TikTokIcon,
  },
  {
    href:   'https://www.instagram.com/scrollives?igsh=djVwMDY2ZW93MjVh&utm_source=qr',
    label:  'Instagram',
    icon:   Instagram,
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-olive text-bone overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-20">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-soft">
                <Image
                  src="/scrollives.jpeg"
                  alt="ScrollLives logo"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-serif text-2xl">ScrollLives</p>
            </div>
            <p className="text-sm text-bone/50 leading-relaxed">
              Youth-led. Community-driven. A movement helping teenagers reclaim
              their time, attention, and life.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-bone/35 mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-bone/60 hover:text-bone transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-bone/35 mb-4">
              Follow us
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="p-2.5 rounded-xl bg-bone/8 hover:bg-bone/15 
                               border border-bone/10 hover:border-bone/20
                               transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-bone/60" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-bone/35">
            &copy; {new Date().getFullYear()} ScrollLives. A youth-led nonprofit movement.
          </p>
          <p className="text-xs text-bone/25">Made with volunteers from all around the globe.</p>
        </div>
      </div>
    </footer>
  )
}
