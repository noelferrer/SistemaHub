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

const STEPS = [
  { num: '01', label: 'Understand', desc: 'We learn the real problem before opening a code editor.' },
  { num: '02', label: 'Design',     desc: 'We map out the solution — structure, flow, and UX first.' },
  { num: '03', label: 'Build',      desc: 'Iterative development. You see progress at every stage.' },
  { num: '04', label: 'Ship',       desc: 'Deployed, tested, and yours. We stay close after launch.' },
]

export default function About() {
  return (
    <section id="about" className="bg-n-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-mono text-brand-blue tracking-[0.14em] uppercase mb-5"
            >
              About
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-brand-dark mb-6"
            >
              We work with you,<br />not at you.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base text-n-500 leading-relaxed mb-4">
              SistemaHub is a software company that builds practical, purpose-built web
              applications for businesses. We design and develop tools that simplify
              operations — whether that&apos;s managing employees, handling properties, or
              running day-to-day workflows.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base text-n-500 leading-relaxed mb-10">
              We believe good software should be easy to use, reliable, and built for the
              people who actually use it every day. Our process is iterative — we build,
              show, refine, and ship. No surprises.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="mailto:hello@sistemahub.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-teal transition-colors"
            >
              Start a conversation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right — process steps */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-px"
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="group flex gap-5 p-5 rounded-xl hover:bg-white transition-colors"
              >
                <span className="font-mono text-xs text-brand-teal mt-1 flex-shrink-0 w-6">
                  {step.num}
                </span>
                <div>
                  <p className="font-display font-semibold text-brand-dark mb-1 group-hover:text-brand-blue transition-colors">
                    {step.label}
                  </p>
                  <p className="text-sm text-n-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
