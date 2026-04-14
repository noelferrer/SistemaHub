'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const PRODUCTS = [
  {
    badge:     'HR · People Ops',
    name:      'TaoLink HRIS',
    tagline:   'HR management that actually works.',
    desc:      'A human resource information system built for modern businesses. Tao­Link simplifies employee management, attendance tracking, leave requests, and HR reporting — all in one place.',
    features: [
      'Employee profiles & onboarding',
      'Attendance & time tracking',
      'Leave request management',
      'Payroll processing',
      'HR analytics & reporting',
    ],
    accentVar: '--color-brand-blue',
    href: 'https://taolink.sistemahub.com/',
    cta: 'View TaoLink',
  },
  {
    badge:     'Property · Real Estate',
    name:      'Landlord HQ',
    tagline:   'Property management without the spreadsheets.',
    desc:      'A property management web application built for landlords and property managers. Track units, tenants, rent payments, and maintenance requests without the mess.',
    features: [
      'Unit & tenant management',
      'Rent tracking & payment records',
      'Maintenance request workflows',
      'Lease document storage',
      'Owner reports & dashboards',
    ],
    accentVar: '--color-brand-teal',
    href: 'https://landlordhq.sistemahub.com/',
    cta: 'View Landlord HQ',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-brand-dark relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* Glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgb(var(--color-brand-blue) / 0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">

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
            className="text-[11px] font-mono text-brand-teal tracking-[0.14em] uppercase mb-5"
          >
            Products
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.05]"
          >
            Our products.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-n-400 text-base max-w-lg leading-relaxed"
          >
            Purpose-built applications solving real operational problems for businesses.
          </motion.p>
        </motion.div>

        {/* Product cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PRODUCTS.map((p) => {
            const accent     = `rgb(var(${p.accentVar}))`
            const accentFaint = `rgb(var(${p.accentVar}) / 0.08)`
            const accentBar  = `linear-gradient(90deg, transparent, rgb(var(${p.accentVar})), transparent)`

            return (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className="relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-8 hover:border-white/[0.14] hover:bg-white/[0.05] transition-all group"
              >
                {/* Gradient top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: accentBar }}
                />

                {/* Badge */}
                <span
                  className="inline-block text-[10px] font-mono tracking-[0.12em] uppercase px-2.5 py-1 rounded-md mb-6"
                  style={{ color: accent, background: accentFaint }}
                >
                  {p.badge}
                </span>

                {/* Product name */}
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {p.name}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: accent }}>
                  {p.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-n-400 leading-relaxed mb-6">{p.desc}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-n-400">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" style={{ color: accent, flexShrink: 0 }}>
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: accent }}
                >
                  {p.cta}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* More products note */}
        <motion.p
          className="mt-10 text-center text-xs text-n-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          More products in development — building the next generation of business tooling.
        </motion.p>

      </div>
    </section>
  )
}
