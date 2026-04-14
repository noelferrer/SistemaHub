'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-glow" />

      {/* Decorative orbital mark — large, very faint, right-anchored */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[28%] pointer-events-none select-none opacity-[0.055]">
        <svg viewBox="0 0 400 400" width="680" height="680" fill="none">
          <defs>
            <linearGradient id="hero-g" x1="40" y1="40" x2="360" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" style={{ stopColor: 'rgb(var(--color-brand-blue))' }} />
              <stop offset="100%" style={{ stopColor: 'rgb(var(--color-brand-teal))' }} />
            </linearGradient>
          </defs>
          {/* Outer arc */}
          <circle cx="200" cy="200" r="160"
            stroke="url(#hero-g)" strokeWidth="14" fill="none"
            strokeDasharray="893.6 111.7" strokeLinecap="round"
            transform="rotate(110 200 200)" />
          {/* Inner arc */}
          <circle cx="200" cy="200" r="95"
            stroke="url(#hero-g)" strokeWidth="10" fill="none"
            strokeDasharray="530.9 66.3" strokeLinecap="round"
            transform="rotate(290 200 200)" />
          {/* Center */}
          <circle cx="200" cy="200" r="22" fill="url(#hero-g)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-24">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 mb-10 px-3.5 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/[0.06]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
            <span className="text-[11px] font-mono text-brand-teal tracking-[0.14em] uppercase">
              Web Applications · SaaS · Business Tools
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-[clamp(52px,7vw,88px)] font-extrabold leading-[0.95] tracking-tightest text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Software built<br />
            for{' '}
            <span className="text-gradient">real work.</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            className="text-lg md:text-xl text-n-400 leading-relaxed mb-12 max-w-[520px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
          >
            We design and build web applications for businesses that need things
            to actually work. No buzzwords. No black-box development. Just software
            that fits how you operate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
          >
            <button
              onClick={() => scrollTo('#products')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-teal text-brand-dark font-semibold text-sm hover:brightness-110 transition-all"
            >
              See our products
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('#about')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-n-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all"
            >
              How we work
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-n-400" />
          <span className="text-[10px] font-mono tracking-widest text-n-400 uppercase">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
