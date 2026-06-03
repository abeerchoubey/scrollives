'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/',          label: 'Home'      },
  { href: '/join',      label: 'Join'      },
  { href: '/schools',   label: 'Schools'   },
  { href: '/parents',   label: 'Parents'   },
  { href: '/volunteer', label: 'Volunteer' },
]

export default function Nav() {
  const pathname   = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300',
          scrolled
            ? 'bg-bone/80 backdrop-blur-md border-b border-olive/8 shadow-sm'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl text-olive tracking-tight transition-opacity hover:opacity-70"
          >
            ScrollLives
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'relative px-3 py-1.5 text-sm font-medium rounded-md',
                    'transition-colors duration-200',
                    active
                      ? 'text-olive'
                      : 'text-olive/60 hover:text-olive hover:bg-olive/5',
                  ].join(' ')}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md bg-olive/8"
                      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              )
            })}
            <Link
              href="/join"
              className="ml-3 px-4 py-2 rounded-lg bg-olive text-bone text-sm font-medium
                         transition-all duration-200 hover:bg-olive-500"
            >
              Join now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-olive hover:bg-olive/8 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bone/95 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center h-full gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={[
                      'block px-8 py-3 text-2xl font-serif tracking-tight',
                      'transition-opacity duration-200',
                      pathname === link.href
                        ? 'text-olive'
                        : 'text-olive/50 hover:text-olive',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ delay: navLinks.length * 0.06 + 0.1, duration: 0.3 }}
                className="mt-6"
              >
                <Link
                  href="/join"
                  className="px-8 py-3 rounded-xl bg-olive text-bone text-lg font-medium
                             transition-all hover:bg-olive-500"
                >
                  Join now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
