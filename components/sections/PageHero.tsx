'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  label:    string
  title:    string
  subtitle: string
}

const ease = [0.16, 1, 0.3, 1] as const

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-36 pb-20 px-6 bg-bone">
      <div className="mx-auto max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-block text-xs font-medium uppercase tracking-widest
                     text-olive/40 mb-6"
        >
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-olive
                     tracking-tighter leading-none mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          className="text-lg text-olive/55 leading-relaxed max-w-xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
