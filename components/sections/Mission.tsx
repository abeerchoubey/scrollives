'use client'

import { motion } from 'framer-motion'
import { Eye, Users, Zap, Leaf, Heart, Compass } from 'lucide-react'

const pillars = [
  {
    icon:  Eye,
    title: 'Awareness',
    text:  'Understanding how social media shapes our thoughts, habits, and sense of self — so we can make real choices.',
    color: 'bg-sage/15',
    iconColor: 'text-sage-400',
  },
  {
    icon:  Users,
    title: 'Community',
    text:  'Finding people who get it. A generation that chooses connection over comparison.',
    color: 'bg-warm/10',
    iconColor: 'text-warm',
  },
  {
    icon:  Zap,
    title: 'Action',
    text:  'Building habits, hobbies, and a life worth looking up for. Turning insight into change.',
    color: 'bg-sand/20',
    iconColor: 'text-sand-500',
  },
]

const stats = [
  { icon: Leaf, value: '100%', label: 'Youth-led' },
  { icon: Heart, value: 'Growing', label: 'Community' },
  { icon: Compass, value: 'Free', label: 'For everyone' },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Mission() {
  return (
    <section className="relative bg-olive py-28 md:py-40 px-6 overflow-hidden">
      {/* Subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(212,196,168,0.3) 0%, transparent 50%), ' +
            'radial-gradient(circle at 80% 50%, rgba(188,108,90,0.2) 0%, transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-bone/90
                     text-center leading-snug mb-20 tracking-tight"
        >
          &ldquo;Every teenager deserves a childhood that{' '}
          <span className="text-warm">isn&rsquo;t defined</span> by an
          algorithm.&rdquo;
        </motion.p>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease }}
                className="rounded-2xl bg-bone/5 border border-bone/10 p-7
                           backdrop-blur-sm hover:bg-bone/8 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-5`}>
                  <Icon size={20} className={pillar.iconColor} />
                </div>
                <h3 className="font-serif text-xl text-bone mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-bone/50 leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 pt-8 border-t border-bone/10"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-bone/8 flex items-center justify-center">
                  <Icon size={16} className="text-warm" />
                </div>
                <div>
                  <p className="text-bone font-serif text-lg leading-none">{stat.value}</p>
                  <p className="text-bone/40 text-xs mt-0.5">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
