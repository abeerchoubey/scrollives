'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Users, Sprout } from 'lucide-react'

const steps = [
  {
    number: '01',
    title:  'Reach out',
    text:   'Fill out our short form. No CV, no interview — just you being honest about where you are.',
    icon:   MessageCircle,
    color:  'bg-sage/15',
    iconColor: 'text-sage-400',
  },
  {
    number: '02',
    title:  'Connect with your chapter',
    text:   "We'll match you with a local group or community call. Real people, real conversations.",
    icon:   Users,
    color:  'bg-warm/10',
    iconColor: 'text-warm',
  },
  {
    number: '03',
    title:  'Start living with intention',
    text:   'Workshops, offline meet-ups, creative projects. A community that chooses life over likes.',
    icon:   Sprout,
    color:  'bg-sand/20',
    iconColor: 'text-sand-500',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function HowItWorks() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-clay overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                   w-[600px] h-[600px] rounded-full bg-sage/3 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-20"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-sage block mb-4">
            How it works
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-olive tracking-tight">
            Simple. Human. Real.
          </h2>
        </motion.div>

        {/* Steps as cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="rounded-2xl bg-bone p-7 shadow-card hover:shadow-card-hover
                           card-lift border border-olive/5"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-11 h-11 rounded-xl ${step.color} flex items-center justify-center`}>
                    <Icon size={18} className={step.iconColor} />
                  </div>
                  <span className="font-serif text-3xl text-olive/10 leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-olive mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-olive/50 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
