'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

export default function JoinCTA() {
  return (
    <section className="py-28 md:py-40 px-6 bg-clay">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-olive/40 mb-6">
            Ready?
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl text-olive tracking-tighter leading-none mb-6">
            Reclaim your scroll.
          </h2>
          <p className="text-lg text-olive/55 leading-relaxed mb-12 max-w-md mx-auto">
            It starts with one decision. Join thousands of teens choosing to
            live more intentionally — one scroll at a time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                           bg-olive text-bone font-medium
                           transition-colors hover:bg-olive-500"
              >
                Join the movement
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                           border border-olive/25 text-olive font-medium
                           transition-all hover:border-olive/50 hover:bg-olive/5"
              >
                Volunteer with us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
