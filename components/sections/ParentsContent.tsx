'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, MessageCircle, BookOpen, Clock, Users } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'

const ease = [0.16, 1, 0.3, 1] as const

const sections = [
  {
    icon:  Heart,
    title: 'You&apos;re not imagining it.',
    text:  [
      "The average teenager spends over 7 hours on screens daily. Social comparison, dopamine loops, and relentless feeds are engineering their attention — and their self-worth.",
      "Your concern is valid. The research is clear. And your teen's struggle is real, even when they can't name it yet.",
    ],
    iconBg: 'bg-warm/10',
    iconColor: 'text-warm',
  },
  {
    icon:  Shield,
    title: 'We&apos;re not anti-technology.',
    text:  [
      "ScrollLives isn't about deleting apps or banning phones. We're about building awareness, agency, and a community that chooses connection over comparison.",
      "We help teenagers understand how platforms are designed, and give them tools to make choices that actually align with what they want their life to look like.",
    ],
    iconBg: 'bg-sage/15',
    iconColor: 'text-sage-400',
  },
  {
    icon:  MessageCircle,
    title: 'What your teen actually does with us.',
    text:  [
      "Workshops that feel like honest conversations — not lectures. Community meet-ups. Creative projects. Weekly discussions about things that actually matter to them.",
      "A safe space to say \"I feel behind\" or \"I don't know who I am offline\" — and be heard by others who feel the same.",
    ],
    iconBg: 'bg-sand/20',
    iconColor: 'text-sand-500',
  },
]

const details = [
  { icon: BookOpen, text: 'Workshops that feel like conversations, not lectures' },
  { icon: Clock, text: 'Weekly community calls and offline meet-ups' },
  { icon: Users, text: 'A safe space to be honest about screen struggles' },
]

export default function ParentsContent() {
  return (
    <>
      <PageHero
        label="For parents"
        title="Your concern is valid."
        subtitle="You've seen the shifts. The scrolling, the comparison, the quiet withdrawal. We see it too — and we're doing something about it."
      />

      {/* Sections */}
      <section className="py-20 px-6 bg-bone">
        <div className="mx-auto max-w-3xl space-y-24">
          {sections.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease }}
                className="flex flex-col sm:flex-row gap-8 sm:gap-12"
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl ${s.iconBg}
                                flex items-center justify-center mt-1`}>
                  <Icon size={20} className={s.iconColor} />
                </div>
                <div>
                  <h2
                    className="font-serif text-2xl sm:text-3xl text-olive tracking-tight mb-4"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                  {s.text.map((para, j) => (
                    <p key={j} className="text-base text-olive/55 leading-relaxed mb-4 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Detail cards */}
      <section className="py-16 px-6 bg-clay">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {details.map((d, i) => {
              const Icon = d.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="rounded-xl bg-bone p-5 shadow-card border border-olive/5"
                >
                  <div className="w-9 h-9 rounded-lg bg-sage/10 flex items-center justify-center mb-3">
                    <Icon size={16} className="text-sage-400" />
                  </div>
                  <p className="text-sm text-olive/60 leading-relaxed">{d.text}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* How to help */}
      <section className="py-20 px-6 bg-bone">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-olive tracking-tight mb-6">
              How you can help.
            </h2>
            <ul className="space-y-4 mb-10">
              {[
                'Share the ScrollLives movement with your teenager — without pressure.',
                'Encourage offline time and model it yourself.',
                "Ask them what they actually enjoy when they're not on their phone.",
                'Let them lead — this is their movement, not ours to push.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-olive/60 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-warm shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                             bg-warm text-bone text-sm font-medium
                             transition-all duration-300 hover:bg-warm-500 shadow-soft"
                >
                  Let your teen join
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/schools"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                             border border-olive/20 text-olive text-sm font-medium
                             transition-all duration-300 hover:border-olive/40 hover:bg-olive/5"
                >
                  Bring this to their school
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
