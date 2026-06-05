'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Instagram } from 'lucide-react'

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

// TikTok icon as inline SVG since lucide doesn't have it
function TikTokIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Rich natural background gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 30% 10%, rgba(188,108,90,0.08) 0%, transparent 60%), ' +
            'radial-gradient(ellipse 50% 40% at 70% 80%, rgba(107,127,94,0.06) 0%, transparent 55%), ' +
            'radial-gradient(ellipse 60% 50% at 90% 20%, rgba(212,196,168,0.1) 0%, transparent 50%), ' +
            'linear-gradient(180deg, #FDFCFB 0%, #F9F6F3 100%)',
        }}
      />

      {/* Decorative floating blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="pointer-events-none absolute top-20 -left-20 w-72 h-72 rounded-full
                   bg-warm/4 blur-3xl -z-10 animate-float"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.4, ease: 'easeOut' }}
        className="pointer-events-none absolute bottom-20 -right-20 w-80 h-80 rounded-full
                   bg-sage/5 blur-3xl -z-10 animate-float-slow"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.8, ease: 'easeOut' }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[500px] h-[500px] rounded-full bg-sand/4 blur-3xl -z-10 animate-pulse-soft"
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
                           bg-sage/10 text-moss border border-sage/20">
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
          className="max-w-xl mx-auto text-lg sm:text-xl text-olive/55 leading-relaxed mb-12"
        >
          ScrollLives is a youth-led movement helping teenagers build healthier,
          more intentional relationships with technology and social media.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         bg-warm text-bone text-sm font-medium
                         transition-all duration-300 hover:bg-warm-500 shadow-soft hover:shadow-card-hover"
            >
              Join the movement
              <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/schools"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         border border-olive/20 text-olive text-sm font-medium
                         transition-all duration-300 hover:border-olive/40 hover:bg-sand/10"
            >
              For schools
            </Link>
          </motion.div>
        </motion.div>

        {/* Social buttons */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3"
        >
          <motion.a
            href="https://www.tiktok.com/@scrollives?_r=1&_t=ZN-96unGIsQQWU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                       bg-olive/6 border border-olive/10 text-olive/70 text-sm font-medium
                       hover:bg-olive/10 hover:text-olive hover:border-olive/20
                       transition-all duration-300"
            aria-label="Follow us on TikTok"
          >
            <TikTokIcon size={16} />
            TikTok
          </motion.a>
          <motion.a
            href="https://www.instagram.com/scrollives?igsh=djVwMDY2ZW93MjVh&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                       bg-olive/6 border border-olive/10 text-olive/70 text-sm font-medium
                       hover:bg-olive/10 hover:text-olive hover:border-olive/20
                       transition-all duration-300"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={16} />
            Instagram
          </motion.a>
          <motion.a
            href="https://discord.gg/DzDE3UnYgH"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                       bg-[#5865F2]/10 border border-[#5865F2]/20 text-[#5865F2] text-sm font-medium
                       hover:bg-[#5865F2]/20 hover:border-[#5865F2]/30
                       transition-all duration-300"
            aria-label="Join our Discord server"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
            </svg>
            Discord
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-olive/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-olive/30 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
