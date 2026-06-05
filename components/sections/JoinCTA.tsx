'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Instagram } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

function TikTokIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function JoinCTA() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-clay overflow-hidden">
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full
                   bg-warm/4 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full
                   bg-sage/3 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-sage mb-6">
            Ready?
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl text-olive tracking-tighter leading-none mb-6">
            Reclaim your scroll.
          </h2>
          <p className="text-lg text-olive/50 leading-relaxed mb-12 max-w-md mx-auto">
            It starts with one decision. Join thousands of teens choosing to
            live more intentionally — one scroll at a time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                           bg-warm text-bone font-medium
                           transition-all duration-300 hover:bg-warm-500 shadow-soft hover:shadow-card-hover"
              >
                Join the movement
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                           border border-olive/20 text-olive font-medium
                           transition-all duration-300 hover:border-olive/40 hover:bg-bone/60"
              >
                Volunteer with us
              </Link>
            </motion.div>
          </div>

          {/* Social follow */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs text-olive/35 mr-1">Follow us</span>
            <motion.a
              href="https://www.tiktok.com/@scrollives?_r=1&_t=ZN-96unGIsQQWU"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-olive/6 hover:bg-olive/10 border border-olive/10
                         text-olive/50 hover:text-olive transition-all duration-300"
              aria-label="TikTok"
            >
              <TikTokIcon size={16} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/scrollives?igsh=djVwMDY2ZW93MjVh&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-olive/6 hover:bg-olive/10 border border-olive/10
                         text-olive/50 hover:text-olive transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
