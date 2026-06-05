'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, GraduationCap, HandHeart, Smartphone } from 'lucide-react'

const cards = [
  {
    label:      'Teenagers',
    title:      'For the teens who feel it.',
    text:       'You scroll, you compare, you feel it — that quiet exhaustion. You belong here.',
    cta:        'Join the movement',
    href:       '/join',
    bg:         'bg-olive',
    textColor:  'text-bone',
    labelColor: 'text-bone/40',
    textMuted:  'text-bone/60',
    ctaClass:   'bg-bone/10 text-bone hover:bg-bone/20 border-bone/20',
    arrowClass: 'text-bone/60',
    icon:       Smartphone,
    iconBg:     'bg-bone/10',
    iconColor:  'text-bone/70',
  },
  {
    label:      'Schools',
    title:      'For the educators who see it.',
    text:       'Bring a ScrollLives workshop or talk to your school. We speak the language of your students.',
    cta:        'Enquire now',
    href:       '/schools',
    bg:         'bg-bone border border-olive/10',
    textColor:  'text-olive',
    labelColor: 'text-olive/40',
    textMuted:  'text-olive/55',
    ctaClass:   'bg-warm text-bone hover:bg-warm-500 border-warm',
    arrowClass: 'text-bone/60',
    icon:       GraduationCap,
    iconBg:     'bg-warm/10',
    iconColor:  'text-warm',
  },
  {
    label:      'Volunteers',
    title:      'For those who want to show up.',
    text:       'Join a team of young people building something that matters. Every skill welcome.',
    cta:        'Volunteer',
    href:       '/volunteer',
    bg:         'bg-warm',
    textColor:  'text-bone',
    labelColor: 'text-bone/50',
    textMuted:  'text-bone/70',
    ctaClass:   'bg-bone/10 text-bone hover:bg-bone/20 border-bone/20',
    arrowClass: 'text-bone/60',
    icon:       HandHeart,
    iconBg:     'bg-bone/10',
    iconColor:  'text-bone/70',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function ForWho() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-bone overflow-hidden">
      {/* Subtle background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full
                   bg-sage/3 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-80 h-80 rounded-full
                   bg-sand/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-sage block mb-4">
            Who it&apos;s for
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-olive tracking-tight">
            Everyone has a place here.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className={`rounded-2xl p-8 flex flex-col gap-5 ${card.bg}
                           card-lift shadow-card hover:shadow-card-hover`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium uppercase tracking-widest ${card.labelColor}`}>
                    {card.label}
                  </span>
                  <div className={`w-9 h-9 rounded-lg ${card.iconBg} flex items-center justify-center`}>
                    <Icon size={16} className={card.iconColor} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`font-serif text-2xl mb-3 ${card.textColor}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${card.textMuted}`}>
                    {card.text}
                  </p>
                </div>
                <Link
                  href={card.href}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                              text-sm font-medium border transition-all duration-300
                              ${card.ctaClass}`}
                >
                  {card.cta}
                  <ArrowRight size={14} className={card.arrowClass} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
