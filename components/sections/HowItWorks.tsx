'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title:  'Reach out',
    text:   'Fill out our short form. No CV, no interview — just you being honest about where you are.',
  },
  {
    number: '02',
    title:  'Connect with your chapter',
    text:   "We'll match you with a local group or community call. Real people, real conversations.",
  },
  {
    number: '03',
    title:  'Start living with intention',
    text:   'Workshops, offline meet-ups, creative projects. A community that chooses life over likes.',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function HowItWorks() {
  return (
    <section className="py-28 md:py-40 px-6 bg-clay">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-20"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-olive/40 block mb-4">
            How it works
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-olive tracking-tight">
            Simple. Human. Real.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0 divide-y divide-olive/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12 py-10"
            >
              <span className="font-serif text-5xl text-olive/15 leading-none shrink-0 w-16">
                {step.number}
              </span>
              <div>
                <h3 className="font-serif text-xl text-olive mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-olive/55 leading-relaxed max-w-md">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
