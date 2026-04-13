'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-lg border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo/option-b/logo-dark.svg"
            alt="SistemaHub"
            width={175}
            height={35}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="px-4 py-2 text-sm text-n-400 hover:text-n-50 transition-colors rounded-lg hover:bg-white/[0.04] font-medium"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#contact')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal border border-brand-teal/25 rounded-lg px-4 py-2 hover:bg-brand-teal/10 hover:border-brand-teal/50 transition-all"
          >
            Get in touch
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-n-400 hover:text-n-50 transition-colors"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark/98 border-b border-white/[0.06] px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNavClick(href)}
                className="text-left px-4 py-3 text-sm text-n-400 hover:text-n-50 transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 text-left px-4 py-3 text-sm font-semibold text-brand-teal"
            >
              Get in touch →
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
