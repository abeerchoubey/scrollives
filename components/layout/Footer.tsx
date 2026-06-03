'use client'

import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = [
  { href: '/',          label: 'Home'      },
  { href: '/join',      label: 'Join'      },
  { href: '/schools',   label: 'Schools'   },
  { href: '/parents',   label: 'Parents'   },
  { href: '/volunteer', label: 'Volunteer' },
]

export default function Footer() {
  return (
    <footer className="bg-olive text-bone">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-serif text-2xl mb-3">ScrollLives</p>
            <p className="text-sm text-bone/60 leading-relaxed">
              Youth-led. Community-driven. A movement helping teenagers reclaim
              their time, attention, and life.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-bone/40 mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-bone/70 hover:text-bone transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-bone/40 mb-4">
              Find us
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://instagram.com/scrolllives"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-bone/10 hover:bg-bone/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-bone/70" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-bone/40">
            © {new Date().getFullYear()} ScrollLives. A youth-led nonprofit movement.
          </p>
          <p className="text-xs text-bone/30">Made with care in India.</p>
        </div>
      </div>
    </footer>
  )
}
