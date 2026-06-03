'use client'

import { motion } from 'framer-motion'
import { Eye, Users, Zap } from 'lucide-react'

const pillars = [
  {
    icon:  Eye,
    title: 'Awareness',
    text:  'Understanding how social media shapes our thoughts, habits, and sense of self — so we can make real choices.',
  },
  {
    icon:  Users,
    title: 'Community',
    text:  'Finding people who get it. A generation that chooses connection over comparison.',
  },
  {
    icon:  Zap,
    title: 'Action',
    text:  'Building habits, hobbies, and a life worth looking up for. Turning insight into change.',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Mission() {
  return (
    <section className="bg-olive py-28 md:py-40 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-bone/90
                     text-center leading-snug mb-24 tracking-tight"
        >
          &ldquo;Every teenager deserves a childhood that{' '}
          <span className="text-warm">isn&rsquo;t defined</span> by an
          algorithm.&rdquo;
        </motion.p>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-bone/10 flex items-center justify-center">
                  <Icon size={18} className="text-warm" />
                </div>
                <h3 className="font-serif text-xl text-bone">
                  {pillar.title}
                </h3>
                <p className="text-sm text-bone/55 leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
