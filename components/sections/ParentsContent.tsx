'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, MessageCircle } from 'lucide-react'
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
  },
  {
    icon:  Shield,
    title: 'We&apos;re not anti-technology.',
    text:  [
      "ScrollLives isn't about deleting apps or banning phones. We're about building awareness, agency, and a community that chooses connection over comparison.",
      "We help teenagers understand how platforms are designed, and give them tools to make choices that actually align with what they want their life to look like.",
    ],
  },
  {
    icon:  MessageCircle,
    title: 'What your teen actually does with us.',
    text:  [
      "Workshops that feel like honest conversations — not lectures. Community meet-ups. Creative projects. Weekly discussions about things that actually matter to them.",
      "A safe space to say \"I feel behind\" or \"I don't know who I am offline\" — and be heard by others who feel the same.",
    ],
  },
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
                <div className="shrink-0 w-10 h-10 rounded-xl bg-olive/8
                                flex items-center justify-center mt-1">
                  <Icon size={18} className="text-olive" />
                </div>
                <div>
                  <h2
                    className="font-serif text-2xl sm:text-3xl text-olive tracking-tight mb-4"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                  {s.text.map((para, j) => (
                    <p key={j} className="text-base text-olive/60 leading-relaxed mb-4 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* How to help */}
      <section className="py-20 px-6 bg-clay">
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
                <li key={i} className="flex items-start gap-3 text-base text-olive/65 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-warm shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                             bg-olive text-bone text-sm font-medium
                             transition-colors hover:bg-olive-500"
                >
                  Let your teen join
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/schools"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                             border border-olive/25 text-olive text-sm font-medium
                             transition-all hover:border-olive/50 hover:bg-olive/5"
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
