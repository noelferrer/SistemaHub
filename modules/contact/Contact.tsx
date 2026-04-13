'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-dark relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 80%, rgb(var(--color-brand-teal) / 0.08) 0%, transparent 70%)' }}
      />
      {/* Top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-teal/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 py-28 md:py-36 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-mono text-brand-teal tracking-[0.14em] uppercase mb-8"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest leading-[1.0] text-white mb-6"
          >
            Ready to build<br />
            <span className="text-gradient">something real?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-n-400 leading-relaxed mb-12 max-w-md mx-auto"
          >
            Tell us what you&apos;re working on. We&apos;ll get back to you quickly
            — no sales calls, no fluff.
          </motion.p>

          {/* Email CTA */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@sistemahub.com"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-brand-teal text-brand-dark font-semibold text-sm hover:brightness-110 transition-all"
            >
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                <path d="M3 5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
                  stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              hello@sistemahub.com
            </a>
          </motion.div>

          {/* Meta */}
          <motion.p
            variants={fadeUp}
            className="mt-10 text-xs text-n-500 font-mono"
          >
            SistemaHub · sistemahub.com
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
