'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12"
          stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Web Application Development',
    desc: 'From concept to production — we design and build custom web apps that fit your workflow, not the other way around.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M7 5h10M12 17V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 7v4a7 7 0 0 0 7 7M19 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Business Workflow Automation',
    desc: 'We identify the manual, repetitive parts of your business and build systems that handle them — reliably and at scale.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="3" y="14" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <rect x="6" y="9" width="12" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
        <rect x="9" y="5"  width="6"  height="4" rx="1"   stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
    title: 'SaaS Product Development',
    desc: 'Have a product idea? We take it from spec to a shippable SaaS product — architecture, design, development, and launch.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
          stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Maintenance & Support',
    desc: "We don't disappear after launch. Ongoing monitoring, updates, and iterative improvements — as your business evolves.",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">

        {/* Header */}
        <motion.div
          className="mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-mono text-brand-blue tracking-[0.14em] uppercase mb-5"
          >
            Services
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-dark max-w-lg leading-[1.05]"
          >
            What we build.
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-px bg-n-200 rounded-2xl overflow-hidden"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="bg-white p-8 md:p-10 group hover:bg-n-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-n-100 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-dark mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-n-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
