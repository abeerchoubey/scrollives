'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)',
             transition: { duration: 0.8, ease } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Soft background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(188,108,90,0.07) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 60% 50% at 80% 100%, rgba(61,74,62,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Decorative blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="pointer-events-none absolute top-1/4 -left-32 w-80 h-80 rounded-full
                   bg-warm/5 blur-3xl -z-10"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
        className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full
                   bg-olive/5 blur-3xl -z-10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Label */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           text-xs font-medium tracking-widest uppercase
                           bg-olive/8 text-olive border border-olive/15">
            <span className="w-1.5 h-1.5 rounded-full bg-warm animate-pulse" />
            Youth-led movement
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-olive leading-none mb-8"
        >
          You were made for
          <br />
          <span className="text-warm">more than the feed.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="max-w-xl mx-auto text-lg sm:text-xl text-olive/60 leading-relaxed mb-12"
        >
          ScrollLives is a youth-led movement helping teenagers build healthier,
          more intentional relationships with technology and social media.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         bg-olive text-bone text-sm font-medium
                         transition-colors hover:bg-olive-500"
            >
              Join the movement
              <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/schools"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         border border-olive/25 text-olive text-sm font-medium
                         transition-all hover:border-olive/50 hover:bg-olive/5"
            >
              For schools
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-olive/40 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
